import { Outlet } from './outlet.entity';
import { SalesChannel } from './sales-channel.entity';
import { SalesItem } from './sales-item.entity';
export declare class Sales {
    id?: number;
    date?: string;
    outlet_id?: number;
    channel_id?: number;
    created_at?: Date;
    outlet?: Outlet;
    channel?: SalesChannel;
    salesItems?: SalesItem[];
}
