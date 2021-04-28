import 'reflect-metadata';
import { createConnection } from 'typeorm';
import app from './application';
import { getEnvironmentConnectionOptions } from './connection';

getEnvironmentConnectionOptions().then((options) => {
    createConnection(options)
        .then(async () => {
            const port = process.env.PORT || 8000;

            app.listen(port, () => {
                // tslint:disable-next-line:no-console
                console.log(`Server started at http://localhost:${port}`);
            });
        })
        .catch(error => {
            // tslint:disable-next-line:no-console
            console.log(error);
        });
});


