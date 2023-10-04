import { HiOutlineEye } from "@react-icons/all-files/hi/HiOutlineEye";
import { getTimeElapsed } from "@/lib/calculateTimeAndDate";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
export const dynamics = "force-dynamic";

import LinkClick from "@/components/pagecomponent/blog/LinkClick";
import BlogSearchInput from "@/components/pagecomponent/blog/BlogSearchInput";

async function ShowBlogs({ posts }) {
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

export default ShowBlogs;
function InputHeader(props) {
  return (
    <div className="flex items-center justify-between w-full ">
      <div className="flex items-center flex-1 w-full gap-4">
        <BlogSearchInput />
        <p>{props.length} Blog</p>
      </div>
    </div>
  );
}

const FileCard = ({ post }) => {
  return (
    <>
      <Card className="flex flex-col items-cener justify-between bg-card  min-h-[200px]   min-w-[250px] overflow-hidden">
        <CardHeader className="p-2 bg-accent ">
          <CardTitle
            className="flex items-center justify-between text-lg font-normal"
            style={{ lineClamp: 1, textWarp: "balance" }}
          >
            {post.title}
            <LinkClick slug={post.slug} id={post.id} />
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="flex items-center justify-start mt-4 text-sm font-light line-clamp-1 hover:line-clamp-none">
            <h5 className="text-xs text-blue-100 font-tajawal text-md line-clamp-3 hover:line-clamp-none">
              {post.Desctription}
            </h5>
          </div>
        </CardContent>
        <Separator />
        <CardFooter className="py-2">
          <div className="flex items-center justify-between w-full mt-2 mb-1 text-card-foreground">
            <div className="flex items-end justify-between w-full ">
              <div className="flex items-center justify-between gap-2 px-4 py-1 rounded-md bg-accent">
                <HiOutlineEye className="w-4 h-4 text-black/60 dark:text-white/50 " />
                <p className="text-[.7rem] font-normal flex items-center gap-2  text-accent-foreground/60">
                  {post.viewers}
                </p>
              </div>
              <div className="flex items-center justify-between gap-2 px-4 py-1 rounded-md bg-accent">
                <p className="text-[.7rem] font-normal flex items-center gap-2 text-accent-foreground/60">
                  {getTimeElapsed(post.updatedDate)}
                </p>
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};
