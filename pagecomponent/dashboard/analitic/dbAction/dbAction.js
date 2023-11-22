import db from '@/lib/prisma';
import consoleLog from '@/lib/consoleLog';

export async function increaseViewers(id) {
    try {
        await db.BlogTable.update({
            where: {
                id: id,
            },
            data: {
                viewers: { increment: 1 },
            },
        });
    } catch (error) {
        consoleLog(error.message);
    }
}

export async function puplitITonDb(id, checked) {
    try {
        await db.BlogTable.update({
            where: {
                id: id,
            },
            data: {
                published: checked,
            },
        });
    } catch (error) {
        consoleLog(error.message);
    }
}

export async function updateDbTitle(id, title, description, tag) {
    try {
        await db.BlogTable.update({
            where: {
                id: id,
            },
            data: {
                title: title,
                description: description,
                tag: tag,
            },
        });
    } catch (error) {
        consoleLog(error.message);
    }
}
export async function decreaseViewers(id) {
    try {
        await db.BlogTable.update({
            where: {
                id: id,
            },
            data: {
                viewers: { decrement: 1 },
            },
        });
    } catch (error) {
        consoleLog(error.message);
    }
}

export async function deleteBlog(id) {
    try {
        await db.BlogTable.delete({ where: { id: id } });
    } catch (error) {
        consoleLog(error.message);
    }
}

export async function getDataAfterSearchFromDb(text, lang) {
    try {
        if (text.toLowerCase() === 'all') {
            return await db.BlogTable.findMany();
        }
        if (text.toLowerCase() === '99999') {
            return await db.BlogTable.findMany({
                orderBy: {
                    viewers: 'asc',
                },
            });
        }

        if (text.toLowerCase() === '-99999') {
            return await db.BlogTable.findMany({
                orderBy: {
                    viewers: 'desc',
                },
            });
        }

        return await db.BlogTable.findMany({
            where: {
                title: { contains: text, mode: 'insensitive' },
                language: lang,
            },
        });
    } catch (error) {
        consoleLog(error.message);
    }
}
