import { ExpenseService } from './expense.service';
import { Expense } from '../entities/expense.entity';
export declare class ExpenseController {
    private expenseService;
    constructor(expenseService: ExpenseService);
    findAll(): Promise<Expense[]>;
    findOne(id: string): Promise<Expense>;
    create(expense: Partial<Expense>): Promise<Expense>;
    update(id: string, expense: Partial<Expense>): Promise<Expense>;
    remove(id: string): Promise<void>;
}
