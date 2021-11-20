import { IsNumber, Min, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class FindWithPaginationDto {
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  page?: number = 1;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  limit?: number = 20;

  @IsOptional()
  @Type(() => String)
  search?: string;
}
