import { Module } from '@nestjs/common';
import { PlayersService } from './players.service';
import { PlayersRepository } from './repositories/players.repository';
import { PlayersController } from './players.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Player, PlayerSchema } from './schemas/player.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Player.name, schema: PlayerSchema }]),
  ],
  controllers: [PlayersController],
  providers: [PlayersService, PlayersRepository],
})
export class PlayersModule {}
