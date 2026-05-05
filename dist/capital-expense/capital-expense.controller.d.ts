import { CapitalExpenseService } from './capital-expense.service';
import { CapitalExpense } from '../entities/capital-expense.entity';
export declare class CapitalExpenseController {
    private capitalExpenseService;
    constructor(capitalExpenseService: CapitalExpenseService);
    findAll(): Promise<CapitalExpense[]>;
    findOne(id: string): Promise<CapitalExpense>;
    create(capitalExpense: Partial<CapitalExpense>): Promise<CapitalExpense>;
    update(id: string, capitalExpense: Partial<CapitalExpense>): Promise<CapitalExpense>;
    remove(id: string): Promise<void>;
}
