'use server';
import { increaseViewers } from '../../dashboard/analitic/dbAction/dbAction';

import {
    createFiles,
    FileIsExist,
    getAllFiles,
    showTagfromDb,
    // getDataAfterSearchFromDb,
    searchBlog,
    getFreqBlog,
    AddcommentToDb,
    getBlogBySlug,
    getBlogCommentFromDb,
    addCommentCounterDb,
    minusCommentCounterDb,
    showAllOnline_post,
    showAllOffline_post,
    publish,
    unpublish,
    getBlogById,
    updatePostActionOnDb,
    DELETEallBOLGS,
    getBlogs,
    blogGetPageCount,
} from './DBaction';
import { revalidatePath } from 'next/cache';

export async function getAllBlog(lang) {
    return await getAllFiles(lang);
}

export async function createFileAction(
    slug,
    title,
    lang,
    description,
    body,
    subtitle,
    crdate,
    tagElement,
) {
    const fileDone = await createFiles(
        slug,
        title,
        lang,
        description,
        body,
        subtitle,
        crdate,
        tagElement,
    );
    return fileDone;
}

export async function checkFileIsExistAction(slug) {
    const slugFromTable = await FileIsExist(slug);
    if (slugFromTable === null) {
        return undefined;
    }
    return slugFromTable;
}

export async function increaseBlogViewers(id) {
    await increaseViewers(id);
    revalidatePath('/blog');
}

export async function showAllTag(lang) {
    const data = await showTagfromDb(lang);
    revalidatePath('/blog');
    return data;
}

export async function getDataAfterSearch(query, page) {
    // const posts = await getDataAfterSearchFromDb(text, body, description, lang);
    const posts = await searchBlog(query, page);
    revalidatePath('http://localhost:3000/en/blog?text=adobe');
    return posts;
}

export async function showFreqBlog(lang) {
    const posts = await getFreqBlog(lang);
    revalidatePath('/blog');
    return posts;
}

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

export async function getBlogByslugfromDb(slug) {
    const post = await getBlogBySlug(slug);
    revalidatePath('/blog');
    return post[0];
}
export async function getBlogByIdfromDb(id) {
    const posts = await getBlogById(id);
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

export async function onlinePost(lang) {
    const posts = await showAllOnline_post(lang);
    revalidatePath('/dashboard/post/puplish');
    return posts;
}

export async function offLinePost(lang) {
    const posts = await showAllOffline_post(lang);
    revalidatePath('/dashboard/post/puplish');
    return posts;
}

export async function publishPost(id) {
    const posts = await publish(id);
    revalidatePath('/dashboard/post/puplish');
    return posts;
}
export async function unPublishPost(id) {
    const posts = await unpublish(id);
    revalidatePath('/dashboard/post/puplish');
    return posts;
}

export async function updatePostAction(
    postId,
    slug,
    title,
    language,
    description,
    data,
    tagElement,
) {
    const posts = await updatePostActionOnDb(
        postId,
        slug,
        title,
        language,
        description,
        data,
        tagElement,
    );
    revalidatePath('/dashboard/post/puplish');
    return posts;
}

export async function deleteAllPOst() {
    await DELETEallBOLGS();
    revalidatePath('/dashboard/bloglist');
}
export async function GETALLBLOG() {
    const blogs = await getBlogs();
    revalidatePath('/dashboard/bloglist');
    return blogs;
}
export async function GETBLOGPAGECOUNT(limit) {
    const count = await blogGetPageCount(limit);
    return count;
}
