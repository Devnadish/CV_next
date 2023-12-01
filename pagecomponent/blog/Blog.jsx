import dynamic from 'next/dynamic';
// import { DOMPurify } from 'dompurify';
const GoBack = dynamic(() => import('@/components/shared/goBack/GoBack'));
export function Blog({ body, title, crDate, updDate }) {
    // const sanitizedBody = DOMPurify.sanitize(body);
    return (
        <div className='mx-auto flex w-full flex-col justify-between   px-4'>
            <div className='flex flex-col items-center justify-between  rounded-t-md  bg-primary/70 px-4 shadow-xl'>
                <BlogHead crDate={crDate} updDate={updDate} title={title} />
            </div>
            <article className='font-tajawal prose mx-auto flex min-w-[100%] items-center justify-center rounded-sm bg-primary/20 p-4 text-foreground'>
                <div dangerouslySetInnerHTML={{ __html: body }} />
            </article>
        </div>
    );
}
const BlogHead = ({ crDate, updDate, Author = 'w2.nadish.com', title }) => {
    return (
        <>
            <div className='flex w-full  items-center  justify-between p-1'>
                <GoBack />

                <div className='flex items-center gap-4 '>
                    <span className='rounded bg-accent/50 px-2 text-xs text-white/30'>
                        Author : {Author}
                    </span>
                    <span className='rounded bg-accent/50 px-2 text-xs text-white/30'>
                        Last update : {updDate}
                    </span>
                    <span className='rounded bg-accent/50 px-2 text-xs text-white/30'>
                        Create at :{crDate}
                    </span>
                </div>
            </div>
            <h1 className='p-2 text-3xl capitalize text-foreground '>
                {title}
            </h1>
        </>
    );
};
