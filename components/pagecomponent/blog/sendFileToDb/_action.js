"use server";

import { increaseViewers } from "../../dashboard/analitic/dbAction/dbAction";
import {
  createFiles,
  FileIsExist,
  getAllFiles,
  // AddBlogLinkToDB,
} from "./DBaction";
import { revalidatePath } from "next/cache";

export async function getAllBlog(lang) {
  return await getAllFiles(lang);
}

export async function createFileAction(
  slug,
  title,
  language,
  description,
  subtitle,
  crDate
) {
  await createFiles(slug, title, language, description, crDate, subtitle);
}

export async function checkFileIsExistAction(slug) {
  const slugFromTable = await FileIsExist(slug);
  if (slugFromTable === null) {
    return undefined;
  }
  return slugFromTable;

  //   revalidatePath("/dashboard/tag");
}

export async function increaseBlogViewers(id) {
  await increaseViewers(id);
  revalidatePath("/blog");
}

// export async function AddBlogLink(id, targetlink) {
//   const result = targetlink.toLowerCase();
//   await AddBlogLinkToDB(id, result);
//   revalidatePath("/dashboard/linkblog");
// }
