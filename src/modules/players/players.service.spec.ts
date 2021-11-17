import { Test, TestingModule } from '@nestjs/testing';
import { PlayersService } from './players.service';
import { PaginationParams } from '../../utils/Pagination/paginationParams';

describe('PlayersService', () => {
  let service: PlayersService;

  const mockPlayersRepository = {
    findAll: jest.fn(() => {
      return {
        data: {
          _id: '608c3386ef1f854beb5fe284',
          id: 1,
          nickname: 'ooy eqrceli',
          status: 'rlñlw brhrka',
          balance: 498724,
          avatar:
            'drive.google.com/thumbnail?id=17fBzEwLjVC4wbHBi1O64PA-D-i8G_Z4b',
        },
        total: 40,
        page: '1',
      };
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlayersService],
    })
      .overrideProvider(PlayersService)
      .useValue(mockPlayersRepository)
      .compile();

    service = module.get<PlayersService>(PlayersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  //Que esta devolviendo la lista de jugadores
  it('should list players', async () => {
    const paginationParams: PaginationParams = {
      page: 1,
      limit: 20,
      search: '1',
    };
    expect(await service.findAll(paginationParams)).toEqual({
      data: expect.any(Object),
      total: expect.any(Number),
      page: '1',
    });

    expect(
      mockPlayersRepository.findAll,
    ).toHaveBeenCalledTimes(1);

    expect(mockPlayersRepository.findAll).toHaveBeenCalledWith(
      paginationParams,
    );
  });
});
