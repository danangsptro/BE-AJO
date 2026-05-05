import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { OutletService } from './outlet.service';
import { Outlet } from '../entities/outlet.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/role.guard';
import { Roles } from '../auth/roles.decorator';

@ApiTags('outlets')
@ApiBearerAuth()
@Controller('outlets')
@UseGuards(JwtAuthGuard, RolesGuard)
export class OutletController {
  constructor(private outletService: OutletService) {}

  @Get()
  @ApiOperation({ summary: 'Get all outlets' })
  @ApiResponse({ status: 200, description: 'List of outlets' })
  findAll() {
    return this.outletService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get outlet by ID' })
  @ApiParam({ name: 'id', type: 'number' })
  @ApiResponse({ status: 200, description: 'Outlet found' })
  @ApiResponse({ status: 404, description: 'Outlet not found' })
  findOne(@Param('id') id: string) {
    return this.outletService.findOne(+id);
  }

  @Post()
  @Roles('owner', 'admin')
  @ApiOperation({ summary: 'Create a new outlet' })
  @ApiResponse({ status: 201, description: 'Outlet created successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  create(@Body() outlet: Partial<Outlet>) {
    return this.outletService.create(outlet);
  }

  @Put(':id')
  @Roles('owner', 'admin')
  @ApiOperation({ summary: 'Update outlet by ID' })
  @ApiParam({ name: 'id', type: 'number' })
  @ApiResponse({ status: 200, description: 'Outlet updated successfully' })
  @ApiResponse({ status: 404, description: 'Outlet not found' })
  update(@Param('id') id: string, @Body() outlet: Partial<Outlet>) {
    return this.outletService.update(+id, outlet);
  }

  @Delete(':id')
  @Roles('owner', 'admin')
  @ApiOperation({ summary: 'Delete outlet by ID' })
  @ApiParam({ name: 'id', type: 'number' })
  @ApiResponse({ status: 200, description: 'Outlet deleted successfully' })
  @ApiResponse({ status: 404, description: 'Outlet not found' })
  remove(@Param('id') id: string) {
    return this.outletService.remove(+id);
  }
}