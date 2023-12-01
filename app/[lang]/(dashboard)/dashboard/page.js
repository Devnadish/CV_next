/*eslint no-undef: 0*/
import { getAllBlog } from '@/pagecomponent/blog/backend/blog_action';
import {
    Tag,
    PencilRuler,
    PenSquare,
    Link,
    Power,
    PowerOff,
    Languages,
} from 'lucide-react';
import {
    getVisitors,
    getOnlineQuastion,
    getOfflineQuastion,
    getOfflineBlog,
    getOnlineBlog,
    getComment,
    getLatestVisitor,
    getMostViewedPublishedBlogTitle,
} from '@/pagecomponent/dashboard/backend/actions';
import { getTimeElapsed } from '@/lib/calculateTimeAndDate';
import PageContainer from '@/components/shared/pagecontainer/PageContainer';
async function page() {
    const VisitorDB = getVisitors();
    const postsDB = getAllBlog();
    const onlineQstDB = getOnlineQuastion();
    const offlineQstDB = getOfflineQuastion();
    const onlineBlogDB = getOnlineBlog();
    const offlineBlogDB = getOfflineBlog();
    const commentsDB = getComment();
    const LastVisitDB = getLatestVisitor();
    const mostBlogViewersDB = getMostViewedPublishedBlogTitle();

    const [
        Visitor,
        posts,
        onlineQst,
        offlineQst,
        onlineBlog,
        offlineBlog,
        comments,
        LastVisit,
        mostBlogViewers,
    ] = await Promise.all([
        VisitorDB,
        postsDB,
        onlineQstDB,
        offlineQstDB,
        onlineBlogDB,
        offlineBlogDB,
        commentsDB,
        LastVisitDB,
        mostBlogViewersDB,
    ]);

    const arPosts = posts.filter((post) => post.language === 'ar');
    const enPosts = posts.filter((post) => post.language === 'en');

    return (
        <PageContainer>
            <div className='mt-8 grid  w-full grid-cols-1 place-items-stretch gap-6 p-4 md:grid-cols-2  lg:grid-cols-4'>
                <InfoDiv title={'OnLine Blog'} info={onlineBlog.length} />
                <InfoDiv title={'Pending Blog'} info={offlineBlog.length} hot />
                <InfoDiv title={'OnLine Quastion'} info={onlineQst.length} />
                <InfoDiv
                    title={'Pending Quastion'}
                    info={offlineQst.length}
                    hot
                />
                <InfoDiv title={'Visitor'} info={Visitor?.length} />
                <InfoDiv title={'TopBlog'} info={mostBlogViewers} col />
                <InfoDiv
                    title={'LastVisit'}
                    info={getTimeElapsed(LastVisit)}
                    col
                />
                <InfoDiv title={'Commects'} info={comments.length} />
            </div>

            <div className='flex  flex-col gap-4  overflow-hidden rounded-md border border-primary bg-primary-foreground/20 md:flex-row'>
                <div className='max-h-[50vh]  flex-1  overflow-auto  border  border-primary-foreground/20 p-4 '>
                    <AarabicBlog postData={arPosts} />
                </div>
                <div className='max-h-[50vh]  flex-1  overflow-auto  border  border-primary-foreground/20 p-4 '>
                    <EnglishBlog postData={enPosts} />
                </div>
            </div>
            {/* </div> */}
        </PageContainer>
    );
}

export default page;

const InfoDiv = ({ title, info, hot = false, col = false }) => {
    let flexDir = 'flex-row';
    if (col) {
        flexDir = 'flex-col';
    }
    let bgColor;
    if (hot) {
        bgColor = 'bg-destructive animate-pulse duration2000';
    }
    return (
        <div
            className={`flex ${flexDir} min-h-[50px]  items-center justify-center rounded-md border  border-primary-foreground/50  shadow-xl `}
        >
            <span className='flex   h-full  w-full items-center justify-center gap-2  bg-gray-200  px-4 text-sm text-gray-800'>
                {title}
            </span>
            <span
                className={`text-bg-400 flex  h-full items-center justify-center gap-2  px-4 text-sm ${bgColor}`}
            >
                {info}
            </span>
        </div>
    );
};

