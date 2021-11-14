import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { Player, PlayerDocument } from '../schemas/player.schema';
import {Request} from "express";

@Injectable()
export class PlayersRepository {
    constructor(@InjectModel(Player.name) private playerModel: Model<PlayerDocument>) {}

    async findAll(options: {}, page: number = 1, limit: number = 20 ): Promise<Player[]> {
        // let options = {};
        //
        // if(request.query.s){
        //     options = {
        //         $or: [
        //             //{id: parseInt(request.query.s.toString())},
        //             {status: new RegExp(request.query.s.toString(), 'i')},
        //             {nickname: new RegExp(request.query.s.toString(), 'i')},
        //         ]
        //     }
        // }

        //const query = this.playerModel.find(options).sort({ id: 1 });

        //const page: number = parseInt(request.query.page as any) || 1;

        //const limit = 20;

        //const total = await this.getTotal(options);

        return await this.playerModel.find(options)
                .sort({ id: 1 })
                .skip((page - 1) * limit )
                .limit(limit);
        //return this.playerModel.find(options).sort({ id: 1 });
    }

    getTotal(options: {}) {
        return this.playerModel.estimatedDocumentCount(options);
    }

    // async findOne(playerFilterQuery: FilterQuery<PlayerDocument>): Promise<Player> {
    //     return this.playerModel.findOne(playerFilterQuery);
    // }
    //
    // async create(player: Player): Promise<Player> {
    //     const newPlayer = new this.playerModel(player);
    //     return newPlayer.save();
    // }
    //
    // async findOneAndUpdate(
    //     playerFilterQuery: FilterQuery<Player>,
    //     player: Partial<Player>,
    // ): Promise<Player> {
    //     return this.playerModel.findOneAndUpdate(playerFilterQuery, player, {
    //         new: true,
    //     });
    // }
}