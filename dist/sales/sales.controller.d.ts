import { SalesService } from './sales.service';
import { CreateSalesDto } from './dto/create-sales.dto';
export declare class SalesController {
    private salesService;
    constructor(salesService: SalesService);
    create(createSalesDto: CreateSalesDto): Promise<import("../entities/sales.entity").Sales>;
    findAll(): Promise<import("../entities/sales.entity").Sales[]>;
    findOne(id: string): Promise<import("../entities/sales.entity").Sales>;
    getMonthlyReport(year: number, month: number): Promise<{
        totalRevenue: number;
        totalProfit: number;
    }>;
}
