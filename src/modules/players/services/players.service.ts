import { Injectable } from '@nestjs/common';
import { PlayersRepository } from '../repositories/players.repository';
import { PaginationDto } from '../../../utils/Pagination/pagination.dto';
import { PaginationParams } from '../../../utils/Pagination/paginationParams';

@Injectable()
export class PlayersService {
  constructor(private readonly playersRepository: PlayersRepository) {}

  async findAll(paginationParams: PaginationParams): Promise<PaginationDto> {
    const { page, search } = paginationParams;
    if (Number(search)) {
      return this.searchById(page, search);
    }
    return this.searchByColumn(paginationParams);
  }

  private async searchByColumn(
    paginationParams: PaginationParams,
  ): Promise<PaginationDto> {
    const { page, search, limit } = paginationParams;

    let options = {
      $or: [
        { status: new RegExp(search, 'i') },
        { nickname: new RegExp(search, 'i') },
      ],
    };
    let {data, total} = await this.playersRepository.findAll(options, page, limit);
    return new PaginationDto(data, total, page);
  }

  private async searchById(
    page: number,
    search: string,
  ): Promise<PaginationDto> {
    let options = { id: search };
    let data = await this.playersRepository.findOne(options);
    return new PaginationDto(data, 1, page);
  }

}
