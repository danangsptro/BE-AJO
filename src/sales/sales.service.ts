import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { Sales } from '../entities/sales.entity';
import { SalesItem } from '../entities/sales-item.entity';
import { Product } from '../entities/product.entity';
import { CreateSalesDto } from './dto/create-sales.dto';

@Injectable()
export class SalesService {
  constructor(
    @InjectRepository(Sales)
    private salesRepository: Repository<Sales>,

    @InjectRepository(SalesItem)
    private salesItemRepository: Repository<SalesItem>,

    @InjectRepository(Product)
    private productRepository: Repository<Product>,

    private dataSource: DataSource,
  ) {}

  async create(createSalesDto: CreateSalesDto): Promise<Sales> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const sales = this.salesRepository.create({
        date: createSalesDto.date,
        outlet_id: createSalesDto.outlet_id,
        channel_id: createSalesDto.channel_id,
      });

      const savedSales = await queryRunner.manager.save(Sales, sales);

      for (const item of createSalesDto.items) {
        const product = await this.productRepository.findOne({
          where: { id: item.product_id },
        });

        if (!product) {
          throw new NotFoundException(
            `Product with id ${item.product_id} not found`,
          );
        }

        const hpp = product.hpp ?? 0;

        const total_price = item.price * item.qty - (item.discount || 0);

        const profit = total_price - hpp * item.qty;

        const salesItem = this.salesItemRepository.create({
          sales_id: savedSales.id,
          product_id: item.product_id,
          qty: item.qty,
          price: item.price,
          discount: item.discount || 0,
          total_price,
          hpp,
          profit,
        });

        await queryRunner.manager.save(SalesItem, salesItem);
      }

      await queryRunner.commitTransaction();

      return this.findOne(savedSales.id!);
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw err;
    } finally {
      await queryRunner.release();
    }
  }

  async findAll(): Promise<Sales[]> {
    return this.salesRepository.find({
      relations: ['salesItems', 'salesItems.product'],
    });
  }

  async findOne(id: number): Promise<Sales> {
    const sales = await this.salesRepository.findOne({
      where: { id },
      relations: ['salesItems', 'salesItems.product'],
    });

    if (!sales) {
      throw new NotFoundException('Sales not found');
    }

    return sales;
  }

  async getMonthlyReport(year: number, month: number) {
    const startDate = new Date(year, month - 1, 1);
    const endDate = new Date(year, month, 1);

    const sales = await this.salesRepository
      .createQueryBuilder('sales')
      .leftJoinAndSelect('sales.salesItems', 'salesItems')
      .where('sales.date >= :startDate', {
        startDate: startDate.toISOString().split('T')[0],
      })
      .andWhere('sales.date < :endDate', {
        endDate: endDate.toISOString().split('T')[0],
      })
      .getMany();

    let totalRevenue = 0;
    let totalProfit = 0;

    for (const sale of sales) {
      for (const item of sale.salesItems ?? []) {
        totalRevenue += Number(item.total_price || 0);
        totalProfit += Number(item.profit || 0);
      }
    }

    return {
      totalRevenue,
      totalProfit,
    };
  }
}
