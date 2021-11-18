import {Test, TestingModule} from '@nestjs/testing';
import {PlayersRepository} from "./players.repository";
import {Player, PlayerDocument} from "../schemas/player.schema";
import {getModelToken} from '@nestjs/mongoose';
import {Model} from 'mongoose';

describe('PlayersRepository', () => {
    let mockUserModel: Model<PlayerDocument>;
    let playersRepository: PlayersRepository;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                {
                    provide: getModelToken(Player.name),
                    useValue: Model  // <-- Use the Model Class from Mongoose
                },
                PlayersRepository
            ],
        }).compile();

        /*.compile();*/
        // Make sure to use the correct Document Type for the 'module.get' func
        mockUserModel = module.get<Model<PlayerDocument>>(getModelToken(Player.name));
        playersRepository = module.get<PlayersRepository>(PlayersRepository);
    });

    it('should be defined', () => {
        expect(playersRepository).toBeDefined();
    });

    it('should return a player', async () => {
        // arrange
        const player = new Player();
        const playerID = {id: '1'};
        const spy = jest
            .spyOn(mockUserModel, 'findOne') // <- spy on what you want
            .mockResolvedValue(player as PlayerDocument); // <- Set your resolved value
        // act
        await playersRepository.findOne(playerID);
        // assert
        expect(spy).toBeCalled();
    });

    //TODO: Falta probar el metodo de findAll

    // describe('findAll', () => {
    //   it('should return an array of players', async () => {
    //     let options = { id: '1' };
    //     const result = {
    //       data: {
    //         _id: "608c3386ef1f854beb5fe284",
    //         id: 1,
    //         nickname: "ooy eqrceli",
    //         status: "rlñlw brhrka",
    //         balance: 498724,
    //         avatar: "drive.google.com/thumbnail?id=17fBzEwLjVC4wbHBi1O64PA-D-i8G_Z4b"
    //       },
    //       total: 3000,
    //       page: "1"
    //     };
    //     jest.spyOn(mockUserModel, 'findAll').mockImplementation(() => result);
    //
    //     expect(await playersRepository.findAll(options)).toBe(result);
    //   });
    // });

    // it('should return list of players', async () => {
    //   const mockModel = {
    //     find: jest.fn().mockReturnThis(),
    //     update: jest.fn().mockReturnThis(),
    //     collation: jest.fn().mockReturnThis(),
    //     ...etc
    //   };


    // // arrange
    // const player = new Player();
    // let options = { id: '1' };
    // const spy = jest
    //     .spyOn(mockUserModel, 'findAll') // <- spy on what you want
    //     .mockResolvedValue(Promise.resolve(player as PlayerDocument)); // <- Set your resolved value
    // // act
    // await playersRepository.findAll(options);
    // // assert
    // expect(spy).toBeCalled();
    // it("get all quizes, find quizzes", async () => {
    //   clientUserModel.find.mockReturnValue({
    //     _id: "1234",
    //     username: "Test user",
    //   });
    //   clientClassModel.find.mockResolvedValue([
    //     { title: "test", description: "test" },
    //   ]);
    //
    //   expect(clientUserModel.find).not.toHaveBeenCalled();
    //   expect(clientClassModel.find).not.toHaveBeenCalled();
    //   const result = quizesService.getAllQuizes(mockUser).then((state) => {
    //     expect(clientUserModel.find).toHaveBeenCalled();
    //     expect(clientClassModel.find).toHaveBeenCalled();
    //     expect(state).toEqual([{ title: "test", description: "test" }]);
    //   });

    //
    // });
    // });

});

