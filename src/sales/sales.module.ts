import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sales } from '../entities/sales.entity';
import { SalesItem } from '../entities/sales-item.entity';
import { Product } from '../entities/product.entity';
import { SalesService } from './sales.service';
import { SalesController } from './sales.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Sales, SalesItem, Product])],
  providers: [SalesService],
  controllers: [SalesController],
})
export class SalesModule {}