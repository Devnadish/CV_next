"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { updateTagAction } from "../helper/_actions";
import { useToast } from "@/components/ui/use-toast";
import { AiOutlineEdit } from "@react-icons/all-files/ai/AiOutlineEdit";

import SubmitBtn from "@/components/shared/submitBtn/SubmitBtn";
import { ToastAction } from "@/components/ui/toast";
import { Button } from "@/components/ui/button";
const EditTagForm = ({ id, title }) => {
  const oldTitle = title;
  const [newTitle, setNewTitle] = useState(title);
  const router = useRouter();
  const { toast } = useToast();

  function action(data) {
    const title = data.get("title");
    if (typeof title !== "string" || !title) {
      return;
    }

    toast({
      variant: "orange",
      duration: 10000,
      title: `New : ${title} `,
      description: `Old : ${oldTitle}`,
      action: (
        <ToastAction onClick={() => approve(id, title)} altText="Try again">
          Approve Update
        </ToastAction>
      ),
    });
    // router.push("/dashboard/tag");
  }

  const approve = (id, title) => {
    updateTagAction(id, title);
    setNewTitle("");
    router.push("/dashboard/tag");
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center p-4 mx-auto w-full bg-zinc-700/50  gap-8">
        <div className="flex  items-center justify-between w-full">
          <h2 className="mb-2 font-medium">Edit a New Tag</h2>
          <Button variant="blue" size="sm" onClick={() => router.back()}>
            Back
          </Button>
        </div>

        <form
          action={action}
          className="flex justify-between items-center w-full"
        >
          <input
            type="text"
            name="title"
            value={newTitle}
            className="rounded border border-slate-400 px-2 py-0.5"
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <SubmitBtn icon={<AiOutlineEdit size={"20px"} />} varent="red" />
        </form>
      </div>
    </>
  );
};

export default EditTagForm;
