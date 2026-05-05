import { PurchaseService } from './purchase.service';
import { Purchase } from '../entities/purchase.entity';
export declare class PurchaseController {
    private purchaseService;
    constructor(purchaseService: PurchaseService);
    findAll(): Promise<Purchase[]>;
    findOne(id: string): Promise<Purchase>;
    create(purchase: Partial<Purchase>): Promise<Purchase>;
    update(id: string, purchase: Partial<Purchase>): Promise<Purchase>;
    remove(id: string): Promise<void>;
}
