"use server";

import {
  createTag,
  deleteTag,
  editTag,
} from "@/components/pagecomponent/tag/helper/tag";
// import { createTodo, updateTodo } from '@/lib/todos'
import { revalidatePath } from "next/cache";

export async function createTagAction(title) {
  await createTag(title);
  revalidatePath("/dashboard/tag");
}

export async function deleteTagAction(id) {
  await deleteTag(id);
  revalidatePath("/dashboard/tag");
}

export async function updateTagAction(id, title) {
  await editTag(id, title);
  revalidatePath("/");
}
