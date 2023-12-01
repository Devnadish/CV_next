'use client';

import { Button } from '@/components/ui/button';
import { decreaseBlogViewers, increaseBlogViewers } from './dbAction/_action';

function ViewerConter({ viewer, id }) {
    const plusOne = (id) => {
        increaseBlogViewers(id);
    };
    const minuesOne = (id) => {
        decreaseBlogViewers(id);
    };

    return (
        <div className='flex w-full items-center justify-evenly '>
            <Button
                onClick={() => plusOne(id)}
                className='flex h-8 w-8 items-center justify-center bg-purple-600 hover:bg-purple-400'
            >
                <p className='mb-[5px] text-2xl font-bold  text-foreground'>
                    +
                </p>
            </Button>
            <p className='self-center text-2xl font-bold text-green-600'>
                {viewer}
            </p>
            <Button
                disabled={viewer === 0}
                onClick={() => minuesOne(id)}
                className='flex h-8 w-8 items-center justify-center bg-destructive p-0 hover:bg-destructive disabled:bg-gray-700 '
            >
                <p className='mb-[5px] text-2xl font-bold  text-foreground'>
                    -
                </p>
            </Button>
        </div>
    );
}
export default ViewerConter;
