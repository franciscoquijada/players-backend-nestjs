import { Module } from '@nestjs/common';
import { Player } from './entities/player.entity';
import { PlayersService } from './players.service';
import { PlayersController } from './players.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Player])],
  controllers: [PlayersController],
  providers: [PlayersService]
})
export class PlayersModule {}
