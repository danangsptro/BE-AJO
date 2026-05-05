import {
  IsNumber,
  IsArray,
  ValidateNested,
  IsOptional,
  ArrayNotEmpty,
  IsDateString,
  Min,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

class SalesItemDto {
  @ApiProperty({ example: 1 })
  @Type(() => Number)
  @IsNumber()
  product_id!: number;

  @ApiProperty({ example: 2 })
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  qty!: number;

  @ApiProperty({ example: 15000 })
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  price!: number;

  @ApiProperty({ required: false, example: 2000 })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  discount?: number;
}

export class CreateSalesDto {
  @ApiProperty({ example: '2026-05-05' })
  @IsDateString()
  date!: string;

  @ApiProperty({ example: 1 })
  @Type(() => Number)
  @IsNumber()
  outlet_id!: number;

  @ApiProperty({ example: 1 })
  @Type(() => Number)
  @IsNumber()
  channel_id!: number;

  @ApiProperty({ type: [SalesItemDto] })
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => SalesItemDto)
  items!: SalesItemDto[];
}
