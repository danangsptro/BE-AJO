import { Product } from './product.entity';
import { Outlet } from './outlet.entity';
export declare class Purchase {
    id: number;
    date: string;
    product_id: number;
    outlet_id: number;
    qty: number;
    price: number;
    discount: number;
    total_price: number;
    note?: string;
    created_at: Date;
    product: Product;
    outlet: Outlet;
}
