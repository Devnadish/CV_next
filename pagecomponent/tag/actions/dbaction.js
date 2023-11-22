/*eslint no-undef: 0*/
import db from '@/lib/prisma';
import consoleLog from '@/lib/consoleLog';

export async function getAllTags() {
    try {
        const blogs = await db.Blogtag.findMany();
        return blogs;
    } catch (error) {
        consoleLog(error);
    }
}

export async function createTag(title) {
    const isExist = await db.Blogtag.findFirst({ where: { title: title } });
    if (isExist) {
        return false;
    }

    try {
        const Blogtag = await db.Blogtag.create({ data: { title } });
        return { Blogtag };
    } catch (error) {
        return { error };
    }
}

export async function deleteTag(id, oldTagNames) {
    try {
        const Blogtag = await db.Blogtag.delete({
            where: { id: id },
        });
        const deletedata = await updateAllPostsAfterTagsUpdate(
            oldTagNames,
            'public',
        );

        return { Blogtag, deletedata };
    } catch (error) {
        return { error };
    }
}

export async function editTag(id, title, oldTagNames) {
    try {
        const Blogtag = await db.Blogtag.update({
            where: { id: id },
            data: { title },
        });
        const updatePostdata = await updateAllPostsAfterTagsUpdate(
            oldTagNames,
            title,
        );
        return { Blogtag, updatePostdata };
    } catch (error) {
        return { error };
    }
}

export async function getTagbyId(id) {
    try {
        const blogs = await db.Blogtag.findFirst({ where: { id: id } });
        return blogs;
    } catch (error) {
        consoleLog(error);
    }
}

export async function TagsWithPost() {
    const tags = await db.Blogtag.findMany();

    const tagPostCounts = tags.map(async (tag) => {
        const postCount = await db.BlogTable.count({
            where: {
                tag: tag.title,
            },
        });

        return {
            tag: tag.title,
            tagId: tag.id,
            postCount: postCount,
        };
    });

    const results = await Promise.all(tagPostCounts);
    return results;
}

const updateAllPostsAfterTagsUpdate = async (oldTagName, newTagName) => {
    try {
        const result = await db.BlogTable.updateMany({
            where: {
                tag: oldTagName, // Specify the current tag name
            },
            data: {
                tag: newTagName, // Update the tag name to the new tag name
            },
        });
        return result.count; // Return the number of updated posts
    } catch (error) {
        consoleLog(error);
        return 0; // Return 0 if an error occurs during the update
    }
};
