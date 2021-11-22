import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Player, PlayerDocument } from '../schemas/player.schema';
import { PaginationDto } from '../../../utils/pagination/pagination.dto';
import { FindWithPaginationDto } from '../../../utils/pagination/findWithPagination.dto';

@Injectable()
export class PlayersRepository {
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
    const data = await this.playerModel
      .find(options)
      .sort({ id: 1 })
      .skip((page - 1) * limit)
      .limit(limit);
    const total = await this.playerModel.find(options).count();
    return new PaginationDto(data, total, page);
  }
}
