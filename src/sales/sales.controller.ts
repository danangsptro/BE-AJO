import { Controller, Get, Post, Body, Param, UseGuards, Query } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse, ApiParam, ApiQuery } from '@nestjs/swagger';
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
  @ApiOperation({ summary: 'Create a new sales transaction' })
  @ApiResponse({ status: 201, description: 'Sales created successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  create(@Body() createSalesDto: CreateSalesDto) {
    return this.salesService.create(createSalesDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all sales transactions' })
  @ApiResponse({ status: 200, description: 'List of sales' })
  findAll() {
    return this.salesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get sales transaction by ID' })
  @ApiParam({ name: 'id', type: 'number' })
  @ApiResponse({ status: 200, description: 'Sales found' })
  @ApiResponse({ status: 404, description: 'Sales not found' })
  findOne(@Param('id') id: string) {
    return this.salesService.findOne(+id);
  }

  @Get('report/monthly')
  @ApiOperation({ summary: 'Get monthly sales report' })
  @ApiQuery({ name: 'year', type: 'number', required: false })
  @ApiQuery({ name: 'month', type: 'number', required: false })
  @ApiResponse({ status: 200, description: 'Monthly sales report' })
  getMonthlyReport(@Query('year') year: number, @Query('month') month: number) {
    return this.salesService.getMonthlyReport(year, month);
  }
}