import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { PurchaseService } from './purchase.service';
import { Purchase } from '../entities/purchase.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/role.guard';
import { Roles } from '../auth/roles.decorator';

@ApiTags('purchases')
@ApiBearerAuth()
@Controller('purchases')
@UseGuards(JwtAuthGuard, RolesGuard)
export class PurchaseController {
  constructor(private purchaseService: PurchaseService) {}

  @Get()
  @ApiOperation({ summary: 'Get all purchases' })
  @ApiResponse({ status: 200, description: 'List of purchases' })
  findAll() {
    return this.purchaseService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get purchase by ID' })
  @ApiParam({ name: 'id', type: 'number' })
  @ApiResponse({ status: 200, description: 'Purchase found' })
  @ApiResponse({ status: 404, description: 'Purchase not found' })
  findOne(@Param('id') id: string) {
    return this.purchaseService.findOne(+id);
  }

  @Post()
  @Roles('owner', 'admin')
  @ApiOperation({ summary: 'Create a new purchase' })
  @ApiResponse({ status: 201, description: 'Purchase created successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  create(@Body() purchase: Partial<Purchase>) {
    return this.purchaseService.create(purchase);
  }

  @Put(':id')
  @Roles('owner', 'admin')
  @ApiOperation({ summary: 'Update purchase by ID' })
  @ApiParam({ name: 'id', type: 'number' })
  @ApiResponse({ status: 200, description: 'Purchase updated successfully' })
  @ApiResponse({ status: 404, description: 'Purchase not found' })
  update(@Param('id') id: string, @Body() purchase: Partial<Purchase>) {
    return this.purchaseService.update(+id, purchase);
  }

  @Delete(':id')
  @Roles('owner', 'admin')
  @ApiOperation({ summary: 'Delete purchase by ID' })
  @ApiParam({ name: 'id', type: 'number' })
  @ApiResponse({ status: 200, description: 'Purchase deleted successfully' })
  @ApiResponse({ status: 404, description: 'Purchase not found' })
  remove(@Param('id') id: string) {
    return this.purchaseService.remove(+id);
  }
}