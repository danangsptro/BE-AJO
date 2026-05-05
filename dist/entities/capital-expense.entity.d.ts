import { Outlet } from './outlet.entity';
export declare class CapitalExpense {
    id: number;
    date: string;
    amount: number;
    description?: string;
    outlet_id?: number;
    payment_method?: string;
    created_at: Date;
    outlet: Outlet;
}
