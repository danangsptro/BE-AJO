import { Sales } from './sales.entity';
import { Product } from './product.entity';
export declare class SalesItem {
    id?: number;
    sales_id?: number;
    product_id?: number;
    qty?: number;
    price?: number;
    discount?: number;
    total_price?: number;
    hpp?: number;
    profit?: number;
    created_at?: Date;
    sales?: Sales;
    product?: Product;
}
