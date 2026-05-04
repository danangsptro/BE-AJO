import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { PurchaseService } from './purchase.service';
import { Purchase } from '../entities/purchase.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/role.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('purchases')
@UseGuards(JwtAuthGuard, RolesGuard)
export class PurchaseController {
  constructor(private purchaseService: PurchaseService) {}

  @Get()
  findAll() {
    return this.purchaseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.purchaseService.findOne(+id);
  }

  @Post()
  @Roles('owner', 'admin')
  create(@Body() purchase: Partial<Purchase>) {
    return this.purchaseService.create(purchase);
  }

  @Put(':id')
  @Roles('owner', 'admin')
  update(@Param('id') id: string, @Body() purchase: Partial<Purchase>) {
    return this.purchaseService.update(+id, purchase);
  }

  @Delete(':id')
  @Roles('owner', 'admin')
  remove(@Param('id') id: string) {
    return this.purchaseService.remove(+id);
  }
}