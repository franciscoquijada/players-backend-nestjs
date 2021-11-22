import { Test, TestingModule } from '@nestjs/testing';
import { PlayersRepository } from './players.repository';
import { Player, PlayerDocument } from '../schemas/player.schema';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';

describe('PlayersRepository', () => {
  let mockPlayerModel: Model<PlayerDocument>;
  let playersRepository: PlayersRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: getModelToken(Player.name),
          useValue: Model,
        },
        PlayersRepository,
      ],
    }).compile();

    mockPlayerModel = module.get<Model<PlayerDocument>>(
      getModelToken(Player.name),
    );
    playersRepository = module.get<PlayersRepository>(PlayersRepository);
  });

  it('should be defined', () => {
    expect(playersRepository).toBeDefined();
  });
});
