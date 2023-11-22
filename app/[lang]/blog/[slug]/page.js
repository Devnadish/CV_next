import {
    PageContainer,
    Comments,
    getBlogByslugfromDb,
    getTimeElapsed,
    Blog,
    GETALLBLOG,
} from './export.js';

export const generateStaticParams = async () => {
    const posts = await GETALLBLOG();
    return posts.map((post) => ({
        slug: post.slug,
    }));
};

const Page = async ({ params }) => {
    const { slug } = params;
    const decodedSlug = decodeURIComponent(slug);
    const postID = await getBlogByslugfromDb(decodedSlug);
    if (!postID) {
        // Handle the case when the postID is undefined or null
        return <div>Error: Post not found</div>;
    }
    return (
        <>
            <PageContainer>
                <div className='relative mt-4 flex w-full flex-col items-start justify-between gap-4 sm:flex-row '>
                    <div className='w-[75%]'>
                        <Blog
                            body={postID.body}
                            title={postID.title}
                            crDate={getTimeElapsed(postID.createdDate)}
                            updDate={getTimeElapsed(postID.updatedDate)}
                        />
                    </div>
                    <div className='sticky right-0   top-0 h-[73vh] w-[25%] overflow-auto px-2'>
                        <Comments
                            postSlug={slug}
                            posttitle={postID.title}
                            postID={postID.id}
                        />
                    </div>
                </div>

                {/* <div className="flex flex-col sm:flex-row justify-between items-start w-full mt-4 gap-4">


        </div> */}
            </PageContainer>
        </>
    );
};

export default Page;
