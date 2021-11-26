import { Type } from 'class-transformer';
import { IsNumber, Min, IsOptional, IsArray } from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";

export class PaginationDto {
  @ApiProperty({ type: [Object],
    description: 'Array of model' })
  @IsArray()
  @Type(() => Array)
  data: [];

  @ApiProperty({
    description: 'Total of pages',
    minimum: 0,
  })
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  total: number;

  @ApiProperty({
    description: 'Number of page',
    minimum: 1,
  })
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  page: number;

  constructor(data, total, page) {
    this.data = data;
    this.total = total;
    this.page = page;
  }
}
