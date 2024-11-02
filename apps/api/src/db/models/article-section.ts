import mongoose from "mongoose";

const articleSectionSchema = new mongoose.Schema({
    category: { type: String, required: true },
    value: { type: String, required: true },
    description: { type: String, required: false },
    htmlId: { type: String, required: true },
    navigatable: { type: Boolean, required: true },
}, { timestamps: true })

export const ArticleSection = mongoose.model('ArticleSection', articleSectionSchema)