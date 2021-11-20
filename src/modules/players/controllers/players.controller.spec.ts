import { Test, TestingModule } from '@nestjs/testing';
import { PlayersController } from './players.controller';
import { PlayersService } from '../services/players.service';
import {FindWithPaginationDto} from "../../../utils/pagination/findWithPagination.dto";

describe('PlayersController', () => {
  let playersController: PlayersController;
  let httpCodeError = 400;

  const mockPlayersService = {
    findWithPagination: jest.fn( () => {
      return /*paginationParams.limit > 1 ? */{
        data: {
          _id: "608c3386ef1f854beb5fe284",
          id: 1,
          nickname: "ooy eqrceli",
          status: "rlñlw brhrka",
          balance: 498724,
          avatar: "drive.google.com/thumbnail?id=17fBzEwLjVC4wbHBi1O64PA-D-i8G_Z4b"
        },
        total: 40,
        page: "1"
      }/* : {
        statusCode: httpCodeError,
        message: [
          "limit must not be less than 1"
        ],
        error: "Bad Request"
      };*/
    })
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlayersController],
      providers: [PlayersService],
    })
      .overrideProvider(PlayersService)
      .useValue(mockPlayersService)
      .compile();

    playersController = module.get<PlayersController>(PlayersController);
  });

  it('should be defined', () => {
    expect(playersController).toBeDefined();
  });

  it('should list players', async () => {
    const findWithPaginationDto: FindWithPaginationDto = {page: 1, limit: 20, search: '1'};

    expect(await playersController.findWithPagination(findWithPaginationDto)).toEqual({
      data: expect.any(Object),
      total: expect.any(Number),
      page: '1'
    });

    expect(mockPlayersService.findWithPagination).toHaveBeenCalledTimes(1);

    expect(mockPlayersService.findWithPagination).toHaveBeenCalledWith(findWithPaginationDto);

  });


  // it('should show error for limit less than 1', async () => {
  //   const paginationParams: PaginationParams = {page: 1, limit: 0, search: '1'};
  //   const objError = {
  //     statusCode: httpCodeError,
  //     message: [
  //       "limit must not be less than 1"
  //     ],
  //     error: expect.any(String)
  //   }
  //   expect(await controller.findAll(paginationParams)).toEqual(objError);
  //
  //   expect(mockPlayersService.findAll(paginationParams)).toHaveBeenCalledWith(paginationParams);
  //
  // });

});
