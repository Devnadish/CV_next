"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { updateTagAction } from "../new/_actions";
import { getTagbyId } from "@/dbcontrol/tag";
// import { createTagAction } from "./_actions";
// import { createTodoAction } from '@/app/_actions'

const EditTagForm = ({ id, title }) => {
  const [newTitle, setNewTitle] = useState(title);
  const router = useRouter();

  function action(data) {
    const title = data.get("title");
    if (typeof title !== "string" || !title) {
      return;
    }
    updateTagAction(id, title);
    setNewTitle("");
    router.push("/dashboard/tag");
  }

  return (
    <form action={action}>
      <h2 className="mb-2 font-medium">Edit a New Tag</h2>
      <input
        type="text"
        name="title"
        value={newTitle}
        className="rounded border border-slate-400 px-2 py-0.5"
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <button
        type="submit"
        className="px-2 py-1 ml-2 text-sm text-white rounded bg-slate-700 disabled:bg-opacity-50"
      >
        Edit Tag
      </button>
    </form>
  );
};

export default EditTagForm;
