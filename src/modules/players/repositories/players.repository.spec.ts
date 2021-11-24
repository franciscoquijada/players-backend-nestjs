import { Test, TestingModule } from '@nestjs/testing';
import { PlayersRepository } from './players.repository';
import { Player } from '../schemas/player.schema';
import { getModelToken } from '@nestjs/mongoose';
import { FindWithPaginationDto } from '../../../utils/pagination/findWithPagination.dto';
import { PaginationDto } from '../../../utils/pagination/pagination.dto';

describe('PlayersRepository', () => {
  let playersRepository: PlayersRepository;

  const findReturn = {
    _id: '608c3386ef1f854beb5fe284',
    id: 1,
    nickname: 'ooy eqrceli',
    status: 'rlñlw brhrka',
    balance: 498724,
    avatar: 'drive.google.com/thumbnail?id=17fBzEwLjVC4wbHBi1O64PA-D-i8G_Z4b',
  };

  const mockPlayerModel = {
    find: jest.fn(() => {
      return findReturn;
    }),
  };

  const expectedValue = new PaginationDto(findReturn, 1, 1);

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: getModelToken(Player.name),
          useValue: mockPlayerModel,
        },
        PlayersRepository,
      ],
    }).compile();
    playersRepository = module.get<PlayersRepository>(PlayersRepository);
  });

  it('should be defined', () => {
    expect(playersRepository).toBeDefined();
  });

  it('should return value when search by id', async () => {
    const findWithPaginationDto: FindWithPaginationDto = {
      page: 1,
      limit: 1,
      search: '1',
    };
    await expect(
      playersRepository.findWithPagination(findWithPaginationDto),
    ).resolves.toEqual(expectedValue);
  });
});
