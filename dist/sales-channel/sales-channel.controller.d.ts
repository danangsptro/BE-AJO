import { SalesChannelService } from './sales-channel.service';
import { SalesChannel } from '../entities/sales-channel.entity';
export declare class SalesChannelController {
    private salesChannelService;
    constructor(salesChannelService: SalesChannelService);
    findAll(): Promise<SalesChannel[]>;
    findOne(id: string): Promise<SalesChannel>;
    create(salesChannel: Partial<SalesChannel>): Promise<SalesChannel>;
    update(id: string, salesChannel: Partial<SalesChannel>): Promise<SalesChannel>;
    remove(id: string): Promise<void>;
}
