import { Column, Entity, ObjectIdColumn, ObjectID } from 'typeorm';

@Entity('players')
export class Player {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column('int')
  id: number;

  @Column({
    type: 'string',
    unique: true,
  })
  nickname: string;

  @Column('string')
  status: string;

  @Column('int')
  balance: number;

  @Column('string')
  avatar: string;
}
