"use server";

import { createFiles, FileIsExist, getAllFiles } from "./tag";
import { revalidatePath } from "next/cache";

export async function getAllBlog() {
  return await getAllFiles();
}

// export async function checkFileIsExistAction(slug) {
//   const slugFromTable = await FileIsExist(slug);
//   if (slugFromTable === null) {
//     return undefined;
//   }
//   return slugFromTable;
//   //   revalidatePath("/dashboard/tag");
// }

export async function createFileAction(slug, title) {
  await createFiles(slug, title);
}

export async function checkFileIsExistAction(slug) {
  const slugFromTable = await FileIsExist(slug);
  if (slugFromTable === null) {
    return undefined;
  }
  return slugFromTable;
  //   revalidatePath("/dashboard/tag");
}

// export async function deleteTagAction(id) {
//   await deleteTag(id);
//   revalidatePath("/dashboard/tag");
// }

// export async function updateTagAction(id, title) {
//   await editTag(id, title);
//   revalidatePath("/");
// }
