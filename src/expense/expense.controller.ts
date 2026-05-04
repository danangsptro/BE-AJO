import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { ExpenseService } from './expense.service';
import { Expense } from '../entities/expense.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/role.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('expenses')
@UseGuards(JwtAuthGuard, RolesGuard)
export class ExpenseController {
  constructor(private expenseService: ExpenseService) {}

  @Get()
  findAll() {
    return this.expenseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.expenseService.findOne(+id);
  }

  @Post()
  @Roles('owner', 'admin')
  create(@Body() expense: Partial<Expense>) {
    return this.expenseService.create(expense);
  }

  @Put(':id')
  @Roles('owner', 'admin')
  update(@Param('id') id: string, @Body() expense: Partial<Expense>) {
    return this.expenseService.update(+id, expense);
  }

  @Delete(':id')
  @Roles('owner', 'admin')
  remove(@Param('id') id: string) {
    return this.expenseService.remove(+id);
  }
}