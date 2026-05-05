import { Repository } from 'typeorm';
import { Expense } from '../entities/expense.entity';
export declare class ExpenseService {
    private expenseRepository;
    constructor(expenseRepository: Repository<Expense>);
    findAll(): Promise<Expense[]>;
    findOne(id: number): Promise<Expense>;
    create(expense: Partial<Expense>): Promise<Expense>;
    update(id: number, expense: Partial<Expense>): Promise<Expense>;
    remove(id: number): Promise<void>;
}
