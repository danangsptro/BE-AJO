import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards, BadRequestException } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { UserService } from './user.service';
import { UserRole } from '../entities/user.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/role.guard';
import { Roles } from '../auth/roles.decorator';

@ApiTags('users')
@ApiBearerAuth()
@Controller('users')
@UseGuards(JwtAuthGuard, RolesGuard)
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  @Roles('owner', 'admin')
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  @Roles('owner', 'admin')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Post()
  @Roles('owner')
  create(@Body() body: { username: string; password: string; role: string }) {
    if (!Object.values(UserRole).includes(body.role as UserRole)) {
      throw new BadRequestException('Invalid role. Must be: owner, admin, or staff');
    }
    return this.userService.create(body.username, body.password, body.role as UserRole);
  }

  @Put(':id')
  @Roles('owner')
  update(@Param('id') id: string, @Body() body: { username: string; role: string }) {
    if (!Object.values(UserRole).includes(body.role as UserRole)) {
      throw new BadRequestException('Invalid role. Must be: owner, admin, or staff');
    }
    return this.userService.update(+id, body.username, body.role as UserRole);
  }

  @Delete(':id')
  @Roles('owner')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}