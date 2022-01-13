import "reflect-metadata";
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import route from './routes/routes';
import './database';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());
app.use(route);

app.listen(PORT, () => console.log('Execute server 8080!!!'));
