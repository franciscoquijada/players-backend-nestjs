import { Type } from 'class-transformer';
import { IsNumber, Min, IsOptional, IsArray } from 'class-validator';

export class PaginationDto {
  @IsArray()
  @Type(() => Array)
  data: [];

  @Type(() => Number)
  @IsNumber()
  @Min(1)
  total: number;

  @IsOptional()
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
