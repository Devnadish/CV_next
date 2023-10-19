import {
  getAllBlog,
  showAllTag,
} from "@/components/pagecomponent/blog/sendFileToDb/_action";
import PageContainer from "@/components/shared/pagecontainer/PageContainer";
export const dynamics = "force-dynamic";
import ShowBlogs from "@/components/pagecomponent/blog/ShowBlogs";
import ShowTag from "@/components/pagecomponent/blog/ShowTag";
import BlogSearchInput from "@/components/pagecomponent/blog/BlogSearchInput";

async function Blogs({ params }) {
  const postData = getAllBlog(params.lang);
  const tagData = showAllTag();
  const [posts, tags] = await Promise.all([postData, tagData]);

  return (
    <>
      <PageContainer>
        <div className="flex flex-col justify-center items-center gap-2  ">
          <BlogSearchInput blogCont={posts.length} />
          <ShowTag tags={tags} blogCont={posts.length} />
          <ShowBlogs posts={posts} tags={tags} />
        </div>
      </PageContainer>
    </>
  );
}
export default Blogs;
