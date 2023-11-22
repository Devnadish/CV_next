'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';
import { FileEdit } from 'lucide-react';
import Link from 'next/link';

import {
    publishPost,
    unPublishPost,
} from '@/pagecomponent/blog/dbAction/_action';

function PostCard({ title, actionName, varient, id, action, lang }) {
    const handleAction = async (id) => {
        action === 'offline' ? await unPublishPost(id) : await publishPost(id);
    };

    return (
        <div
            id='cardContainer'
            className='flex w-full  items-center justify-between rounded-md border border-primary/30 px-4 py-2 shadow-lg'
        >
            <p>{title}</p>

            <div className='flex flex-col items-center gap-1 '>
                <Button
                    onClick={() => {
                        handleAction(id);
                    }}
                    className='px-8 py-1'
                    variant={varient}
                >
                    {actionName}
                </Button>
                <div className='mt-2 flex w-full place-items-center justify-around'>
                    <Link
                        href={`/${lang}/dashboard/post/preview/${id}`}
                        as={`/${lang}/dashboard/post/preview/${id}`}
                        className='rounded border border-foreground/50 p-1'
                        prefetch={false}
                    >
                        <Eye className='h-4 w-4 font-light' />
                    </Link>

                    <Link
                        href={`/${lang}/dashboard/post/update/${id}`}
                        as={`/${lang}/dashboard/post/update/${id}`}
                        className='rounded border border-foreground/50 p-1'
                        prefetch={false}
                    >
                        <FileEdit className='h-4 w-4 text-red-500' />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default PostCard;
