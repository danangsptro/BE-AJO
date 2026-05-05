import { Repository } from 'typeorm';
import { Outlet } from '../entities/outlet.entity';
export declare class OutletService {
    private outletRepository;
    constructor(outletRepository: Repository<Outlet>);
    findAll(): Promise<Outlet[]>;
    findOne(id: number): Promise<Outlet>;
    create(outlet: Partial<Outlet>): Promise<Outlet>;
    update(id: number, outlet: Partial<Outlet>): Promise<Outlet>;
    remove(id: number): Promise<void>;
}
