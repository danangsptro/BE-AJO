import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(body: CreateAuthDto): Promise<import("../entities/user.entity").User>;
    login(body: LoginAuthDto): Promise<{
        access_token: string;
    }>;
}
