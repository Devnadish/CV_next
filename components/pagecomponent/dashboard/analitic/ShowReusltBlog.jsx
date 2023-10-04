import Link from "next/link";
import { getTimeElapsed } from "@/lib/calculateTimeAndDate";
import ViewerConter from "@/components/pagecomponent/dashboard/analitic/ViewerConter";
import EditTitle from "@/components/pagecomponent/dashboard/analitic/EditTitle";
import LangAndPublish from "@/components/pagecomponent/dashboard/analitic/LangAndPublish";
import { Separator } from "@/components/ui/separator";
import DeleteBlog from "@/components/pagecomponent/dashboard/analitic/DeleteBlog";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import SearchInput from "@/components/shared/inputSearch/InputSearch";

function ShowReusltBlog({ search, posts }) {
  return (
    <div className="flex flex-col items-center justify-start w-full p-4 overflow-auto bg-zinc-200 dark:bg-zinc-800 ">
      <InputHeader length={posts.length} />
      <div className="grid grid-cols-1 gap-6 mt-8 lg:grid-cols-4 place-items-center">
        {posts.map(async (post) => {
          return (
            <div className="text-sm text-black rounded-lg">
              <FileCard post={post} key={post.slug} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShowReusltBlog;
function InputHeader(props) {
  return (
    <div className="flex items-center justify-between w-full ">
      <div className="flex items-center flex-1 w-full gap-4">
        <SearchInput />
        <p>{props.length} Blog</p>
      </div>
      <div className="flex items-center justify-between gap-1 ">
        <Button size="xs">Arabic</Button>
        <Button size="xs">English</Button>
      </div>
    </div>
  );
}

const FileCard = ({ post }) => {
  return (
    <>
      <Card className="flex flex-col items-cener justify-between bg-card   min-h-[350px]  min-w-[250px] ">
        <CardHeader className="p-4">
          <CardTitle>
            <div className="flex flex-col items-center justify-between font-normal">
              <p className="flex items-center justify-start text-lg font-normal ">
                {post.title}
              </p>
              <h5 className="text-xs text-blue-100 font-tajawal text-md line-clamp-3 hover:line-clamp-none">
                {post.Desctription}
              </h5>
              {/* <p className="flex items-center justify-start text-sm font-light">
                {post.Desctription}
              </p> */}
              <EditTitle
                id={post.id}
                title={post.title}
                Desctription={post.Desctription}
              />
            </div>
            <Separator className="space-y-4" />
            <LangAndPublish
              lang={post.language}
              published={post.published}
              id={post.id}
            />
          </CardTitle>
          <Separator className="space-y-4" />
        </CardHeader>
        <CardContent>
          <ViewerConter viewer={post.viewers} id={post.id} />
        </CardContent>
        <Separator className="my-1" />
        <CardFooter>
          <Fotter
            createdAt={getTimeElapsed(post.createdDate)}
            updAt={getTimeElapsed(post.updatedDate)}
            id={post.id}
          />
        </CardFooter>
      </Card>
    </>
  );
};

function Fotter(props) {
  return (
    <div className="flex items-center justify-between w-full mt-2 text-card-foreground">
      <div className="flex items-center justify-between text-white">
        <DeleteBlog id={props.id} />
      </div>
      <div className="flex-col items-end justify-end min-w-fit">
        <p className="flex items-center gap-2 font-normal text-[.6rem]">
          <span className="px-1 text-[.6rem] rounded-sm bg-accent hover:bg-accent hover:text-accent-foreground">
            CR
          </span>
          {props.createdAt}
        </p>
        <p className="text-[.6rem] font-normal flex items-center gap-2">
          <span className="px-1 text-[.6rem] rounded-sm bg-accent hover:bg-accent hover:text-accent-foreground">
            ED
          </span>
          {props.updAt}
        </p>
      </div>
    </div>
  );
}
