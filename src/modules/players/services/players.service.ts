import { Injectable } from '@nestjs/common';
import { PlayersRepository } from '../repositories/players.repository';
import { PaginationDto } from '../../../commons/pagination/pagination.dto';
import { FindWithPaginationDto } from '../../../commons/pagination/findWithPagination.dto';

@Injectable()
export class PlayersService {
  constructor(private readonly playersRepository: PlayersRepository) {}

  async findWithPagination(
    findWithPaginationDto: FindWithPaginationDto,
  ): Promise<PaginationDto> {
    return this.playersRepository.findWithPagination(findWithPaginationDto);
  }
}
