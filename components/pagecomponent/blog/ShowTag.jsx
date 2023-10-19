"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import SearchAction from "@/components/pagecomponent/blog/SearchAction";
import { useMediaQuery } from "react-responsive";
import { AiOutlineMenu } from "@react-icons/all-files/ai/AiOutlineMenu";

function ShowTag({ tags, blogCont }) {
  const isMobile = useMediaQuery({
    query: "(max-width: 500px)",
  });
  console.log(isMobile);
  return (
    <>
      <div className="flex w-full  items-center justify-evenly px-4">
        <div
          id="rightdiv"
          className="flex items-center justify-center  w-[30%] gap-2  "
        >
          <Badge variant="outline" className="min-w-fit">
            <div className="w-full">{blogCont} Blog</div>
          </Badge>
          <SearchAction />
        </div>
        {isMobile ? <MobileScreen tags={tags} /> : <BIgScreen tags={tags} />}
      </div>
    </>
  );
}

export default ShowTag;

// -----------------
function MobileScreen(props) {
  return (
    <div className="flex rounded-md  max-w-[80vw] gap-4 px-4 items-center      ">
      <Button size="sm" className="flex items-center gap-4 text-foreground">
        <AiOutlineMenu />
        Tag
      </Button>
      <Button size="sm" className="flex items-center gap-4 text-foreground">
        <AiOutlineMenu />
        Frequintly
      </Button>
      {/* {props.tags.map((tag) => {
        return (
          <div key={tag.id}>
            <Badge variant="destructive" className="cursor-pointer   mx-4">
              <p className="w-full">{tag.title}</p>
            </Badge>
          </div>
        );
      })} */}
    </div>
  );
}

// ---------------------------
function BIgScreen(props) {
  return (
    <div className="flex rounded-md  max-w-[80vw] gap-4 px-4 items-center   text-white overflow-x-auto overflow-y-hidden scroll-smooth  scrollbar-thin py-3 scrollbar-track-transparent scrollbar-thumb-primary/20  border border-primary/20">
      {props.tags.map((tag) => {
        return (
          <div key={tag.id}>
            <Badge variant="destructive" className="cursor-pointer   mx-4">
              <p className="w-full">{tag.title}</p>
            </Badge>
          </div>
        );
      })}
    </div>
  );
}
