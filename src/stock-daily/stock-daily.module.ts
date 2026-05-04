import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StockDaily } from '../entities/stock-daily.entity';
import { StockDailyService } from './stock-daily.service';
import { StockDailyController } from './stock-daily.controller';

@Module({
  imports: [TypeOrmModule.forFeature([StockDaily])],
  providers: [StockDailyService],
  controllers: [StockDailyController],
})
export class StockDailyModule {}