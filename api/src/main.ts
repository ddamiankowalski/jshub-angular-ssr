import express from 'express';
import * as path from 'path';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/jshub')
  .then(() => {
    console.log('Successfully connected to the database');

    const port = process.env['PORT'] || 3000;
    const server = app.listen(port, () => {
      console.log(`Listening at http://localhost:${port}/api`);
    });

    server.on('error', console.error);
  })
  .catch(err => console.log(err))

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});

