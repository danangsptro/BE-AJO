import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { SalesChannelService } from './sales-channel.service';
import { SalesChannel } from '../entities/sales-channel.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/role.guard';
import { Roles } from '../auth/roles.decorator';

@ApiTags('sales-channels')
@ApiBearerAuth()
@Controller('sales-channels')
@UseGuards(JwtAuthGuard, RolesGuard)
export class SalesChannelController {
  constructor(private salesChannelService: SalesChannelService) {}

  @Get()
  @ApiOperation({ summary: 'Get all sales channels' })
  @ApiResponse({ status: 200, description: 'List of sales channels' })
  findAll() {
    return this.salesChannelService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get sales channel by ID' })
  @ApiParam({ name: 'id', type: 'number' })
  @ApiResponse({ status: 200, description: 'Sales channel found' })
  @ApiResponse({ status: 404, description: 'Sales channel not found' })
  findOne(@Param('id') id: string) {
    return this.salesChannelService.findOne(+id);
  }

  @Post()
  @Roles('owner', 'admin')
  @ApiOperation({ summary: 'Create a new sales channel' })
  @ApiResponse({ status: 201, description: 'Sales channel created successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  create(@Body() salesChannel: Partial<SalesChannel>) {
    return this.salesChannelService.create(salesChannel);
  }

  @Put(':id')
  @Roles('owner', 'admin')
  @ApiOperation({ summary: 'Update sales channel by ID' })
  @ApiParam({ name: 'id', type: 'number' })
  @ApiResponse({ status: 200, description: 'Sales channel updated successfully' })
  @ApiResponse({ status: 404, description: 'Sales channel not found' })
  update(@Param('id') id: string, @Body() salesChannel: Partial<SalesChannel>) {
    return this.salesChannelService.update(+id, salesChannel);
  }

  @Delete(':id')
  @Roles('owner', 'admin')
  @ApiOperation({ summary: 'Delete sales channel by ID' })
  @ApiParam({ name: 'id', type: 'number' })
  @ApiResponse({ status: 200, description: 'Sales channel deleted successfully' })
  @ApiResponse({ status: 404, description: 'Sales channel not found' })
  remove(@Param('id') id: string) {
    return this.salesChannelService.remove(+id);
  }
}