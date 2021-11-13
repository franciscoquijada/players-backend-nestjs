import { Player } from '../../modules/players/entities/player.entity';
export function mongodbConfig(): any {
    return {
        type: 'mongodb',
        url: process.env.DATABASE_SRV,
        database: process.env.DATABASE_NAME,
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        entities: [
            Player,
        ],
        ssl: true,
        useUnifiedTopology: true,
        useNewUrlParser: true,
        logging: true,
        //authSource: 'admin',
        //synchronize: true,
        autoLoadEntities: true
    }
}