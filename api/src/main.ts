import express from 'express';
import * as path from 'path';
import { Article } from './db/models/article';
import { connectDatabase } from './db/database';
import dotenv from 'dotenv';

dotenv.config();

const run = async (): Promise<void> => {
  await connectDatabase();

  const port = process.env['PORT'] || 3000;
  const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/api`);
  });

  server.on('error', console.error);
}

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});

app.get('/article', async (req, res) => {
  const article = new Article({
    title: 'Some test title',
    text: 'Some test texts'
  });

  const result = await article.save();
  res.send(result);
})

app.get('/all', async (req, res) => {
  const results = await Article.find();
  res.send(results)
})

run();

