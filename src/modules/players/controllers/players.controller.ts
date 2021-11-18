import { Controller, Get, Query } from '@nestjs/common';
import { PlayersService } from '../services/players.service';
import { PaginationParams } from '../../../utils/Pagination/paginationParams';
import { PaginationDto } from '../../../utils/Pagination/pagination.dto';

@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Get()
  async findAll(
    @Query() paginationParams: PaginationParams,
  ): Promise<PaginationDto> {
    return this.playersService.findAll(paginationParams);
  }
}
