'use server';

import {
    createTag,
    deleteTag,
    editTag,
    TagsWithPost,
} from '@/pagecomponent/tag/backend/tag_db';
// import { createTodo, updateTodo } from '@/lib/todos'
import { revalidatePath } from 'next/cache';

export async function createTagAction(title) {
    const isSave = await createTag(title);
    revalidatePath('/dashboard/tag');
    return isSave;
}

export async function deleteTagAction(id, oldtagName) {
    await deleteTag(id, oldtagName);
    revalidatePath('/dashboard/tag');
}

export async function updateTagAction(id, title, oldTagNames) {
    await editTag(id, title, oldTagNames);
    revalidatePath('/');
}
export async function collectTagWithPost() {
    const tags = await TagsWithPost();
    revalidatePath('/dashboard/tag');
    return tags;
}
