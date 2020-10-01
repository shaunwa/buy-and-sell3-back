import Hapi from '@hapi/hapi';
import { fakeListings, fakeMyListings } from './fake-data';

const start = async () => {
    const server = Hapi.server({
        port: 8000,
        host: 'localhost',
    });

    server.route({
        method: 'GET',
        path: '/api/listings',
        handler: (req, h) => {
            return fakeListings;
        },
    });

    server.route({
        method: 'GET',
        path: '/api/my-listings',
        handler: (req, h) => {
            return fakeMyListings;
        },
    });

    await server.start();
    console.log(`Server is listening on ${server.info.uri}`);
}

process.on('unhandledRejection', err => {
    console.log(err);
    process.exit(1);
});

start();