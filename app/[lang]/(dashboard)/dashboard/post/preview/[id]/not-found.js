'use client';
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className='flex h-full w-full flex-col items-center justify-center gap-4 bg-destructive'>
            <h1 className='text-8xl'>Not Found</h1>
            <p>Some thing went rong</p>
            <p>Could not find requested resource</p>
            <Link href='/' prefetch={false}>
                <div className='rounded-md bg-destructive p-4  text-foreground ring-inset hover:shadow-xl hover:ring-2'>
                    Return Home
                </div>
            </Link>
        </div>
    );
}
