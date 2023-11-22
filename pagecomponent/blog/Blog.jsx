import dynamic from 'next/dynamic';
// import { DOMPurify } from 'dompurify';
const GoBack = dynamic(() => import('@/components/shared/goBack/GoBack'));
export function Blog({ body, title, crDate, updDate }) {
    // const sanitizedBody = DOMPurify.sanitize(body);
    return (
        <div className='mx-auto w-full justify-between   px-4'>
            <div className='flex items-center justify-between rounded-t-md   bg-primary/70 px-4 shadow-xl'>
                <GoBack />
                <h1 className='p-2 text-2xl capitalize text-foreground '>
                    {title}
                </h1>
                <div className='flex w-[160px]  flex-col items-end justify-between gap-2 '>
                    <div className='text-forground flex w-full items-center  justify-between text-xs'>
                        <span>Create at</span>
                        <span className='rounded bg-green-400 px-2 text-black'>
                            {crDate}
                        </span>
                    </div>
                    <div className='text-forground flex w-full items-center  justify-between text-xs'>
                        <span>Last update</span>
                        <span className='rounded bg-green-400 px-2 text-black'>
                            {updDate}
                        </span>
                    </div>
                </div>
            </div>
            <article className='font-tajawal prose mx-auto flex min-w-[100%] items-center justify-center rounded-sm bg-primary/20 p-4 text-foreground'>
                {/* <Markdown>{data.body}</Markdown> */}
                <div dangerouslySetInnerHTML={{ __html: body }} />
            </article>
        </div>
    );
}
