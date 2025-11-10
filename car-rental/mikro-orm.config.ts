import { Options } from '@mikro-orm/core';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { Car } from './src/car/car.entity';

const config: Options = {
    driver: PostgreSqlDriver,
    // dbName: 'car_rental',
    // user: 'postgres',
    // password: 'your_password',
    // host: 'localhost',
    // port: 5432,
    clientUrl: 'postgresql://neondb_owner:npg_ilnHJqNBY7s4@ep-bold-poetry-a1imsnds-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require',

    entities: [Car],

    migrations: {
        path: 'migrations',
        tableName: 'mikro_orm_migrations',
    },

    debug: true,
    driverOptions: { connection: { ssl: true } },
};

export default config;
