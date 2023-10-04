import { getAllBlog } from "@/components/pagecomponent/blog/sendFileToDb/_action";
import ShowReusltBlog from "@/components/pagecomponent/dashboard/analitic/ShowReusltBlog";
async function page() {
  const posts = await getAllBlog();
  return (
    <>
      <ShowReusltBlog posts={posts} />
    </>
  );
}

export default page;
