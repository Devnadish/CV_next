import Link from 'next/link';
const ShowHint = ({ icon, txt, link, title }) => {
    return (
        <>
            <Link
                className='flex w-[300px]  flex-col items-center  justify-start  gap-1 rounded-md border border-primary/30 py-4 text-sm   hover:shadow-xl '
                href={link}
                prefetch={false}
            >
                <div className='h-[70px]'>{icon}</div>
                <p className='text-md font-tajawal font-semibold   text-foreground'>
                    {title}
                </p>
                <p className='text-md font-tajawal   line-clamp-4 p-4 font-light hover:line-clamp-none'>
                    {txt}
                </p>
            </Link>
        </>
    );
};
export default ShowHint;
