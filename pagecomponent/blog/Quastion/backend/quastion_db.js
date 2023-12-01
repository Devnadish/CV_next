import db from '@/lib/prisma';
import consoleLog from '@/lib/consoleLog';
export async function AddQuastionToDb(
    slug,
    postID,
    postTitle,
    Question,
    userID,
    userAvatar,
) {
    // TODO: check duplicate Question
    try {
        const QuestionData = await db.Question.create({
            data: { Question, slug, postID, postTitle, userID, userAvatar },
        });

        return { QuestionData };
    } catch (error) {
        return { error };
    }
}

export async function getBlogQuastionFromDb(PostID) {
    try {
        return await db.Question.findMany({
            //TODO: published: false just for test defalut TRUE
            where: { postID: PostID, published: true },
            orderBy: { updatedDate: 'desc' }, // add this line to order by update date in descending order
        });
    } catch (error) {
        consoleLog(error);
    }
}

export async function getQustionBySlug(slug) {
    try {
        return await db.Question.findMany({
            //TODO: published: false just for test defalut TRUE
            where: { slug: slug },
            orderBy: { updatedDate: 'desc' }, // add this line to order by update date in descending order
        });
    } catch (error) {
        consoleLog(error);
    }
}

export async function getQuestionWithAnswers(questionId) {
    try {
        // Find the question by its ID
        const question = await prisma.question.findUnique({
            where: { id: questionId },
        });

        if (!question) {
            return { error: 'Question not found' };
        }

        // Retrieve the answer IDs from the question
        const answerIds = question.answersID;

        // Query the Answer table to get the answers based on the answer IDs
        const answers = await prisma.answer.findMany({
            where: { id: { in: answerIds } },
            orderBy: { updatedDate: 'desc' },
        });

        return { question, answers };
    } catch (error) {
        return { error };
    } finally {
        await prisma.$disconnect();
    }
}
export async function getOffLineQuastionFromDb() {
    try {
        return await db.Question.findMany({
            //TODO: published: false just for test defalut TRUE
            where: { published: false },
            orderBy: { updatedDate: 'desc' }, // add this line to order by update date in descending order
        });
    } catch (error) {
        consoleLog(error);
    }
}
export async function getOnLineQuastionFromDb() {
    try {
        return await db.Question.findMany({
            //TODO: published: false just for test defalut TRUE
            where: { published: true },
            orderBy: { updatedDate: 'desc' }, // add this line to order by update date in descending order
        });
    } catch (error) {
        consoleLog(error);
    }
}

export async function publishQuastionTrueOrFalseInDB(id, stuts, postID) {
    console.log(postID);
    // 655be645f5357fb5c85d04bc
    try {
        await db.Question.update({
            where: { id: id },
            data: { published: stuts },
        });
        await db.BlogTable.update({
            where: { id: postID },
            data: {
                questions: {
                    set: stuts
                        ? [
                              ...(
                                  await db.BlogTable.findUnique({
                                      where: { id: postID },
                                  })
                              ).questions,
                              id,
                          ]
                        : (
                              await db.BlogTable.findUnique({
                                  where: { id: postID },
                              })
                          ).questions.filter((questionId) => questionId !== id),
                },
            },
        });
        return true;
    } catch (error) {
        consoleLog(error);
    }
}

export async function AddReplayToDb(Answer, QuestionId, userID, userAvatar) {
    try {
        const AnswerTable = await db.Answer.create({
            data: { QuestionId, Answer, userID, userAvatar },
        });
        const answerId = Answer.id; // Retrieve the answer ID
        // console.log(AnswerTable.id);

        // Add the answerId to the answersID array in the Question collection
        const BlogTable = await db.Question.update({
            where: { id: QuestionId },
            data: { answersID: { push: AnswerTable.id } },
        });

        return { AnswerTable, answerId };
    } catch (error) {
        return { error };
    }
}

export async function getReplayByQId(QuestionId) {
    try {
        return await db.Answer.findMany({
            //TODO: published: false just for test defalut TRUE
            where: { QuestionId: QuestionId },
            orderBy: { updatedDate: 'desc' }, // add this line to order by update date in descending order
        });
    } catch (error) {
        consoleLog(error);
    }
}
