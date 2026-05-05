import { Repository } from 'typeorm';
import { CapitalExpense } from '../entities/capital-expense.entity';
export declare class CapitalExpenseService {
    private capitalExpenseRepository;
    constructor(capitalExpenseRepository: Repository<CapitalExpense>);
    findAll(): Promise<CapitalExpense[]>;
    findOne(id: number): Promise<CapitalExpense>;
    create(capitalExpense: Partial<CapitalExpense>): Promise<CapitalExpense>;
    update(id: number, capitalExpense: Partial<CapitalExpense>): Promise<CapitalExpense>;
    remove(id: number): Promise<void>;
}
