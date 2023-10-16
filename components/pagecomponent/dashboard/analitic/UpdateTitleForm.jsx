"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { updateTitle } from "./dbAction/_action";
import { Textarea } from "@/components/ui/textarea";

export const UpdateTitleForm = ({ description, title, id, setOpen }) => {
  const updData = async (data) => {
    const title = data.get("title");
    const description = data.get("description");
    if (typeof title !== "string" || !title) {
      return;
    }
    await updateTitle(id, title, description);
    setOpen(false);
  };
  return (
    <>
      <div className="flex flex-col p-4">
        <form action={updData} className="flex flex-col gap-4 p-4">
          <Input name="title" type="text" defaultValue={title} />
          <Textarea
            name="description"
            defaultValue={description}
            placeholder="Type your description here."
          />
          <Button type="submit">Update</Button>
        </form>
      </div>
    </>
  );
};
