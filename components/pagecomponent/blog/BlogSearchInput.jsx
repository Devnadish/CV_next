"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AiOutlineCloseCircle } from "@react-icons/all-files/ai/AiOutlineCloseCircle";

const BlogSearchInput = ({ blogCont }) => {
  const search = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(search ? search.get("q") : "");
  const router = useRouter();

  const onSearch = (event) => {
    event.preventDefault();
    if (typeof searchQuery !== "string") {
      return;
    }
    const encodedSearchQuery = encodeURI(searchQuery);
    router.push(`/blog/lookup/${encodedSearchQuery}`);
  };

  return (
    <>
      <div className="flex gap-4 items-center justify-end text-sm  w-[85%] ">
        <Button size="xs" variant="blue">
          Requist
        </Button>
        If you Need Any Informattion About Any Artical just Request it
      </div>
      <form onSubmit={onSearch} className="flex justify-center w-full ">
        <Input
          value={searchQuery || ""}
          onChange={(event) => setSearchQuery(event.target.value)}
          className="w-[90%] px-5 py-1  border sm:px-5 sm:py-3   text-foreground bg-primary/50 focus:bg-black rounded-full focus:outline-none focus:ring-[1px] focus:ring-green-700 placeholder:text-foreground  placeholder:text-[.7rem]"
          placeholder="What are you looking for? --> Or Type [ all ] "
        />
      </form>
      <div className="flex items-center justify-between w-[80%]">
        <div id="rightdiv">
          <Badge variant="outline"> {blogCont} Blog</Badge>
        </div>
        <div id="leftdiv" className="flex items-center justify-center gap-4">
          <Badge
            className="flex items-center justify-center gap-2 cursor-pointer"
            variant="default"
            onClick={() => router.push(`/blog/lookup/all`)}
          >
            Show All
          </Badge>
          <Badge
            className="flex items-center justify-center gap-2 cursor-pointer"
            variant="secondary"
            onClick={() => setSearchQuery("")}
          >
            Clear
            <AiOutlineCloseCircle />
          </Badge>
        </div>
      </div>
    </>
  );
};

export default BlogSearchInput;
