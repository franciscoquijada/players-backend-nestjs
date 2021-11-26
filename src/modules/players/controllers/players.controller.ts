import { Controller, Get, Query } from '@nestjs/common';
import { PlayersService } from '../services/players.service';
import { FindWithPaginationDto } from '../../../commons/pagination/findWithPagination.dto';
import { PaginationDto } from '../../../commons/pagination/pagination.dto';
import {ApiOkResponse, ApiOperation, ApiTags} from "@nestjs/swagger";

@Controller('players')
@ApiTags('Players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @ApiOperation({
    summary: 'Gets players with pagination',
  })
  @Get()
  @ApiOkResponse({
    description: 'Retrieved pagination players successfully',
    type: PaginationDto
  })
  async findWithPagination(
    @Query() findWithPaginationDto: FindWithPaginationDto,
  ): Promise<PaginationDto> {
    return this.playersService.findWithPagination(findWithPaginationDto);
  }
}
