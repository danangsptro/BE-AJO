import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
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
  @ApiOperation({ summary: 'Get all capital expenses' })
  @ApiResponse({ status: 200, description: 'List of capital expenses' })
  findAll() {
    return this.capitalExpenseService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get capital expense by ID' })
  @ApiParam({ name: 'id', type: 'number' })
  @ApiResponse({ status: 200, description: 'Capital expense found' })
  @ApiResponse({ status: 404, description: 'Capital expense not found' })
  findOne(@Param('id') id: string) {
    return this.capitalExpenseService.findOne(+id);
  }

  @Post()
  @Roles('owner', 'admin')
  @ApiOperation({ summary: 'Create a new capital expense' })
  @ApiResponse({ status: 201, description: 'Capital expense created successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  create(@Body() capitalExpense: Partial<CapitalExpense>) {
    return this.capitalExpenseService.create(capitalExpense);
  }

  @Put(':id')
  @Roles('owner', 'admin')
  @ApiOperation({ summary: 'Update capital expense by ID' })
  @ApiParam({ name: 'id', type: 'number' })
  @ApiResponse({ status: 200, description: 'Capital expense updated successfully' })
  @ApiResponse({ status: 404, description: 'Capital expense not found' })
  update(@Param('id') id: string, @Body() capitalExpense: Partial<CapitalExpense>) {
    return this.capitalExpenseService.update(+id, capitalExpense);
  }

  @Delete(':id')
  @Roles('owner', 'admin')
  @ApiOperation({ summary: 'Delete capital expense by ID' })
  @ApiParam({ name: 'id', type: 'number' })
  @ApiResponse({ status: 200, description: 'Capital expense deleted successfully' })
  @ApiResponse({ status: 404, description: 'Capital expense not found' })
  remove(@Param('id') id: string) {
    return this.capitalExpenseService.remove(+id);
  }
}