'use server';
import db from '@/lib/prisma';
import consoleLog from '@/lib/consoleLog';

export async function getVisitors() {
    try {
        const data = await db.Iplog.findMany({});
        return data;
    } catch (error) {
        consoleLog(error.message);
    }
}
export async function getComment() {
    try {
        const data = await db.BlogComment.findMany({});
        return data;
    } catch (error) {
        consoleLog(error.message);
    }
}

export async function getOnlineQuastion() {
    try {
        const data = await db.Question.findMany({ where: { published: true } });
        return data;
    } catch (error) {
        consoleLog(error.message);
    }
}

export async function getOfflineQuastion() {
    try {
        const data = await db.Question.findMany({
            where: { published: false },
        });
        return data;
    } catch (error) {
        consoleLog(error.message);
    }
}

export async function getOfflineBlog() {
    try {
        const data = await db.BlogTable.findMany({
            where: { published: false },
        });
        return data;
    } catch (error) {
        consoleLog(error.message);
    }
}
export async function getOnlineBlog() {
    try {
        const data = await db.BlogTable.findMany({
            where: { published: true },
        });
        return data;
    } catch (error) {
        consoleLog(error.message);
    }
}

export async function getLatestVisitor() {
    try {
        const latestVisitor = await db.iplog.findFirst({
            select: { updatedDate: true },
            orderBy: { updatedDate: 'desc' },
        });
        return latestVisitor?.updatedDate || null;
    } catch (error) {
        console.error(error);
        return null;
    }
}
export async function getMostViewedPublishedBlogTitle() {
    try {
        const mostViewedBlog = await db.BlogTable.findFirst({
            select: { title: true },
            where: { published: true },
            orderBy: { viewers: 'desc' },
        });
        return mostViewedBlog?.title || null;
    } catch (error) {
        console.error(error);
        return null;
    }
}
