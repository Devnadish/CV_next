"use server";

import { getBlogpathfromDB } from "./dbAction";
import { revalidatePath } from "next/cache";

export async function getBlogpath(searchPath) {
  return await getBlogpathfromDB(searchPath);
}
