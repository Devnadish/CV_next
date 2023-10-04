import { getAllBlog } from "@/components/pagecomponent/blog/sendFileToDb/_action";
async function page() {
  const posts = await getAllBlog();

  return (
    <>
      <h1 className="text-2xl font-semibold my-4 ml-4">
        Blog Count:{posts.length}
      </h1>
      <div className="flex items-center justify-between w-full gap-4 px-4 py-4 bg-card text-foreground rounded-lg  flex-wrap">
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
            <div
              key={post.id}
              className={`${blogDivStyle} flex items-center justify-between gap-4 border text-sm bg-card text-foreground rounded-md  flex-wrap p-4`}
            >
              <p
                className={`${blogStyle}  px-2 py-1 rounded-md text-accent-foreground`}
              >
                {post.viewers}
              </p>
              <p>{post.title}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default page;
