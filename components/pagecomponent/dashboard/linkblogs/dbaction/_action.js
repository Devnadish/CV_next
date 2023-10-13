"use server";
import { getAllFiles, AddBlogLinkToDB } from "./DBaction";
import { revalidatePath } from "next/cache";

export async function getAllBlog(lang) {
  return await getAllFiles(lang);
}
export async function AddBlogLink(id, targetlink) {
  const result = targetlink.toLowerCase();
  await AddBlogLinkToDB(id, result);
  revalidatePath("/dashboard/linkblog");
}
