import { Test, TestingModule } from '@nestjs/testing';
import { PlayersService } from './players.service';
import { FindWithPaginationDto } from '../../../commons/pagination/findWithPagination.dto';
import { getModelToken } from '@nestjs/mongoose';
import { Player } from '../schemas/player.schema';

describe('PlayersService', () => {
  let playersService: PlayersService;

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

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: getModelToken(Player.name),
          useValue: mockPlayerModel,
        },
        PlayersService,
      ],
    }).compile();
    playersService = module.get<PlayersService>(PlayersService);
  });

  it('should be defined', () => {
    expect(playersService).toBeDefined();
  });

  it('should return value when search by id', async () => {
    const findWithPaginationDto: FindWithPaginationDto = {
      page: 1,
      limit: 20,
      search: '1',
    };

    expect(
      await playersService.findWithPagination(findWithPaginationDto),
    ).toEqual({
      data: expect.any(Object),
      total: expect.any(Number),
      page: 1,
    });

    expect(mockPlayerModel.find).toHaveBeenCalledTimes(1);

    expect(mockPlayerModel.find).toHaveBeenCalledWith({ id: '1' });
  });
});
