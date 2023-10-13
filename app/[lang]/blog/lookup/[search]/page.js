import { getDataAfterSearch } from "@/components/pagecomponent/dashboard/analitic/dbAction/_action";
import ShowBlogs from "@/components/pagecomponent/blog/ShowBlogs";
import PageContainer from "@/components/shared/pagecontainer/PageContainer";
import NoDataToshow from "@/components/shared/nodatatoshow/NoDataToshow";
async function page({ params }) {
  const search = decodeURI(params.search);
  const posts = await getDataAfterSearch(search, "title", params.lang);

  return (
    <>
      <PageContainer>
        {posts.length === 0 ? <NoDataToshow /> : <ShowBlogs posts={posts} />}
      </PageContainer>
    </>
  );
}

export default page;
