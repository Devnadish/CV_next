import mongoose, { Schema } from 'mongoose';

const blogVistor = new Schema(
    {
        title: String,
        blog: String,
        user: String,
        ip: String,
        counter: Number,
        lang: String,
    },
    { timestamps: true },
);
export const Blog = mongoose.models.Blog || mongoose.model('Blog', blogVistor);

const blogViewerConter = new Schema(
    {
        title: String,
        counter: Number,
    },
    { timestamps: true },
);
export const BlogCounter =
    mongoose.models.BlogCounter ||
    mongoose.model('BlogCounter', blogViewerConter);
