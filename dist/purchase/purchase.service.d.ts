import { Repository } from 'typeorm';
import { Purchase } from '../entities/purchase.entity';
export declare class PurchaseService {
    private purchaseRepository;
    constructor(purchaseRepository: Repository<Purchase>);
    findAll(): Promise<Purchase[]>;
    findOne(id: number): Promise<Purchase>;
    create(purchase: Partial<Purchase>): Promise<Purchase>;
    update(id: number, purchase: Partial<Purchase>): Promise<Purchase>;
    remove(id: number): Promise<void>;
}
