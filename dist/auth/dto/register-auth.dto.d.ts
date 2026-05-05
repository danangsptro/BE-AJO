import { UserRole } from '../../entities/user.entity';
export declare class CreateAuthDto {
    username: string;
    password: string;
    role?: UserRole;
}