const AarabicBlog = ({ postData }) => {
    const spanStyle =
        'tex-xs flex items-center  gap-2 rounded-md border  border-primary-foreground/30 bg-accent p-1 px-2  text-foreground/50';

    return (
        <>
            <div className='flex w-full flex-col items-center justify-between  gap-4 rounded-lg   p-4 text-foreground '>
                <p className='flex h-11 w-full  items-center justify-between gap-4 bg-primary/80 pl-2  text-foreground '>
                    Arabic Blog
                    <span className='borde  flex h-12 w-[60px]  items-center justify-center  border-primary-foreground/40 bg-secondary/80 '>
                        {postData.length}
                    </span>
                </p>
                {postData?.map((post) => {
                    let blogStyle;
                    post.viewers === 0
                        ? (blogStyle =
                              'bg-destructive border-gray-400 text-destructive-foreground font-bold')
                        : (blogStyle =
                              'bg-primary   border-green-600 text-primary-foreground font-bold');

                    let blogDivStyle;
                    post.viewers === 0
                        ? (blogDivStyle = 'border-destructive')
                        : (blogDivStyle = 'border-primary');
                    return (
                        <div
                            key={post.id}
                            className={`flex w-full flex-col  flex-wrap items-center justify-between gap-2 rounded-md border bg-card px-4  py-2 text-sm text-foreground ${blogDivStyle}`}
                        >
                            <div className='flex w-full flex-col gap-3'>
                                <div className='flex min-h-[40px] items-center justify-between border-b   border-primary-foreground/30 bg-primary/20 px-2   '>
                                    <p>{post.title}</p>
                                    <p
                                        className={`${blogStyle}  h-full rounded-md px-2 py-1 text-xs text-accent-foreground`}
                                    >
                                        {post.viewers}
                                    </p>
                                </div>
                                <div className='flex flex-wrap items-center  justify-around gap-2'>
                                    <span className={spanStyle}>
                                        <PenSquare className='h-4 w-4' />
                                        {getTimeElapsed(post.createdDate)}
                                    </span>
                                    <span className={spanStyle}>
                                        <PencilRuler className='h-4 w-4' />
                                        {getTimeElapsed(post.updatedDate)}
                                    </span>
                                    <span className={spanStyle}>
                                        <Tag className='h-4 w-4' /> {post.tag}
                                    </span>
                                    <span className={spanStyle}>
                                        <Link className='h-4 w-4' /> {post.slug}
                                    </span>
                                    <span className={spanStyle}>
                                        {post.published ? (
                                            <>
                                                <span className=' text-foreground'>
                                                    {' '}
                                                    ONLINE{' '}
                                                </span>
                                                <Power className='h-4 w-4  text-foreground' />
                                            </>
                                        ) : (
                                            <>
                                                <PowerOff className='h-4 w-4 text-red-400' />
                                                <span className=' text-red-400 '>
                                                    {' '}
                                                    OFFLINE{' '}
                                                </span>
                                            </>
                                        )}
                                    </span>
                                    <span className={spanStyle}>
                                        <Languages className='h-4 w-4' />
                                        {post.language === 'ar'
                                            ? 'عربي'
                                            : 'English'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

const EnglishBlog = ({ postData }) => {
    const spanStyle =
        'tex-xs flex items-center  gap-2 rounded-md border  border-primary-foreground/30 bg-accent p-1 px-2  text-foreground/50';

    return (
        <>
            <div className='flex w-full flex-col items-center justify-between  gap-4 rounded-lg bg-secondary/10 p-4 text-foreground '>
                <p className='flex h-11 w-full  items-center justify-between gap-4 bg-primary/80 pl-2  text-primary-foreground '>
                    English Blog
                    <span className='borde  flex h-12 w-[60px]  items-center justify-center  border-primary-foreground/40 bg-primary/80 '>
                        {postData.length}
                    </span>
                </p>
                {postData?.map((post) => {
                    let blogStyle;
                    post.viewers === 0
                        ? (blogStyle =
                              'bg-destructive border-gray-400 text-destructive-foreground font-bold')
                        : (blogStyle =
                              'bg-primary   border-green-600 text-primary-foreground font-bold');

                    let blogDivStyle;
                    post.viewers === 0
                        ? (blogDivStyle = 'border-destructive')
                        : (blogDivStyle = 'border-primary');
                    return (
                        <div
                            key={post.id}
                            className={`flex w-full flex-col  flex-wrap items-center justify-between gap-2 rounded-md border bg-card px-4  py-2 text-sm text-foreground ${blogDivStyle}`}
                        >
                            <div className='flex w-full flex-col gap-3'>
                                <div className='flex min-h-[40px] items-center justify-between border-b   border-primary-foreground/30 bg-primary/20 px-2   '>
                                    <p>{post.title}</p>
                                    <p
                                        className={`${blogStyle}  rounded-md px-2 py-1 text-xs text-accent-foreground`}
                                    >
                                        {post.viewers}
                                    </p>
                                </div>
                                <div className='flex flex-wrap items-center  justify-around gap-2'>
                                    <span className={spanStyle}>
                                        <PenSquare className='h-4 w-4' />
                                        {getTimeElapsed(post.createdDate)}
                                    </span>
                                    <span className={spanStyle}>
                                        <PencilRuler className='h-4 w-4' />
                                        {getTimeElapsed(post.updatedDate)}
                                    </span>
                                    <span className={spanStyle}>
                                        <Tag className='h-4 w-4' /> {post.tag}
                                    </span>
                                    <span className={spanStyle}>
                                        <Link className='h-4 w-4' /> {post.slug}
                                    </span>
                                    <span className={spanStyle}>
                                        {post.published ? (
                                            <>
                                                <span className=' text-foreground'>
                                                    {' '}
                                                    ONLINE{' '}
                                                </span>
                                                <Power className='h-4 w-4  text-foreground' />
                                            </>
                                        ) : (
                                            <>
                                                <PowerOff className='h-4 w-4 text-red-400' />
                                                <span className=' text-red-400 '>
                                                    {' '}
                                                    OFFLINE{' '}
                                                </span>
                                            </>
                                        )}
                                    </span>
                                    <span className={spanStyle}>
                                        <Languages className='h-4 w-4' />
                                        {post.language === 'ar'
                                            ? 'عربي'
                                            : 'English'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};
