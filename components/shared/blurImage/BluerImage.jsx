'use client';
import Image from 'next/legacy/image';

import { useState } from 'react';

function cn(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function BlurImage({ image }) {
    const [isLoading, setLoading] = useState(true);

    return (
        <div
            style={{ letterSpacing: 0, wordSpacing: 0, fontSize: 0 }}
            className='aspect-w-1 xl:aspect-w-7 relative h-52 w-52 overflow-hidden rounded-lg border-4 border-white bg-gray-900 shadow-md'
        >
            <Image
                src={image}
                alt='Picture of the author'
                width={300}
                height={300}
                fill
                style={{ objectFit: 'contain' }}
                className={cn(
                    'duration-300 ease-in-out hover:opacity-75',
                    isLoading
                        ? 'scale-110 blur-2xl grayscale'
                        : 'scale-100 blur-0 grayscale-0',
                )}
                onLoadingComplete={() => setLoading(false)}
            />
        </div>
    );
}
