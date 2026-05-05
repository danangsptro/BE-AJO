import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
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
  @ApiOperation({ summary: 'Get all daily stocks' })
  @ApiResponse({ status: 200, description: 'List of daily stocks' })
  findAll() {
    return this.stockDailyService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get daily stock by ID' })
  @ApiParam({ name: 'id', type: 'number' })
  @ApiResponse({ status: 200, description: 'Daily stock found' })
  @ApiResponse({ status: 404, description: 'Daily stock not found' })
  findOne(@Param('id') id: string) {
    return this.stockDailyService.findOne(+id);
  }

  @Post()
  @Roles('owner', 'admin', 'staff')
  @ApiOperation({ summary: 'Create a new daily stock record' })
  @ApiResponse({ status: 201, description: 'Daily stock created successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  create(@Body() stockDaily: Partial<StockDaily>) {
    return this.stockDailyService.create(stockDaily);
  }

  @Put(':id')
  @Roles('owner', 'admin')
  @ApiOperation({ summary: 'Update daily stock by ID' })
  @ApiParam({ name: 'id', type: 'number' })
  @ApiResponse({ status: 200, description: 'Daily stock updated successfully' })
  @ApiResponse({ status: 404, description: 'Daily stock not found' })
  update(@Param('id') id: string, @Body() stockDaily: Partial<StockDaily>) {
    return this.stockDailyService.update(+id, stockDaily);
  }

  @Delete(':id')
  @Roles('owner', 'admin')
  @ApiOperation({ summary: 'Delete daily stock by ID' })
  @ApiParam({ name: 'id', type: 'number' })
  @ApiResponse({ status: 200, description: 'Daily stock deleted successfully' })
  @ApiResponse({ status: 404, description: 'Daily stock not found' })
  remove(@Param('id') id: string) {
    return this.stockDailyService.remove(+id);
  }
}