import { Sales } from './sales.entity';
import { CapitalExpense } from './capital-expense.entity';
export declare class Outlet {
    id?: number;
    name?: string;
    address?: string;
    phone?: string;
    created_at?: Date;
    sales?: Sales[];
    capitalExpenses?: CapitalExpense[];
}
