import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type PlayerDocument = Player & Document;

@Schema()
export class Player {
  @Prop()
  _id: Types.ObjectId;

  @Prop()
  id: number;

  @Prop()
  nickname: string;

  @Prop()
  status: string;

  @Prop()
  balance: number;

  @Prop()
  avatar: string;
}

export const PlayerSchema = SchemaFactory.createForClass(Player);
