import { Product } from './product.entity';
import { Outlet } from './outlet.entity';
export declare class StockDaily {
    id?: number;
    date?: string;
    product_id?: number;
    outlet_id?: number;
    starting_stock?: number;
    ending_stock?: number;
    created_at?: Date;
    product: Product;
    outlet: Outlet;
}
