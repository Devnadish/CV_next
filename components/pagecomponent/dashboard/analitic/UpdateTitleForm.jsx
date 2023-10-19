"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { updateTitle } from "./dbAction/_action";
import { Textarea } from "@/components/ui/textarea";

export const UpdateTitleForm = ({ description, title, id, setOpen, tags }) => {
  const [tag, setTag] = useState(tags[0].title);
  const updData = async (data) => {
    const title = data.get("title");
    const description = data.get("description");
    if (typeof title !== "string" || !title) {
      return;
    }
    await updateTitle(id, title, description, tag);
    setOpen(false);
  };
  return (
    <>
      <div className="flex flex-col p-4">
        <form action={updData} className="flex flex-col gap-6 p-4">
          <Input name="title" type="text" defaultValue={title} />
          <Textarea
            name="description"
            defaultValue={description}
            placeholder="Type your description here."
          />
          <SelectTag tags={tags} setTag={setTag} />
          <Button type="submit">Update</Button>
        </form>
      </div>
    </>
  );
};

const SelectTag = ({ tags, setTag }) => {
  return (
    <>
      <select
        name="tags"
        id="tags"
        className="h-8"
        onChange={(e) => setTag(e.target.value)}
      >
        {tags.map((tag) => {
          return (
            <>
              <option value={tag.title}>{tag.title}</option>
            </>
          );
        })}
      </select>
    </>
  );
};
