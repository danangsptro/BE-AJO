import { Repository } from 'typeorm';
import { StockDaily } from '../entities/stock-daily.entity';
export declare class StockDailyService {
    private stockDailyRepository;
    constructor(stockDailyRepository: Repository<StockDaily>);
    findAll(): Promise<StockDaily[]>;
    findOne(id: number): Promise<StockDaily>;
    create(stockDaily: Partial<StockDaily>): Promise<StockDaily>;
    update(id: number, stockDaily: Partial<StockDaily>): Promise<StockDaily>;
    remove(id: number): Promise<void>;
}
