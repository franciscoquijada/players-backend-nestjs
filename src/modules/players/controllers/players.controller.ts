import { Controller, Get, Query } from '@nestjs/common';
import { PlayersService } from '../services/players.service';
import { FindWithPaginationDto } from '../../../shared/pagination/findWithPagination.dto';
import { PaginationDto } from '../../../shared/pagination/pagination.dto';

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
