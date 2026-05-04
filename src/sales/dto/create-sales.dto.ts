import { IsString, IsNumber, IsArray, ValidateNested, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

class SalesItemDto {
  @ApiProperty()
  @IsNumber()
  product_id: number;

  @ApiProperty()
  @IsNumber()
  qty: number;

  @ApiProperty()
  @IsNumber()
  price: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  discount?: number;
}

export class CreateSalesDto {
  @ApiProperty()
  @IsString()
  date: string;

  @ApiProperty()
  @IsNumber()
  outlet_id: number;

  @ApiProperty()
  @IsNumber()
  channel_id: number;

  @ApiProperty({ type: [SalesItemDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SalesItemDto)
  items: SalesItemDto[];
}