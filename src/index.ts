import "reflect-metadata";
import express from 'express';
import cors from 'cors';
import route from './routes/routes';
import './database';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());
app.use(route);

app.listen(PORT, () => console.log('Execute server 8080!!!'));
