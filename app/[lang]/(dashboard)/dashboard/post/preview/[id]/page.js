import GoBack from '@/components/shared/goBack/GoBack';
import { getBlogByIdfromDb } from '@/pagecomponent/blog/backend/blog_action';
import { getTimeElapsed } from '@/lib/calculateTimeAndDate';

async function page({ params }) {
    const postData = await getBlogByIdfromDb(params.id);
    return (
        <div className='mt-2'>
            <div className='mb-2 flex w-full items-center justify-between gap-4 px-16 '>
                <GoBack />
                <p className='rounded-full bg-blue-500/60 px-4'>Preview Mode</p>
            </div>

            <ShowPage post={postData} />
        </div>
    );
}

export default page;

const ShowPage = ({ post }) => {
    const titleStyle = 'mb-1 h-fit w-fit rounded-md bg-destructive/20 px-4';
    const dataStyle =
        'relative flex h-16 w-full flex-col overflow-y-auto rounded-md border  border-primary-foreground/30 p-4';
    return (
        <div className='flex w-full flex-col items-center justify-center gap-4  self-center px-8 py-2'>
            <div className='flex w-full flex-wrap items-center  justify-between  gap-8 rounded-md border  border-primary-foreground/50 p-4'>
                <div className='flex w-full flex-wrap gap-4'>
                    <div className='flex w-full gap-4'>
                        <div className='flex  flex-1 flex-col'>
                            <p className={titleStyle}>Title</p>
                            <p className={dataStyle}>{post[0].title}</p>
                        </div>

                        <div className='flex  flex-1 flex-col'>
                            <p className={titleStyle}> Slug </p>
                            <p className={dataStyle}>{post[0].slug}</p>
                        </div>
                    </div>
                    <div className='flex w-full gap-4'>
                        <div className='flex flex-1 flex-col'>
                            <p className={titleStyle}>Tag</p>
                            <p className={dataStyle}>{post[0].tag}</p>
                        </div>

                        <div className='flex-2  flex flex-col'>
                            <p className={titleStyle}> Language </p>
                            <p className={dataStyle}>
                                {post[0].language === 'en' ? 'English' : 'عربي'}
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex w-full flex-col'>
                    <p className={titleStyle}>description</p>
                    <p className={dataStyle}>{post[0].description}</p>
                </div>
                <div className='flex w-full gap-4'>
                    <div className='flex w-full items-center justify-between'>
                        <p className='text-sm text-foreground/40'>
                            publish : {getTimeElapsed(post[0].createdDate)}
                        </p>
                        <p className='text-sm text-foreground/40'>
                            update At : {getTimeElapsed(post[0].updatedDate)}
                        </p>
                    </div>
                </div>
            </div>

            <article className='font-tajawal prose mx-auto flex min-w-full items-center justify-center  rounded-lg bg-primary-foreground px-4'>
                {post[0].body && (
                    <div dangerouslySetInnerHTML={{ __html: post[0].body }} />
                )}
            </article>
        </div>
    );
};
