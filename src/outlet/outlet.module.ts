import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Outlet } from '../entities/outlet.entity';
import { OutletService } from './outlet.service';
import { OutletController } from './outlet.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Outlet])],
  providers: [OutletService],
  controllers: [OutletController],
})
export class OutletModule {}