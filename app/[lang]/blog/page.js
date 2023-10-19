import {
  getAllBlog,
  showAllTag,
  showFreqBlog,
} from "@/components/pagecomponent/blog/sendFileToDb/_action";
import PageContainer from "@/components/shared/pagecontainer/PageContainer";
export const dynamics = "force-dynamic";
import ShowBlogs from "@/components/pagecomponent/blog/ShowBlogs";

async function Blogs({ params }) {
  const postData = getAllBlog(params.lang);
  const tagData = showAllTag();
  const freqData = showFreqBlog(params.lang);
  const [posts, tags, freq] = await Promise.all([postData, tagData, freqData]);
  return (
    <>
      <PageContainer>
        <ShowBlogs
          posts={posts}
          tags={tags}
          blogCont={posts.length}
          freq={freq}
        />
      </PageContainer>
    </>
  );
}
export default Blogs;
