import db from '@/lib/prisma';
import consoleLog from '@/lib/consoleLog';
export async function AddcommentToDb(
    title,
    postID,
    postTitle,
    userID,
    userAvatar,
) {
    try {
        const BlogTable = await db.BlogComment.create({
            data: { title, postID, postTitle, userID, userAvatar },
        });
        return { BlogTable };
    } catch (error) {
        return { error };
    }
}

export async function getBlogCommentFromDb(PostID) {
    try {
        return await db.BlogComment.findMany({
            where: { postID: PostID },
        });
    } catch (error) {
        consoleLog(error);
    }
}

export async function addCommentCounterDb(commentID) {
    try {
        await db.BlogComment.update({
            where: {
                id: commentID,
            },
            data: {
                like: { increment: 1 },
            },
        });
    } catch (error) {
        consoleLog(error.message);
    }
}
export async function minusCommentCounterDb(commentID) {
    try {
        await db.BlogComment.update({
            where: {
                id: commentID,
            },
            data: {
                dislike: { increment: 1 },
            },
        });
    } catch (error) {
        consoleLog(error.message);
    }
}
