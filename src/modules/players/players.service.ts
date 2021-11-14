import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Player, PlayerDocument } from './schemas/player.schema';

@Injectable()
export class PlayersService {
  constructor(@InjectModel(Player.name) private playerModel: Model<PlayerDocument>) {}

   async findAll(): Promise<Player[]> {
    return this.playerModel.find().exec();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} player`;
  // }
}
