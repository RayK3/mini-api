import express from 'express';
import { getUser, rootEndpoint } from './endpoint';

const app = express();

app.use(express.json());

app.get('/', rootEndpoint);
app.get('/users', getUser);

const port: number = 3000;

app.listen(port, () => console.log(`API listening at http://localhost:${port}`));
