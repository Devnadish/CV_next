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
function ShowFreqy({ freq, blogCont }) {
  const isMobile = useMediaQuery({
    query: "(max-width: 500px)",
  });
  return (
    <>
      <div className="flex w-full  items-center justify-evenly px-4">
        {isMobile ? <MobileScreen freq={freq} /> : <BIgScreen freq={freq} />}
      </div>
    </>
  );
}

export default ShowFreqy;

// ---------------------------
function BIgScreen({ freq }) {
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
      {freq.map((freq) => {
        return (
          <Badge
            key={freq.id}
            variant="outline"
            className="flex  justify-between items-center cursor-pointer w-full border-foreground/30 hover:border-foreground  active:bg-red-400"
            onClick={() => {
              onSearch(freq.title);
            }}
          >
            <p>{freq.title}</p>
            <p>{freq.viewers}</p>
          </Badge>
        );
      })}
    </div>
  );
}

// -----------------
function MobileScreen({ freq }) {
  return (
    <div className="flex rounded-md   gap-4 px-4 items-center      ">
      <Button size="sm" className="flex items-center gap-4 text-foreground">
        <AiOutlineMenu />
        freq
      </Button>
      <Button size="sm" className="flex items-center gap-4 text-foreground">
        <AiOutlineMenu />
        Frequintly
      </Button>
    </div>
  );
}
