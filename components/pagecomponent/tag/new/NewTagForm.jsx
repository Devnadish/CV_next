"use client";
import React from "react";
import { AiOutlinePlus } from "@react-icons/all-files/ai/AiOutlinePlus";
import { useRef } from "react";
import { createTagAction } from "../helper/_actions";
import SubmitBtn from "@/components/shared/submitBtn/SubmitBtn";
import { useToast } from "@/components/ui/use-toast";

const NewTagForm = () => {
  const formRef = useRef(null);
  const { toast } = useToast();

  async function action(data) {
    const title = data.get("title");
    if (typeof title !== "string" || !title) {
      return;
    }

    await createTagAction(title);
    formRef.current?.reset();
    toast({
      variant: "blue",
      // title: "New Tag.",
      description: "New Tag Add Succufully...",
      // action: <ToastAction altText="Try again">Try again</ToastAction>,
    });
  }

  return (
    <>
      <h2 className=" font-medium">Create a New Tag</h2>
      <form
        ref={formRef}
        action={action}
        className="flex justify-between items-center gap-4"
      >
        <input
          type="text"
          name="title"
          className="rounded border border-slate-400 px-2 py-0.5 h-9"
        />
        <SubmitBtn icon={<AiOutlinePlus size={"20px"} />} varent="blue" />
      </form>
    </>
  );
};

export default NewTagForm;
