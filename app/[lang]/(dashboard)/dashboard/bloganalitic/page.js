import { getAllBlog } from "@/components/pagecomponent/blog/sendFileToDb/_action";
import ShowReusltBlog from "@/components/pagecomponent/dashboard/analitic/ShowReusltBlog";
import { showAllTag } from "@/components/pagecomponent/blog/sendFileToDb/_action";
async function page() {
  // // const posts = await getAllBlog();
  // const posts =   getAllBlog();
  // const tagData = showAllTag();

  // const [posts, tags] = await Promise.all([postData, tagData]);

  const postData = getAllBlog();
  const tagData = showAllTag();
  const [posts, tags] = await Promise.all([postData, tagData]);

  return (
    <>
      <ShowReusltBlog posts={posts} tags={tags} />
    </>
  );
}

export default page;
