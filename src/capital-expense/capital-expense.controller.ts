import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { CapitalExpenseService } from './capital-expense.service';
import { CapitalExpense } from '../entities/capital-expense.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/role.guard';
import { Roles } from '../auth/roles.decorator';

@ApiTags('capital-expenses')
@ApiBearerAuth()
@Controller('capital-expenses')
@UseGuards(JwtAuthGuard, RolesGuard)
export class CapitalExpenseController {
  constructor(private capitalExpenseService: CapitalExpenseService) {}

  @Get()
  findAll() {
    return this.capitalExpenseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.capitalExpenseService.findOne(+id);
  }

  @Post()
  @Roles('owner', 'admin')
  create(@Body() capitalExpense: Partial<CapitalExpense>) {
    return this.capitalExpenseService.create(capitalExpense);
  }

  @Put(':id')
  @Roles('owner', 'admin')
  update(@Param('id') id: string, @Body() capitalExpense: Partial<CapitalExpense>) {
    return this.capitalExpenseService.update(+id, capitalExpense);
  }

  @Delete(':id')
  @Roles('owner', 'admin')
  remove(@Param('id') id: string) {
    return this.capitalExpenseService.remove(+id);
  }
}