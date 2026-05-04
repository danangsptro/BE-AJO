import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalesChannel } from '../entities/sales-channel.entity';
import { SalesChannelService } from './sales-channel.service';
import { SalesChannelController } from './sales-channel.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SalesChannel])],
  providers: [SalesChannelService],
  controllers: [SalesChannelController],
})
export class SalesChannelModule {}