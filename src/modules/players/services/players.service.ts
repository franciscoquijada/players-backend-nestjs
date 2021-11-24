import { Injectable } from '@nestjs/common';
import { PlayersRepository } from '../repositories/players.repository';
import { PaginationDto } from '../../../shared/pagination/pagination.dto';
import { FindWithPaginationDto } from '../../../shared/pagination/findWithPagination.dto';

@Injectable()
export class PlayersService {
  constructor(private readonly playersRepository: PlayersRepository) {}

  async findWithPagination(
    findWithPaginationDto: FindWithPaginationDto,
  ): Promise<PaginationDto> {
    return this.playersRepository.findWithPagination(findWithPaginationDto);
  }
}
