import db from '@/lib/prisma';
import consoleLog from '@/lib/consoleLog';
export async function getAllBlogs() {
    try {
        const blogs = await db.BlogTable.findMany();
        return blogs;
    } catch (error) {
        consoleLog(error);
    }
}
