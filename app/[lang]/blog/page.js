import { getAllBlog } from "@/components/pagecomponent/blog/sendFileToDb/_action";
import PageContainer from "@/components/shared/pagecontainer/PageContainer";
export const dynamics = "force-dynamic";

import ShowBlogs from "@/components/pagecomponent/blog/ShowBlogs";

async function Blogs() {
  const posts = await getAllBlog();
  return (
    <>
      <PageContainer>
        <ShowBlogs posts={posts} />
      </PageContainer>
    </>
  );
}
export default Blogs;
