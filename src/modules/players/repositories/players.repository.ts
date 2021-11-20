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
    const { search, page, limit } = findWithPaginationDto;
    let data;
    let total;
    if (Number(search)) {
      total = 1;
      data = await this.playerModel.find({ id: search });
      return new PaginationDto(data, total, page);
    }
    let options = {
      $or: [
        { status: new RegExp(search, 'i') },
        { nickname: new RegExp(search, 'i') },
      ],
    };
    data = await this.playerModel
      .find(options)
      .sort({ id: 1 })
      .skip((page - 1) * limit)
      .limit(Number(limit));
    total = await this.playerModel.find(options).count();
    return new PaginationDto(data, total, page);
  }
}
