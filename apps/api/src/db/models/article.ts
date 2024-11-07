import mongoose from 'mongoose';

const articleSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
    likes: { type: Number, default: 0 },
    tags: [{ type: String, default: [] }],
    sections: [{ type: mongoose.Types.ObjectId, ref: 'ArticleSection' }],
  },
  { timestamps: true },
);

export const Article = mongoose.model('Article', articleSchema);
