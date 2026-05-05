import { OutletService } from './outlet.service';
import { Outlet } from '../entities/outlet.entity';
export declare class OutletController {
    private outletService;
    constructor(outletService: OutletService);
    findAll(): Promise<Outlet[]>;
    findOne(id: string): Promise<Outlet>;
    create(outlet: Partial<Outlet>): Promise<Outlet>;
    update(id: string, outlet: Partial<Outlet>): Promise<Outlet>;
    remove(id: string): Promise<void>;
}
