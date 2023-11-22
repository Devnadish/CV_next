import GoBack from '@/components/shared/goBack/GoBack';
import { getBlogByIdfromDb } from '@/pagecomponent/blog/dbAction/_action';

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
    const titleStyle = 'mb-1 h-fit w-fit rounded-md bg-red-500/20 px-4';
    const dataStyle =
        'relative flex h-16 w-full flex-col overflow-y-auto rounded-md border border-white/30 p-4';
    return (
        <div className='flex w-full flex-col items-center justify-center gap-4  self-center px-8 py-2'>
            <div className='flex w-full flex-col gap-8 rounded-md border border-white/50 p-4'>
                <div className='flex w-full gap-4'>
                    <div className='flex flex-1 flex-col'>
                        <p className={titleStyle}>Title</p>
                        <p className={dataStyle}>{post[0].title}</p>
                    </div>
                    <div className='flex flex-1 flex-col'>
                        <p className={titleStyle}>Tag</p>
                        <p className={dataStyle}>{post[0].tag}</p>
                    </div>
                    <div className='flex flex-1 flex-col '>
                        <p className={titleStyle}> Slug </p>
                        <p className={dataStyle}>{post[0].slug}</p>
                    </div>
                    <div className='flex flex-1 flex-col '>
                        <p className={titleStyle}> Language </p>
                        <p className={dataStyle}>
                            {post[0].language === 'en' ? 'English' : 'عربي'}
                        </p>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <p className={titleStyle}>description</p>
                    <p className={dataStyle}>{post[0].description}</p>
                </div>
            </div>

            <article className='font-tajawal prose mx-auto flex min-w-full items-center justify-center  rounded-lg bg-white px-4'>
                {post[0].body && (
                    <div dangerouslySetInnerHTML={{ __html: post[0].body }} />
                )}
            </article>
        </div>
    );
};
