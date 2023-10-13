import { getAllBlog } from "@/components/pagecomponent/dashboard/linkblogs/dbaction/_action";
import { Separator } from "@/components/ui/separator";
import NewTargetLink from "@/components/pagecomponent/dashboard/linkblogs/NewTargetLink";

async function page({ params }) {
  const posts = await getAllBlog(params.lang);

  return (
    <>
      <h1 className="my-4 ml-4 text-2xl font-semibold">
        Blog Count:{posts.length}
      </h1>
      <div className="flex flex-wrap items-center justify-between w-full gap-4 px-4 py-4 rounded-lg bg-card text-foreground">
        {posts.map((post) => {
          let blogStyle;
          post.viewers === 0
            ? (blogStyle = "bg-gray-400 border-gray-400")
            : (blogStyle = "bg-green-600  border-green-600");

          let blogDivStyle;
          post.viewers === 0
            ? (blogDivStyle = "border-gray-400")
            : (blogDivStyle = "border-green-600");
          return (
            <BlogData
              key={post.id}
              blogStyle={blogStyle}
              blogDivStyle={blogDivStyle}
              post={post}
            />
          );
        })}
      </div>
    </>
  );
}

export default page;

function BlogData(props) {
  return (
    <>
      <div
        className={`${props.blogDivStyle} flex items-center justify-between gap-4 border max-w-[250px] text-sm bg-card text-foreground rounded-md  flex-wrap p-4`}
      >
        <div
          className={`${props.blogStyle}  rounded-full  items-center justify-center h-[25px] w-[25px] text-accent-foreground mansory-2`}
        >
          <p className="flex items-center justify-center w-full text-md text-accent-foreground">
            {props.post.viewers}
          </p>
        </div>
        <p>{props.post.title}</p>
        <p>{props.post.language}</p>
        <Separator />
        <NewTargetLink id={props.post.id} />
        <div className="w-full">
          {props.post.targetlinks.map((link) => {
            return <p>{link}</p>;
          })}
        </div>
      </div>
    </>
  );
}
