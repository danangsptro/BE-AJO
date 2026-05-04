import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { StockDailyService } from './stock-daily.service';
import { StockDaily } from '../entities/stock-daily.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/role.guard';
import { Roles } from '../auth/roles.decorator';

@ApiTags('stock-daily')
@ApiBearerAuth()
@Controller('stock-daily')
@UseGuards(JwtAuthGuard, RolesGuard)
export class StockDailyController {
  constructor(private stockDailyService: StockDailyService) {}

  @Get()
  findAll() {
    return this.stockDailyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stockDailyService.findOne(+id);
  }

  @Post()
  @Roles('owner', 'admin', 'staff')
  create(@Body() stockDaily: Partial<StockDaily>) {
    return this.stockDailyService.create(stockDaily);
  }

  @Put(':id')
  @Roles('owner', 'admin')
  update(@Param('id') id: string, @Body() stockDaily: Partial<StockDaily>) {
    return this.stockDailyService.update(+id, stockDaily);
  }

  @Delete(':id')
  @Roles('owner', 'admin')
  remove(@Param('id') id: string) {
    return this.stockDailyService.remove(+id);
  }
}