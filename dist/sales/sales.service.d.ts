import { Repository, DataSource } from 'typeorm';
import { Sales } from '../entities/sales.entity';
import { SalesItem } from '../entities/sales-item.entity';
import { Product } from '../entities/product.entity';
import { CreateSalesDto } from './dto/create-sales.dto';
export declare class SalesService {
    private salesRepository;
    private salesItemRepository;
    private productRepository;
    private dataSource;
    constructor(salesRepository: Repository<Sales>, salesItemRepository: Repository<SalesItem>, productRepository: Repository<Product>, dataSource: DataSource);
    create(createSalesDto: CreateSalesDto): Promise<Sales>;
    findAll(): Promise<Sales[]>;
    findOne(id: number): Promise<Sales>;
    getMonthlyReport(year: number, month: number): Promise<{
        totalRevenue: number;
        totalProfit: number;
    }>;
}
