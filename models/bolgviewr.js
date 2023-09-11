import mongoose from "mongoose";


const blogViewer = new mongoose.Schema({
    slug: String,
    user: String,
    ip: String,
},{timestamps: true})


const blog = mongoose.model.blog || mongoose.model('blog', blogViewer);
export default blog