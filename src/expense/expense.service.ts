import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Expense } from '../entities/expense.entity';

@Injectable()
export class ExpenseService {
  constructor(
    @InjectRepository(Expense)
    private expenseRepository: Repository<Expense>,
  ) {}

  findAll(): Promise<Expense[]> {
    return this.expenseRepository.find();
  }

  async findOne(id: number): Promise<Expense> {
    const expense = await this.expenseRepository.findOne({ where: { id } });
    if (!expense) {
      throw new NotFoundException('Expense not found');
    }
    return expense;
  }

  create(expense: Partial<Expense>): Promise<Expense> {
    return this.expenseRepository.save(expense);
  }

  async update(id: number, expense: Partial<Expense>): Promise<Expense> {
    await this.expenseRepository.update(id, expense);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.expenseRepository.delete(id);
  }
}