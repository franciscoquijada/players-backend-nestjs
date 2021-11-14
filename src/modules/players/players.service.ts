import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Player, PlayerDocument } from './schemas/player.schema';
import { PlayersRepository } from "./repositories/players.repository";
import {Request} from "express";

@Injectable()
export class PlayersService {
  constructor(private readonly playersRepository: PlayersRepository) {}

  async findAll(request: Request): Promise<any> {
    let options = {};

    if(request.query.search){
      options = {
        $or: [
          //{id: new RegExp(request.query.search.toString(), 'i')},
          {status: new RegExp(request.query.search.toString(), 'i')},
          {nickname: new RegExp(request.query.search.toString(), 'i')},
        ]
      }
    }
    const page: number = parseInt(request.query.page as any) || 1;
    const limit = 20;
    const total = await this.playersRepository.getTotal(options);
    const data = await this.playersRepository.findAll(options, page, limit);

    return {
      data,
      total,
      page,
      last_page: Math.ceil(total/limit)
    }
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} player`;
  // }
}
