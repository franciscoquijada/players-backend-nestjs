import { Controller, Get, Param, Req } from '@nestjs/common';
import { PlayersService } from './players.service';
import { Player } from './schemas/player.schema';
import {Request} from "express";

@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Get()
  async findAll(@Req() request: Request): Promise<any> {
    return this.playersService.findAll(request);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.playersService.findOne(+id);
  // }
}
