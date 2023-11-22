/*eslint no-undef: 0*/
import { getAllBlog, ShowReusltBlog, showAllTag } from './export';
async function page({ params }) {
    const postData = getAllBlog(params.lang);
    const tagData = showAllTag();
    const [posts, tags] = await Promise.all([postData, tagData]);

    return (
        <>
            <ShowReusltBlog posts={posts} tags={tags} lang={params.lang} />
        </>
    );
}

export default page;
