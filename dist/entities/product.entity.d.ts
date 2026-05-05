import { SalesItem } from './sales-item.entity';
import { StockDaily } from './stock-daily.entity';
export declare class Product {
    id?: number;
    name?: string;
    hpp?: number;
    created_at?: Date;
    salesItems?: SalesItem[];
    stockDailies?: StockDaily[];
}
