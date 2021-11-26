import {
    IsNumber,
    Min,
    IsOptional,
    Matches,
    IsString,
    IsInt,
} from 'class-validator';
import {Type} from 'class-transformer';
import {ApiProperty} from "@nestjs/swagger";

export class FindWithPaginationDto {
    @ApiProperty({
        description: 'Page to search',
        required: false,
        nullable: true
    })
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    @IsNumber()
    @Min(1)
    page?: number = 1;

    @ApiProperty({
        description: 'Numbers of elements to get',
        required: false,
        nullable: true
    })
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    @IsNumber()
    @Min(1)
    limit?: number = 20;

    @ApiProperty({
        description: 'String to search', required: false,
        nullable: true
    })
    @IsOptional()
    @IsString()
    @Matches(/^[a-z0-9\u00f1\u00d1 _]+$/i, {
        message: 'search $value must be numbers or letters',
    })
    @Type(() => String)
    search?: string;
}
