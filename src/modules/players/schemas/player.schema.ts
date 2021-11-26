import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import {ApiProperty} from "@nestjs/swagger";

export type PlayerDocument = Player & Document;

@Schema()
export class Player {
  @ApiProperty({
    type: Number,
  })
  @Prop()
  id: number;

  @ApiProperty({
    type: String,
  })
  @Prop()
  nickname: string;

  @ApiProperty({
    type: String,
  })
  @Prop()
  status: string;

  @ApiProperty({
    type: Number,
  })
  @Prop()
  balance: number;

  @ApiProperty({
    type: String,
  })
  @Prop()
  avatar: string;
}

export const PlayerSchema = SchemaFactory.createForClass(Player);
