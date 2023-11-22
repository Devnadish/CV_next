'use client'; // Error components must be Client Components

import { useEffect } from 'react';

export default function Error({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className='flex h-full w-full flex-col items-center justify-center gap-4'>
            <h2>Something went wrong!</h2>
            <h2>{error.message}</h2>
            <h2>{error.stack}</h2>
            <button
                className='rounded-md bg-blue-500 px-2 py-1 text-white'
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
            >
                Try again
            </button>
        </div>
    );
}
