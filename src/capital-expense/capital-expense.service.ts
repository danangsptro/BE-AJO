import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CapitalExpense } from '../entities/capital-expense.entity';

@Injectable()
export class CapitalExpenseService {
  constructor(
    @InjectRepository(CapitalExpense)
    private capitalExpenseRepository: Repository<CapitalExpense>,
  ) {}

  findAll(): Promise<CapitalExpense[]> {
    return this.capitalExpenseRepository.find();
  }

  async findOne(id: number): Promise<CapitalExpense> {
    const capitalExpense = await this.capitalExpenseRepository.findOne({ where: { id } });
    if (!capitalExpense) {
      throw new NotFoundException('CapitalExpense not found');
    }
    return capitalExpense;
  }

  create(capitalExpense: Partial<CapitalExpense>): Promise<CapitalExpense> {
    return this.capitalExpenseRepository.save(capitalExpense);
  }

  async update(id: number, capitalExpense: Partial<CapitalExpense>): Promise<CapitalExpense> {
    await this.capitalExpenseRepository.update(id, capitalExpense);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.capitalExpenseRepository.delete(id);
  }
}