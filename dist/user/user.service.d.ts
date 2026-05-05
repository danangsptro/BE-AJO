import { Repository } from 'typeorm';
import { User, UserRole } from '../entities/user.entity';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    create(username: string, password: string, role: UserRole): Promise<User>;
    update(id: number, username: string, role: UserRole): Promise<User>;
    remove(id: number): Promise<void>;
}
