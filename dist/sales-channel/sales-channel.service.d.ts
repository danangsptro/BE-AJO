import { Repository } from 'typeorm';
import { SalesChannel } from '../entities/sales-channel.entity';
export declare class SalesChannelService {
    private salesChannelRepository;
    constructor(salesChannelRepository: Repository<SalesChannel>);
    findAll(): Promise<SalesChannel[]>;
    findOne(id: number): Promise<SalesChannel>;
    create(salesChannel: Partial<SalesChannel>): Promise<SalesChannel>;
    update(id: number, salesChannel: Partial<SalesChannel>): Promise<SalesChannel>;
    remove(id: number): Promise<void>;
}
