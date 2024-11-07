import mongoose from 'mongoose';

const authorSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    imageUrl: { type: String, required: true },
    description: { type: String, required: true },
    twitterUrl: { type: String },
    linkedInUrl: { type: String },
    githubUrl: { type: String },
  },
  { timestamps: true }
);

export const Author = mongoose.model('Author', authorSchema);
