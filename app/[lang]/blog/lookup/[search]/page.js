import {
  getDataAfterSearch,
  showAllTag,
  showFreqBlog,
} from "@/components/pagecomponent/blog/sendFileToDb/_action";

import ShowBlogs from "@/components/pagecomponent/blog/ShowBlogs";
import PageContainer from "@/components/shared/pagecontainer/PageContainer";
import NoDataToshow from "@/components/shared/nodatatoshow/NoDataToshow";
async function page({ params }) {
  const search = decodeURI(params.search);
  const lookupposts = await getDataAfterSearch(search, "title", params.lang);
  const freqData = showFreqBlog(params.lang);
  const tagData = showAllTag();
  const [posts, tags, freq] = await Promise.all([
    lookupposts,
    tagData,
    freqData,
  ]);

  return (
    <>
      <PageContainer>
        {posts.length === 0 ? (
          <NoDataToshow />
        ) : (
          <ShowBlogs
            posts={posts}
            tags={tags}
            blogCont={posts.length}
            freq={freq}
          />
        )}
      </PageContainer>
    </>
  );
}

export default page;
