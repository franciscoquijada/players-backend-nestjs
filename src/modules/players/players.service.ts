import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Player } from './entities/player.entity';

@Injectable()
export class PlayersService {
  constructor(
      @InjectRepository(Player)
      private readonly playersRepository: Repository<Player>
  ) {}

   findAll(): Any {
    return "Hola mundo";
  }

  findOne(id: number) {
    return `This action returns a #${id} player`;
  }
}
