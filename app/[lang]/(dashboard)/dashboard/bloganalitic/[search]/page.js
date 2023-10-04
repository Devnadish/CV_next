import { getDataAfterSearch } from "@/components/pagecomponent/dashboard/analitic/dbAction/_action";
import ShowReusltBlog from "@/components/pagecomponent/dashboard/analitic/ShowReusltBlog";
import NoDataToshow from "@/components/shared/nodatatoshow/NoDataToshow";

async function page({ params }) {
  const search = decodeURI(params.search);
  const posts = await getDataAfterSearch(search, "title");

  return (
    <>
      {posts.length === 0 ? (
        <NoDataToshow />
      ) : (
        <ShowReusltBlog search={search} posts={posts} />
      )}
    </>
  );
}

export default page;
