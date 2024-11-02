import express from 'express'
import { Article } from '../db/models/article';
import { ArticleSection } from '../db/models/article-section';

const router = express.Router();

router.post('/', async (req, res) => {
    const { sections, ...articlePayload } = req.body;
    
    try {
        const articleSections = await ArticleSection.insertMany(sections);
        const article = await new Article({ ...articlePayload, sections: articleSections });
        const result = await article.save();

        res.status(200);
        res.send(result);
    } catch (err) {
        res.send(err);
    }
});

router.get('/all', async (req, res) => {
    try {
        const articles = await Article.find().populate('sections');

        res.status(200);
        res.send(articles);
    } catch (err) {
        res.send(err);
    }
})

router.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const article = await Article.findById(id).populate('sections');
        
        res.status(200);
        res.send(article);
    } catch (err) {
        res.send(err);
    }
})

router.post('/:id/like', async (req, res) => {
    const { id } = req.params;

    try {
        await Article.updateOne({ _id: id }, { $inc: { likes: 1 } });
        const article = await Article.findById(id).populate('sections');

        res.send(article);
    } catch (err) {
        res.send(err);
    }
})

export { router as articleRouter };