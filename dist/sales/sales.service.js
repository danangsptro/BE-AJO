"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const sales_entity_1 = require("../entities/sales.entity");
const sales_item_entity_1 = require("../entities/sales-item.entity");
const product_entity_1 = require("../entities/product.entity");
let SalesService = class SalesService {
    salesRepository;
    salesItemRepository;
    productRepository;
    dataSource;
    constructor(salesRepository, salesItemRepository, productRepository, dataSource) {
        this.salesRepository = salesRepository;
        this.salesItemRepository = salesItemRepository;
        this.productRepository = productRepository;
        this.dataSource = dataSource;
    }
    async create(createSalesDto) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const sales = this.salesRepository.create({
                date: createSalesDto.date,
                outlet_id: createSalesDto.outlet_id,
                channel_id: createSalesDto.channel_id,
            });
            const savedSales = await queryRunner.manager.save(sales_entity_1.Sales, sales);
            for (const item of createSalesDto.items) {
                const product = await this.productRepository.findOne({
                    where: { id: item.product_id },
                });
                if (!product) {
                    throw new common_1.NotFoundException(`Product with id ${item.product_id} not found`);
                }
                const hpp = product.hpp ?? 0;
                const total_price = item.price * item.qty - (item.discount || 0);
                const profit = total_price - hpp * item.qty;
                const salesItem = this.salesItemRepository.create({
                    sales_id: savedSales.id,
                    product_id: item.product_id,
                    qty: item.qty,
                    price: item.price,
                    discount: item.discount || 0,
                    total_price,
                    hpp,
                    profit,
                });
                await queryRunner.manager.save(sales_item_entity_1.SalesItem, salesItem);
            }
            await queryRunner.commitTransaction();
            return this.findOne(savedSales.id);
        }
        catch (err) {
            await queryRunner.rollbackTransaction();
            throw err;
        }
        finally {
            await queryRunner.release();
        }
    }
    async findAll() {
        return this.salesRepository.find({
            relations: ['salesItems', 'salesItems.product'],
        });
    }
    async findOne(id) {
        const sales = await this.salesRepository.findOne({
            where: { id },
            relations: ['salesItems', 'salesItems.product'],
        });
        if (!sales) {
            throw new common_1.NotFoundException('Sales not found');
        }
        return sales;
    }
    async getMonthlyReport(year, month) {
        const startDate = new Date(year, month - 1, 1);
        const endDate = new Date(year, month, 1);
        const sales = await this.salesRepository
            .createQueryBuilder('sales')
            .leftJoinAndSelect('sales.salesItems', 'salesItems')
            .where('sales.date >= :startDate', {
            startDate: startDate.toISOString().split('T')[0],
        })
            .andWhere('sales.date < :endDate', {
            endDate: endDate.toISOString().split('T')[0],
        })
            .getMany();
        let totalRevenue = 0;
        let totalProfit = 0;
        for (const sale of sales) {
            for (const item of sale.salesItems ?? []) {
                totalRevenue += Number(item.total_price || 0);
                totalProfit += Number(item.profit || 0);
            }
        }
        return {
            totalRevenue,
            totalProfit,
        };
    }
};
exports.SalesService = SalesService;
exports.SalesService = SalesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(sales_entity_1.Sales)),
    __param(1, (0, typeorm_1.InjectRepository)(sales_item_entity_1.SalesItem)),
    __param(2, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.DataSource])
], SalesService);
//# sourceMappingURL=sales.service.js.map