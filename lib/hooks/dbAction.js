import db from '@/lib/prisma';
import consoleLog from '@/lib/consoleLog';
export async function getBlogpathfromDB(searchPath) {
    try {
        const BlogTable = await db.BlogTable.findMany({
            where: {
                targetlinks: {
                    hasEvery: [searchPath],
                },
            },
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
