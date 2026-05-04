import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StockDaily } from '../entities/stock-daily.entity';

@Injectable()
export class StockDailyService {
  constructor(
    @InjectRepository(StockDaily)
    private stockDailyRepository: Repository<StockDaily>,
  ) {}

  findAll(): Promise<StockDaily[]> {
    return this.stockDailyRepository.find();
  }

  async findOne(id: number): Promise<StockDaily> {
    const stockDaily = await this.stockDailyRepository.findOne({ where: { id } });
    if (!stockDaily) {
      throw new NotFoundException('StockDaily not found');
    }
    return stockDaily;
  }

  create(stockDaily: Partial<StockDaily>): Promise<StockDaily> {
    return this.stockDailyRepository.save(stockDaily);
  }

  async update(id: number, stockDaily: Partial<StockDaily>): Promise<StockDaily> {
    await this.stockDailyRepository.update(id, stockDaily);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.stockDailyRepository.delete(id);
  }
}