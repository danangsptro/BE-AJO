import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CapitalExpense } from '../entities/capital-expense.entity';
import { CapitalExpenseService } from './capital-expense.service';
import { CapitalExpenseController } from './capital-expense.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CapitalExpense])],
  providers: [CapitalExpenseService],
  controllers: [CapitalExpenseController],
})
export class CapitalExpenseModule {}