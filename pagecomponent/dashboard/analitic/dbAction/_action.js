'use server';
import { revalidatePath } from 'next/cache';
import {
    increaseViewers,
    decreaseViewers,
    updateDbTitle,
    puplitITonDb,
    deleteBlog,
    getDataAfterSearchFromDb,
} from './dbAction';

export async function increaseBlogViewers(id) {
    await increaseViewers(id);
    revalidatePath('/dashboard/bloganalitic');
}

export async function decreaseBlogViewers(id) {
    await decreaseViewers(id);
    revalidatePath('/dashboard/bloganalitic');
}

export async function updateTitle(id, title, description, tag) {
    await updateDbTitle(id, title, description, tag);
    revalidatePath('/dashboard/bloganalitic');
}

export async function puplitIT(id, checked) {
    await puplitITonDb(id, checked);
    revalidatePath('/dashboard/bloganalitic');
}
export async function deleteBlogFromDb(id) {
    await deleteBlog(id);
    revalidatePath('/dashboard/bloganalitic');
}

export async function getDataAfterSearch(text, lang) {
    const posts = await getDataAfterSearchFromDb(text, lang);
    revalidatePath('/dashboard/bloganalitic');
    return posts;
}

// "use server";

// import { revalidatePath } from "next/cache";
// import {
//   // increaseViewers,
//   // decreaseViewers,
//   // updateDbTitle,
//   // puplitITonDb,
//   // deleteBlog,
//   getDataAfterSearchFromDb,
// } from "./dbAction";

// export async function getDataAfterSearch(text, location, lang) {
//   const posts = await getDataAfterSearchFromDb(text, location, lang);
//   revalidatePath("/dashboard/bloganalitic");
//   return posts;
// }
