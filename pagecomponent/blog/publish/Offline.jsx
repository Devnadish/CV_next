import React from 'react';
import PostCard from './PostCard';
import { Power } from 'lucide-react';
function Offline({ offlineData, lang }) {
    return (
        <div className='relative mt-8 flex h-full w-1/2 flex-col items-center justify-between gap-4 rounded-sm border border-white/30 p-4 '>
            <div className='absolute left-4 top-0 z-30 flex -translate-y-[70%] items-center gap-4 rounded bg-red-500 px-4'>
                <p>{offlineData.length}</p> <p> Offline</p>
            </div>
            <div className='flex  w-full  flex-col  items-center justify-between gap-4 overflow-auto'>
                {offlineData.map((post) => {
                    return (
                        <div
                            key={post.id}
                            className='flex w-full '
                            //  flex-col  w-full  gap-4 items-center justify-between overflow-auto"
                        >
                            <PostCard
                                action='online'
                                id={post.id}
                                title={post.title}
                                actionName={<Power className='h-4 w-4' />}
                                lang={lang}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Offline;
