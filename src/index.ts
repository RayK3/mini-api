import express, { Express } from 'express';
import { endpoints } from './endpoint';
import { Endpoint } from './type';

const app: Express = express();

// specify that we will use json
app.use(express.json());

// set up the endpoints
endpoints.forEach((endpoint: Endpoint) => {
    app[endpoint.method](endpoint.path, endpoint.handler);
});

const port: number = 3000;

app.listen(port, () => console.log(`API listening at http://localhost:${port}`));
