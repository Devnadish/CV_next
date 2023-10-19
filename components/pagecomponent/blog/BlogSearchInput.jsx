"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AiOutlineCloseCircle } from "@react-icons/all-files/ai/AiOutlineCloseCircle";
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose";
import SearchAction from "@/components/pagecomponent/blog/SearchAction";

function ShowAll(props) {
  return (
    <div className="flex items-center gap-4 self-end">
      <Badge variant="outline" className="min-w-fit">
        <div className="w-full">{props.blogCont} Blog</div>
      </Badge>
      <SearchAction />
    </div>
  );
}

function ClearInpot(props) {
  return (
    <div className="absolute right-0 flex items-center justify-center gap-4">
      {props.searchQuery && (
        <div
          className="cursor-pointer  text-foreground/70  px-2  "
          onClick={() => props.setSearchQuery("")}
        >
          <AiOutlineClose className="h-6 w-6" />
        </div>
      )}
    </div>
  );
}

function SeachBlog(props) {
  return (
    <form onSubmit={props.onSearch} className="flex justify-center w-full ">
      <Input
        value={props.searchQuery || ""}
        onChange={(event) => props.setSearchQuery(event.target.value)}
        placeholder="What are you looking for? --> Or Type [ all ] "
        className="my-2"
      />
    </form>
  );
}

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
      <div className="relative flex w-full flex-col items-center ">
        <SeachBlog
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onSearch={onSearch}
        />
        <ClearInpot searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <ShowAll blogCont={blogCont} />
      </div>
    </>
  );
};

export default BlogSearchInput;
