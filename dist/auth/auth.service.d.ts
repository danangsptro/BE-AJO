import { Repository } from 'typeorm';
import { User, UserRole } from '../entities/user.entity';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userRepository;
    private jwtService;
    constructor(userRepository: Repository<User>, jwtService: JwtService);
    register(username: string, password: string, role?: UserRole): Promise<User>;
    login(username: string, password: string): Promise<{
        access_token: string;
    }>;
}
