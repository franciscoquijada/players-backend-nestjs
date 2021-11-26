import {
  IsNumber,
  Min,
  IsOptional,
  Matches,
  IsString,
  IsInt,
} from 'class-validator';
import { Type } from 'class-transformer';

export class FindWithPaginationDto {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @IsNumber()
  @Min(1)
  page?: number = 1;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @IsNumber()
  @Min(1)
  limit?: number = 20;

  @IsOptional()
  @IsString()
  @Matches(/^[a-z0-9\u00f1\u00d1 _]+$/i, {
    message: 'search $value must be numbers or letters',
  })
  @Type(() => String)
  search?: string;
}
