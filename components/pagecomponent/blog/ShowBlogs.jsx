import { HiOutlineEye } from "@react-icons/all-files/hi/HiOutlineEye";
import { getTimeElapsed } from "@/lib/calculateTimeAndDate";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import LinkClick from "@/components/pagecomponent/blog/LinkClick";
import Tags from "@/components/pagecomponent/blog/Tags";
import Freqantly from "@/components/pagecomponent/blog/Freqantly";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import BlogSearchInput from "@/components/pagecomponent/blog/BlogSearchInput";

export const dynamics = "force-dynamic";

async function ShowBlogs({ posts, tags, freq }) {
  return (
    <>
      <BlogSearchInput blogCont={posts.length} />
      <div className="flex  gap-6  ">
        <div className="flex flex-col gap-8  w-[20%] ">
          <Tags length={posts.length} tags={tags} />
          <Freqantly length={posts.length} freq={freq} />
        </div>
        <div className="w-[75%] rounded-lg border px-8 pb-4 border-foreground/30">
          <LoopIndata posts={posts} />
        </div>
      </div>
    </>
  );
}

export default ShowBlogs;
function LoopIndata(props) {
  return (
    <div className="grid grid-cols-1 gap-6 mt-4 md:grid-cols-2 lg:grid-cols-2 place-items-center">
      {props.posts.map(async (post) => {
        return (
          <div key={post.slug} className="text-sm text-black rounded-lg">
            <FileCard post={post} key={post.slug} />
          </div>
        );
      })}
    </div>
  );
}
const FileCard = ({ post }) => {
  return (
    <>
      <Card className="flex flex-col items-cener justify-between bg-card  min-h-[200px]   min-w-[300px] overflow-hidden">
        <CardHeader className="p-2">
          <CardTitle
            className="flex items-center justify-between text-lg font-normal "
            style={{ lineClamp: 1, textWarp: "balance" }}
          >
            <LinkClick slug={post.slug} id={post.id}>
              {post.title}
            </LinkClick>
          </CardTitle>
          <CardDescription> {post.subtitle}</CardDescription>
        </CardHeader>
        <Separator />
        <CardContent className="flex items-center justify-start mt-4 text-sm font-light line-clamp-1 hover:line-clamp-none">
          <h5 className="text-xs text-foreground font-tajawal text-md line-clamp-3 hover:line-clamp-none">
            {post.description}
          </h5>
        </CardContent>
        <Separator />
        <CardFooter className="py-2">
          <div className="flex items-center justify-between w-full mt-2 mb-1 text-card-foreground">
            <div className="flex items-center justify-between w-full ">
              <Badge
                className="flex items-center justify-between gap-2 "
                variant="secondary"
              >
                <HiOutlineEye className="w-4 h-4 text-primary/50 " />
                <p className="text-primary/70">{post.viewers}</p>
              </Badge>

              <Badge
                className="flex items-center justify-between gap-2 "
                variant="secondary"
              >
                <p className="text-primary/70">
                  {getTimeElapsed(post.updatedDate)}
                </p>
              </Badge>
              <Badge
                className="flex items-center justify-between gap-2 bg-primary/40 "
                variant="secondary"
              >
                <p className="text-foreground">{post.tag}</p>
              </Badge>
            </div>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};
