import { Controller, Get, Query } from '@nestjs/common';
import { PlayersService } from '../services/players.service';
import { FindWithPaginationDto } from '../../../commons/pagination/findWithPagination.dto';
import { PaginationDto } from '../../../commons/pagination/pagination.dto';

@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Get()
  async findWithPagination(
    @Query() findWithPaginationDto: FindWithPaginationDto,
  ): Promise<PaginationDto> {
    return this.playersService.findWithPagination(findWithPaginationDto);
  }
}
