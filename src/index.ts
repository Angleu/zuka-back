import "reflect-metadata";
import express from 'express';
import cors from 'cors';
import route from './routes/routes';
import './database';

const app = express();

app.use(express.json());
app.use(cors());
app.use(route);

app.listen(8080, () => console.log('Execute server 8080!!!'));
