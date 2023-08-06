import express from 'express';
import dotenv from 'dotenv';
import DefaultData from './default.js';
import cors from 'cors';
import bodyParser from 'body-parser';

import Connection from './database/db.js'; // here writing the extension is compulsary.
import Router from './routes/route.js';

const app = express();

dotenv.config(); // initializing dotenv

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', Router);

const PORT = 8000;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);
app.listen(PORT, ()=>console.log(`Server is running successfully on PORT ${PORT}`))

DefaultData();