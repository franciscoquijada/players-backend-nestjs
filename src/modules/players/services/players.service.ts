import { Injectable } from '@nestjs/common';
import { PaginationDto } from '../../../commons/pagination/pagination.dto';
import { FindWithPaginationDto } from '../../../commons/pagination/findWithPagination.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Player, PlayerDocument } from '../schemas/player.schema';
import { Model } from 'mongoose';

@Injectable()
export class PlayersService {
  constructor(
    @InjectModel(Player.name) private playerModel: Model<PlayerDocument>,
  ) {}

  async findWithPagination(
    findWithPaginationDto: FindWithPaginationDto,
  ): Promise<PaginationDto> {
    if (Number(findWithPaginationDto.search)) {
      return this.findById(findWithPaginationDto);
    }
    return this.findByStatusAndNickname(findWithPaginationDto);
  }

  private async findById(
    findWithPaginationDto: FindWithPaginationDto,
  ): Promise<PaginationDto> {
    const { search, page } = findWithPaginationDto;
    const total = 1;
    const data = await this.playerModel.find({ id: search });
    return new PaginationDto(data, total, page);
  }

  private async findByStatusAndNickname(
    findWithPaginationDto: FindWithPaginationDto,
  ): Promise<PaginationDto> {
    const { search, page, limit } = findWithPaginationDto;
    const options = {
      $or: [
        { status: new RegExp(search, 'i') },
        { nickname: new RegExp(search, 'i') },
      ],
    };
    const sortBy = { id: 1 };
    const skip = PlayersService.calculateSkip(page, limit);
    const data = await this.playerModel
      .find(options)
      .sort(sortBy)
      .skip(skip)
      .limit(limit);
    const total = await this.playerModel.find(options).count();
    return new PaginationDto(data, total, page);
  }

  private static calculateSkip(page: number, limit: number): number {
    return (page - 1) * limit;
  }
}
