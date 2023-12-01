import React from 'react';
import PostCard from './PostCard';
import { PowerOff } from 'lucide-react';

function Online({ onlineData, lang }) {
    return (
        <div className='relative mt-8 flex h-full w-10/12  flex-col items-center justify-between gap-4 rounded-sm border border-primary-foreground/30  p-2 lg:w-1/2 '>
            <div className='absolute left-4 top-0 z-30 flex -translate-y-[70%] items-center gap-4 rounded bg-primary px-4'>
                <p>{onlineData?.length}</p> <p> Online</p>
            </div>
            <div className='flex  w-full  flex-col  items-center justify-between gap-4 overflow-auto'>
                {onlineData.map((post) => {
                    return (
                        <div
                            key={post.id}
                            className='flex w-full '
                            //  flex-col  w-full  gap-4 items-center justify-between overflow-auto"
                        >
                            <PostCard
                                action='offline'
                                id={post.id}
                                title={post.title}
                                actionName={<PowerOff className='h-4 w-4' />}
                                varient='destructive'
                                lang={lang}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Online;
