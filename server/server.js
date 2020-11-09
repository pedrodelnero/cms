import express from 'express';
import bodyParser from 'body-parser';
import cors from "cors";

import routes from './routes/routes.js';

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);

app.listen(5000, () => console.log('listening in port 5000'));