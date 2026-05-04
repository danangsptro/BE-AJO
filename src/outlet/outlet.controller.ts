import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { OutletService } from './outlet.service';
import { Outlet } from '../entities/outlet.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/role.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('outlets')
@UseGuards(JwtAuthGuard, RolesGuard)
export class OutletController {
  constructor(private outletService: OutletService) {}

  @Get()
  findAll() {
    return this.outletService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.outletService.findOne(+id);
  }

  @Post()
  @Roles('owner', 'admin')
  create(@Body() outlet: Partial<Outlet>) {
    return this.outletService.create(outlet);
  }

  @Put(':id')
  @Roles('owner', 'admin')
  update(@Param('id') id: string, @Body() outlet: Partial<Outlet>) {
    return this.outletService.update(+id, outlet);
  }

  @Delete(':id')
  @Roles('owner', 'admin')
  remove(@Param('id') id: string) {
    return this.outletService.remove(+id);
  }
}