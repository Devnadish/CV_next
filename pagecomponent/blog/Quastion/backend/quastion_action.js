'use server';
import { revalidatePath } from 'next/cache';
import {
    AddQuastionToDb,
    getBlogQuastionFromDb,
    getQustionBySlug,
    getQuestionWithAnswers,
    getOffLineQuastionFromDb,
    getOnLineQuastionFromDb,
    publishQuastionTrueOrFalseInDB,
    AddReplayToDb,
    getReplayByQId,
} from './quastion_db.js';

export async function AddQuastion(
    slug,
    postID,
    postTitle,
    Question,
    userID,
    userAvatar,
) {
    console.log(slug, postID, postTitle, Question, userID, userAvatar);

    const posts = await AddQuastionToDb(
        slug,
        postID,
        postTitle,
        Question,
        userID,
        userAvatar,
    );
    revalidatePath('/blog');
    return posts;
}

export async function getBlogQuastion(PostID) {
    const posts = await getBlogQuastionFromDb(PostID);
    // TODO: send dynmic url to revalidate path
    revalidatePath('/blog/enai');
    return posts;
}

export async function getBlogQuastionBySlug(slug) {
    const question = await getQustionBySlug(slug);

    const questionId = question[0].id;
    const replay = await getQuestionWithAnswers(questionId);
    const answer = replay.answers;

    // TODO: send dynmic url to revalidate path
    revalidatePath('/blog/enai');

    return { question, answer };
}
export async function getunPublishQuastion() {
    // const questions = getUnpublishQuastionFromDb();
    const offQuestions = await getOffLineQuastionFromDb();
    const onlineQuestions = await getOnLineQuastionFromDb();
    // TODO: send dynmic url to revalidate path
    revalidatePath('/blog/enai');
    return { offQuestions, onlineQuestions };
}

export async function publishQuastionTrueOrFalse(id, stuts, postID) {
    await publishQuastionTrueOrFalseInDB(id, stuts, postID);
    revalidatePath('/dashboard/publishquastion');
}

export async function AddReplay(Answer, QuestionId, userID, userAvatar) {
    const posts = await AddReplayToDb(Answer, QuestionId, userID, userAvatar);
    // TODO: send dynmic url to revalidate path
    revalidatePath('/blog/enai');
    return posts;
}

export async function getReplays(QuestionId) {
    const replays = await getReplayByQId(QuestionId);
    // TODO: send dynmic url to revalidate path

    revalidatePath('/blog/enai');
    return replays;
}
