// "use client";
import Image from 'next/image';
import Link from 'next/link';
const Logo = () => {
    return (
        <>
            <Link
                href={`/`}
                prefetch={false}
                className='rounded-sm border-b-2 border-foreground/40 p-2 px-4 capitalize  text-foreground hover:bg-primary'
            >
                <div className=' relative flex h-[50px] w-[60px] items-center justify-center rounded-lg border border-green-300 bg-primary-foreground/50  p-4 shadow-2xl'>
                    <Image
                        src={'/assets/logo.png'}
                        alt={'خالد دبش khalid nadish مطور مبرمج مصمم مواقع'}
                        fill
                        className='p-1'
                        priority
                    />
                </div>
            </Link>
        </>
    );
};
export default Logo;
