import { Test, TestingModule } from '@nestjs/testing';
import { PlayersService } from './players.service';
import { FindWithPaginationDto } from '../../../commons/pagination/findWithPagination.dto';
import { getModelToken } from '@nestjs/mongoose';
import { Player } from '../schemas/player.schema';

describe('PlayersService', () => {
  let playersService: PlayersService;

  const mockPlayerModel = {
    find: jest.fn().mockReturnThis(),
    select: jest.fn().mockReturnThis(),
    sort: jest.fn().mockReturnThis(),
    skip: jest.fn().mockReturnThis(),
    limit: jest.fn().mockReturnThis(),
    count: jest.fn().mockReturnValue(1),
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
  });

  it('should return value when search by nickname or status', async () => {
    const findWithPaginationDto: FindWithPaginationDto = {
      page: 1,
      limit: 20,
      search: 'abc',
    };

    expect(
      await playersService.findWithPagination(findWithPaginationDto),
    ).toEqual({
      data: expect.any(Object),
      total: expect.any(Number),
      page: 1,
    });

    expect(mockPlayerModel.find).toHaveBeenCalledTimes(3);
  });
});
