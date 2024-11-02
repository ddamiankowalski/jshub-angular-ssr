import { connectDatabase } from './db/database';
import { articleRouter } from './routes/article-route';

import express from 'express';
import * as path from 'path';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

dotenv.config();
const port = process.env['PORT'] || 3000;

const app = express();
app.use(bodyParser.json())

app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/article', articleRouter);

const run = async (): Promise<void> => {
  await connectDatabase();

  app.listen(port, () => {
    console.log(`API Listening at http://localhost:${port}`);
  });
}

run();

