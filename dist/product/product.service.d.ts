import { Repository } from 'typeorm';
import { Product } from '../entities/product.entity';
export declare class ProductService {
    private productRepository;
    constructor(productRepository: Repository<Product>);
    findAll(): Promise<Product[]>;
    findOne(id: number): Promise<Product>;
    create(product: Partial<Product>): Promise<Product>;
    update(id: number, product: Partial<Product>): Promise<Product>;
    remove(id: number): Promise<void>;
}
