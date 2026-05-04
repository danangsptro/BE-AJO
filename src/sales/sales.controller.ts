import { Controller, Get, Post, Body, Param, UseGuards, Query, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { SalesService } from './sales.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/role.guard';
import { Roles } from '../auth/roles.decorator';
import { CreateSalesDto } from './dto/create-sales.dto';

@ApiTags('sales')
@ApiBearerAuth()
@Controller('sales')
@UseGuards(JwtAuthGuard, RolesGuard)
export class SalesController {
  constructor(private salesService: SalesService) {}

  @Post()
  @Roles('owner', 'admin', 'staff')
  create(@Body() createSalesDto: CreateSalesDto) {
    return this.salesService.create(createSalesDto);
  }

  @Get()
  findAll() {
    return this.salesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.salesService.findOne(+id);
  }

  @Get('report/monthly')
  getMonthlyReport(@Query('year') year: number, @Query('month') month: number) {
    return this.salesService.getMonthlyReport(year, month);
  }
}