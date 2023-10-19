"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import SearchAction from "@/components/pagecomponent/blog/SearchAction";
import { useMediaQuery } from "react-responsive";
import { AiOutlineMenu } from "@react-icons/all-files/ai/AiOutlineMenu";
import { useRouter, useSearchParams } from "next/navigation";
function ShowTag({ tags, blogCont }) {
  const isMobile = useMediaQuery({
    query: "(max-width: 500px)",
  });
  return (
    <>
      <div className="flex w-full  items-center justify-evenly px-4">
        {isMobile ? <MobileScreen tags={tags} /> : <BIgScreen tags={tags} />}
      </div>
    </>
  );
}

export default ShowTag;

// ---------------------------
function BIgScreen({ tags }) {
  const router = useRouter();
  const onSearch = (search) => {
    if (typeof search !== "string") {
      return;
    }
    const encodedSearchQuery = encodeURI(search);
    router.push(`/blog/lookup/tag=${encodeURI(search)}`);
  };

  return (
    <div className="flex flex-col  w-full justify-start  gap-2  overflow-y-auto  scroll-smooth  scrollbar-thin  scrollbar-track-transparent scrollbar-thumb-primary/20 overflow-x-hidden ">
      {tags.map((tag) => {
        return (
          <Badge
            key={tag.id}
            variant="outline"
            className="cursor-pointer w-full border-foreground/30 hover:border-foreground  active:bg-red-400"
            onClick={() => {
              onSearch(tag.title);
            }}
          >
            {tag.title}
          </Badge>
        );
      })}
    </div>
  );
}

// -----------------
function MobileScreen(props) {
  return (
    <div className="flex rounded-md   gap-4 px-4 items-center      ">
      <Button size="sm" className="flex items-center gap-4 text-foreground">
        <AiOutlineMenu />
        Tag
      </Button>
      <Button size="sm" className="flex items-center gap-4 text-foreground">
        <AiOutlineMenu />
        Frequintly
      </Button>
    </div>
  );
}
