"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AiOutlineCloseCircle } from "@react-icons/all-files/ai/AiOutlineCloseCircle";
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose";

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
      {/* <div className="flex gap-4 items-center justify-end text-sm  w-[85%] ">
        <Button size="xs" variant="blue">
          Requist
        </Button>
        If you Need Any Informattion About Any Artical just Request it
      </div> */}
      <div className="relative flex w-full items-center ">
        <form onSubmit={onSearch} className="flex justify-center w-full ">
          <Input
            value={searchQuery || ""}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="What are you looking for? --> Or Type [ all ] "
            className="my-2"
          />
        </form>

        <div
          id="leftdiv"
          className="absolute right-0 flex items-center justify-center gap-4"
        >
          {searchQuery && (
            <div
              className="cursor-pointer  text-foreground/70  px-2  "
              onClick={() => setSearchQuery("")}
            >
              <AiOutlineClose className="h-6 w-6" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogSearchInput;
