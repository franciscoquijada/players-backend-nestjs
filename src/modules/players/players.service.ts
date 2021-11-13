import { Injectable } from '@nestjs/common';

@Injectable()
export class PlayersService {
  findAll() {
    return `This action returns all players`;
  }

  findOne(id: number) {
    return `This action returns a #${id} player`;
  }
}
