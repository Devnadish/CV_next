import Quastion from '@/pagecomponent/blog/Quastion/Quastion.jsx';
// import { getBlogQuastion } from '@/pagecomponent/blog/Quastion/backend/quastion_action';
import {
    PageContainer,
    Comments,
    getBlogByslugfromDb,
    getTimeElapsed,
    Blog,
    GETALLBLOG,
} from './export.js';
import ShowQuastion from '@/pagecomponent/blog/ShowQuastion.jsx';

export const generateStaticParams = async () => {
    const posts = await GETALLBLOG();
    return posts.map((post) => ({
        slug: post.slug,
    }));
};

const Page = async ({ params }) => {
    const { slug } = params;
    const decodedSlug = decodeURIComponent(slug);
    const postData = await getBlogByslugfromDb(decodedSlug);
    const postID = postData.post;
    const quastion = postData.quastions;
    const comments = postData.comments;

    // const QuastionData = await getBlogQuastion(postID);
    //   const [QuastionData, postID] = await Promise.all([QuastionDataDB(), postIDDB]);

    if (!postID) {
        // Handle the case when the postID is undefined or null
        return <div>Error: Post not found</div>;
    }
    return (
        <PageContainer>
            <div className='relative   flex w-full flex-col items-start justify-between gap-4 pt-4 sm:flex-row '>
                <div className='w-full  md:hidden'>
                    <ShowQuastion
                        postSlug={slug}
                        posttitle={postID.title}
                        postID={postID.id}
                        QuastionData={quastion}
                        comments={comments}
                    />
                </div>
                <div className='sticky left-0 order-3 hidden  h-[73vh] overflow-auto px-2 md:top-0 md:order-1 md:block   md:w-[20%]'>
                    <Quastion
                        postSlug={slug}
                        posttitle={postID.title}
                        postID={postID.id}
                        QuastionData={quastion}
                    />
                </div>
                <div className='order-1 md:order-2 md:w-[60%]'>
                    <Blog
                        body={postID.body}
                        title={postID.title}
                        crDate={getTimeElapsed(postID.createdDate)}
                        updDate={getTimeElapsed(postID.updatedDate)}
                    />
                </div>
                <div className='sticky right-0 order-2 hidden h-[73vh]   overflow-auto   md:top-0 md:order-3 md:block md:w-[20%]'>
                    <Comments
                        postSlug={slug}
                        posttitle={postID.title}
                        postID={postID.id}
                        comments={comments}
                    />
                </div>
            </div>
        </PageContainer>
    );
};

export default Page;
