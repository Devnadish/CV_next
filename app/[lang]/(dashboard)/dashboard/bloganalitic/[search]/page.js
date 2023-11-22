import { getDataAfterSearch, ShowReusltBlog, NoDataToshow } from './export';
async function page({ params }) {
    const search = decodeURI(params.search);
    const posts = await getDataAfterSearch(search, params.lang);

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
