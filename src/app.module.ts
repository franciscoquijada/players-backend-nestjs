import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { mongodbConfig } from './database/config/mongodbConfig';
import { PlayersModule } from './modules/players/players.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(mongodbConfig()),
    PlayersModule,
  ],
})
export class AppModule {}
