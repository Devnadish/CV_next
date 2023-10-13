"use client";
import React from "react";
import SubmitBtn from "@/components/shared/submitBtn/SubmitBtn";
import { Input } from "@/components/ui/input";
import { AddBlogLink } from "@/components/pagecomponent/dashboard/linkblogs/dbaction/_action";
function NewTargetLink({ id }) {
  const handleAddLink = async (data) => {
    const title = data.get("targetLink");
    await AddBlogLink(id, title);
    // alert(id);
  };
  return (
    <div className="flex items-center justify-between w-full gap-4">
      <form action={handleAddLink} className="flex items-center gap-4">
        <Input
          type="text"
          className="w-full"
          placeholder="Add Label"
          name="targetLink"
        />
        <SubmitBtn txt="+" />
      </form>
    </div>
  );
}

export default NewTargetLink;
