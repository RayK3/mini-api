import express from 'express';
import { getCountry, getUser, rootEndpoint } from './endpoint';

const app = express();

app.use(express.json());

app.get('/', rootEndpoint);
app.get('/country', getCountry);
app.get('/users', getUser);

const port: number = 3000;

app.listen(port, () => console.log(`API listening at http://localhost:${port}`));
