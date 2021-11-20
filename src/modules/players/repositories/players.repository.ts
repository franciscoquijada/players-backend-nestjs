import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Player, PlayerDocument } from '../schemas/player.schema';

@Injectable()
export class PlayersRepository {
  constructor(
    @InjectModel(Player.name) private playerModel: Model<PlayerDocument>,
  ) {}

  async findAll(
    options: {},
    page: number = 1,
    limit: number = 20,
  ): Promise<any> {
    const data = await this.playerModel
      .find(options)
      .sort({ id: 1 })
      .skip((page - 1) * limit)
      .limit(Number(limit));
    const total = await this.playerModel
        .find(options)
        .count();
    return { data, total };
  }

  async findOne(filter: {}): Promise<Player> {
    return await this.playerModel.findOne(filter);
  }

}
