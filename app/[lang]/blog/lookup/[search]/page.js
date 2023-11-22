/*eslint no-undef: 0*/
import {
    getDataAfterSearch,
    showAllTag,
    showFreqBlog,
    PageContainer,
    NoDataToshow,
    BlogsWithSearch,
} from './export.js';

export const dynamic = 'force-dynamic';
async function page(props) {
    const search = decodeURI(props.params.search);
    const q = props.searchParams?.q || '';
    const lookupposts = getDataAfterSearch(search, props.params.lang, q);
    const freqData = showFreqBlog(props.params.lang);
    const tagData = showAllTag();
    const [posts, tags, freq] = await Promise.all([
        lookupposts,
        tagData,
        freqData,
    ]);

    return (
        <PageContainer>
            {posts.length === 0 ? (
                <NoDataToshow />
            ) : (
                <BlogsWithSearch
                    posts={posts}
                    tags={tags}
                    blogCont={posts.length}
                    freq={freq}
                    lang={props.params.lang}
                />
            )}
        </PageContainer>
    );
}

export default page;
