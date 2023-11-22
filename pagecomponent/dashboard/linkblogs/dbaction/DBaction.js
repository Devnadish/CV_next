import db from '@/lib/prisma';
import consoleLog from '@/lib/consoleLog';

export async function getAllFiles(lang) {
    try {
        return await db.BlogTable.findMany({
            where: { language: lang },
            orderBy: { viewers: 'desc' },
        });
    } catch (error) {
        consoleLog(error);
    }
}

export async function AddBlogLinkToDB(id, targetlink) {
    try {
        const BlogTable = await db.BlogTable.update({
            where: { id: id },
            data: { targetlinks: { push: targetlink } },
        });

        return BlogTable;
    } catch (error) {
        consoleLog(error);
    } finally {
        async () => {
            await db.$disconnect();
        };
    }
}
