import { ConnectionOptions, getConnectionOptions } from 'typeorm';

export const getEnvironmentConnectionOptions = async () => {
    // tslint:disable:object-literal-sort-keys
    let connectionOptions: ConnectionOptions = {
        type: 'mysql',
        synchronize: false,
        logging: false,
        entities: [
            'src/entity/**/*.ts'
        ]
    };

    connectionOptions = process.env.DATABASE_URL ? {
        ...connectionOptions,
        url: process.env.DATABASE_URL
    } : await getConnectionOptions();

    return connectionOptions;
}
