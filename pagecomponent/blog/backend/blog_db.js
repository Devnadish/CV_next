import db from '@/lib/prisma';
import consoleLog from '@/lib/consoleLog';
import { buildSearchOptions } from './where';

export async function FileIsExist(slug) {
    try {
        const BlogTable = await db.BlogTable.findFirst({
            where: { slug: slug },
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

export async function createFiles(
    slug = '',
    title = '',
    lang = '',
    description = '',
    body = '',
    subtitle = '',
) {
    try {
        const createdRecord = await db.BlogTable.create({
            data: {
                slug,
                title,
                language: lang,
                description,
                body,
                subtitle,
                tag: 'public',
                published: false,
            },
        });
        let FileDonea = createdRecord.title;
        return FileDonea;
    } catch (error) {
        return { error };
    }
}

export async function showTagfromDb(lang = 'en') {
    try {
        const postsWithTagCount = await db.BlogTable.groupBy({
            by: ['tag'],
            _count: {
                tag: true,
            },
            where: {
                language: lang,
            },
        });

        const tagCounts = postsWithTagCount.map((postWithTagCount) => {
            return {
                tagName: postWithTagCount.tag,
                count: postWithTagCount._count.tag,
            };
        });
        return tagCounts;
    } catch (error) {
        consoleLog(error);
    }
}

export async function getFreqBlog() {
    try {
        return await db.BlogTable.findMany({
            where: { viewers: { gt: 0 } },
            orderBy: { viewers: 'desc' },
        });
    } catch (error) {
        consoleLog(error);
    }
}

export async function getBlogBySlug(slug) {
    try {
        return await db.BlogTable.findMany({
            where: { slug: slug },
        });
    } catch (error) {
        consoleLog(error);
    }
}

export async function getBlogById(id) {
    try {
        return await db.BlogTable.findMany({
            where: { id: id },
        });
    } catch (error) {
        consoleLog(error);
    }
}

export async function updatePostActionOnDb(
    postId,
    slug,
    title,
    language,
    description,
    data,
    tagElement,
) {
    try {
        await db.BlogTable.update({
            where: {
                id: postId,
            },

            data: {
                slug,
                title,
                language,
                description,
                body: data,
                tag: tagElement,
                // published: false,
            },
        });
    } catch (error) {
        consoleLog(error.message);
    }
}

export async function searchBlog(query, page) {
    const searchKeyword = decodeURIComponent(query.text);
    const bodyFlag = decodeURIComponent(query.body);
    const descriptionFlag = decodeURIComponent(query.description);
    const searchLang = query.lang;
    const tagQuery = query.tag;
    const skipPage = (page - 1) * query.limit;

    try {
        const options = buildSearchOptions(
            searchKeyword,
            searchLang,
            bodyFlag,
            descriptionFlag,
            tagQuery,
        );
        options.skip = skipPage;
        options.take = query.limit;
        options.orderBy = {
            title: query.sortDirection === 'desc' ? 'desc' : 'asc',
        };

        const results = await db.BlogTable.findMany(options);
        return results;
    } catch (error) {
        console.error('Error retrieving filtered URLs:', error);
        throw error;
    }
}

export async function getBlogs() {
    try {
        const results = await db.BlogTable.findMany({});
        return results;
    } catch (error) {
        console.error('Error retrieving filtered URLs:', error);
        throw error;
    } finally {
        await db.$disconnect();
    }
}

export async function blogGetPageCount(limit) {
    // const totalCount = await prisma.user.findMany({
    //     _count: true,
    // });

    const totalCount = await db.BlogTable.count({ where: { language: 'en' } }); // Replace "yourModelName" with the actual name of your model

    const pageCount = Math.ceil(totalCount / limit);

    return pageCount;
}

export async function showAllOnline_post(lang) {
    try {
        return await db.BlogTable.findMany({
            where: { published: true, language: lang },
            orderBy: { title: 'asc' },
        });
    } catch (error) {
        consoleLog(error);
    }
}

export async function showAllOffline_post(lang) {
    try {
        return await db.BlogTable.findMany({
            where: { published: false, language: lang },
            orderBy: { title: 'asc' },
        });
    } catch (error) {
        consoleLog(error);
    }
}

export async function publish(id) {
    try {
        await db.BlogTable.update({
            where: {
                id: id,
            },
            data: {
                published: true,
            },
        });
    } catch (error) {
        consoleLog(error.message);
    }
}

export async function unpublish(id) {
    try {
        await db.BlogTable.update({
            where: {
                id: id,
            },
            data: {
                published: false,
            },
        });
    } catch (error) {
        consoleLog(error.message);
    }
}

export async function DELETEallBOLGS() {
    return await db.BlogTable.deleteMany();
}
