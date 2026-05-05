import { StockDailyService } from './stock-daily.service';
import { StockDaily } from '../entities/stock-daily.entity';
export declare class StockDailyController {
    private stockDailyService;
    constructor(stockDailyService: StockDailyService);
    findAll(): Promise<StockDaily[]>;
    findOne(id: string): Promise<StockDaily>;
    create(stockDaily: Partial<StockDaily>): Promise<StockDaily>;
    update(id: string, stockDaily: Partial<StockDaily>): Promise<StockDaily>;
    remove(id: string): Promise<void>;
}
