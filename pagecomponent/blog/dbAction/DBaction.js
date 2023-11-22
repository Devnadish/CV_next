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

// export async function searchBlog(query, page) {
//     consoleLog(query.tag);
//     const searchKeyword = decodeURIComponent(query.text);
//     const bodyFlag = decodeURIComponent(query.body);
//     const descriptionFlag = decodeURIComponent(query.description);
//     const searchLang = query.lang;
//     const tagQuery = query.tag;
//     const skipPage = (page - 1) * query.limit;

//     try {
//         let where = {};
//         if (searchKeyword) {
//             where = {
//                 OR: [
//                     {
//                         title: {
//                             contains: searchKeyword,
//                             mode: 'insensitive',
//                         },
//                     },
//                     { tag: { contains: tagQuery, mode: 'insensitive' } },
//                     bodyFlag && {
//                         body: { contains: searchKeyword, mode: 'insensitive' },
//                     },
//                     descriptionFlag && {
//                         description: {
//                             contains: searchKeyword,
//                             mode: 'insensitive',
//                         },
//                     },
//                 ].filter(Boolean),
//                 language: searchLang,
//             };
//         }

//         const results = await db.BlogTable.findMany({
//             where,
//             //  how may to shift
//             skip: Math.abs(skipPage),
//             // take for how may contain in result
//             take: query.limit,
//             orderBy: {
//                 viewers: query.sortDirection === 'desc' ? 'desc' : 'asc',
//             },
//         });

//         return results;
//     } catch (error) {
//         console.error('Error retrieving filtered URLs:', error);
//         throw error;
//     } finally {
//         await db.$disconnect();
//     }
// }

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
        // console.log(
        //     results.map((result) => result.title),
        //     page,
        // );
        // consoleLog(results, page);
        return results;
    } catch (error) {
        console.error('Error retrieving filtered URLs:', error);
        throw error;
    }
}

// export async function searchBlog(query, page) {
//     const searchKeyword = decodeURIComponent(query.text);
//     const bodyFlag = decodeURIComponent(query.body);
//     const descriptionFlag = decodeURIComponent(query.description);
//     const searchLang = query.lang;
//     const tagQuery = query.tag;
//     const skipPage = (page - 1) * query.limit;

//     try {
//         let where = {};
//         // If a tag is selected, filter based on the tag
//         if (tagQuery) {
//             where.tag = { contains: tagQuery, mode: 'insensitive' };
//         }
//         // If no tag is selected or there is a search keyword, filter based on the search conditions
//         if (!tagQuery || searchKeyword) {
//             const searchConditions = [
//                 {
//                     title: {
//                         contains: searchKeyword,
//                         mode: 'insensitive',
//                     },
//                 },
//                 (bodyFlag || descriptionFlag) && {
//                     OR: [
//                         {
//                             body: {
//                                 contains: searchKeyword,
//                                 mode: 'insensitive',
//                             },
//                         },
//                         {
//                             description: {
//                                 contains: searchKeyword,
//                                 mode: 'insensitive',
//                             },
//                         },
//                     ],
//                 },
//             ].filter(Boolean);

//             where = {
//                 ...where,
//                 OR: searchConditions,
//                 language: searchLang,
//             };
//         }

//         const results = await db.BlogTable.findMany({
//             where,
//             skip: Math.abs(skipPage),
//             take: query.limit,
//             orderBy: {
//                 viewers: query.sortDirection === 'desc' ? 'desc' : 'asc',
//             },
//         });

//         return results;
//     } catch (error) {
//         console.error('Error retrieving filtered URLs:', error);
//         throw error;
//     }
// }

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

// ------- comment Action
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

export async function blogGetPageCount(limit) {
    // const totalCount = await prisma.user.findMany({
    //     _count: true,
    // });

    const totalCount = await db.BlogTable.count({ where: { language: 'en' } }); // Replace "yourModelName" with the actual name of your model

    const pageCount = Math.ceil(totalCount / limit);

    return pageCount;
}

// ---------- publish actions ----------
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
