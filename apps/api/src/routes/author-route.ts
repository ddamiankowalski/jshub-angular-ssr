import express from 'express';
import { Author } from '../db/models/author';

const router = express.Router();

router.post('/', async (req, res) => {
  const payload = req.body;

  try {
    const author = await new Author(payload);
    const result = await author.save();

    res.status(200);
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

router.get('/all', async (req, res) => {
  try {
    const authors = await Author.find();

    res.status(200);
    res.send(authors);
  } catch (err) {
    res.send(err);
  }
});

export { router as authorRouter };
