'use server';
import { revalidatePath } from 'next/cache';
import {
    AddcommentToDb,
    getBlogCommentFromDb,
    addCommentCounterDb,
    minusCommentCounterDb,
} from './comments_db.js';
export async function AddComment(title, postID, postTitle, userID, userAvatar) {
    const posts = await AddcommentToDb(
        title,
        postID,
        postTitle,
        userID,
        userAvatar,
    );
    revalidatePath('/blog');
    return posts;
}
export async function getBlogComment(PostID) {
    const posts = await getBlogCommentFromDb(PostID);
    revalidatePath('/blog/enai');
    return posts;
}
export async function addCommentCounter(commentID) {
    const posts = await addCommentCounterDb(commentID);
    revalidatePath('/blog/enai');
    return posts;
}
export async function minusCommentCounter(commentID) {
    const posts = await minusCommentCounterDb(commentID);
    revalidatePath('/blog/enai');
    return posts;
}
