import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { SalesChannelService } from './sales-channel.service';
import { SalesChannel } from '../entities/sales-channel.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/role.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('sales-channels')
@UseGuards(JwtAuthGuard, RolesGuard)
export class SalesChannelController {
  constructor(private salesChannelService: SalesChannelService) {}

  @Get()
  findAll() {
    return this.salesChannelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.salesChannelService.findOne(+id);
  }

  @Post()
  @Roles('owner', 'admin')
  create(@Body() salesChannel: Partial<SalesChannel>) {
    return this.salesChannelService.create(salesChannel);
  }

  @Put(':id')
  @Roles('owner', 'admin')
  update(@Param('id') id: string, @Body() salesChannel: Partial<SalesChannel>) {
    return this.salesChannelService.update(+id, salesChannel);
  }

  @Delete(':id')
  @Roles('owner', 'admin')
  remove(@Param('id') id: string) {
    return this.salesChannelService.remove(+id);
  }
}