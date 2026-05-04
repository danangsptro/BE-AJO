import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Purchase } from '../entities/purchase.entity';

@Injectable()
export class PurchaseService {
  constructor(
    @InjectRepository(Purchase)
    private purchaseRepository: Repository<Purchase>,
  ) {}

  findAll(): Promise<Purchase[]> {
    return this.purchaseRepository.find();
  }

  async findOne(id: number): Promise<Purchase> {
    const purchase = await this.purchaseRepository.findOne({ where: { id } });
    if (!purchase) {
      throw new NotFoundException('Purchase not found');
    }
    return purchase;
  }

  create(purchase: Partial<Purchase>): Promise<Purchase> {
    if (purchase.price && purchase.qty && purchase.discount !== undefined) {
      purchase.total_price = (purchase.price * purchase.qty) - (purchase.discount || 0);
    }
    return this.purchaseRepository.save(purchase);
  }

  async update(id: number, purchase: Partial<Purchase>): Promise<Purchase> {
    await this.purchaseRepository.update(id, purchase);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.purchaseRepository.delete(id);
  }
}