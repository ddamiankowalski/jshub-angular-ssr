import express from 'express'
import { Article } from '../db/models/article';

const router = express.Router();

router.post('/', async (req, res) => {
    const { title, text } = req.body;
    
    try {
        const article = await new Article({ title, text }) ;
        const result = await article.save();

        res.status(200);
        res.send(result);
    } catch (err) {
        res.send(err);
    }
});

router.get('/all', async (req, res) => {
    try {
        const articles = await Article.find();

        res.status(200);
        res.send(articles);
    } catch (err) {
        res.send(err);
    }
})

export { router as articleRouter };