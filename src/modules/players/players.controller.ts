import { Controller, Get, Query } from '@nestjs/common';
import { PlayersService } from './players.service';
import { PaginationParams } from '../../utils/Pagination/PaginationParams';
import { PaginationDto } from '../../utils/Pagination/Pagination.dto';

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
