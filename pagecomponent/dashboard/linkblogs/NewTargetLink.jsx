'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AddBlogLink } from '@/pagecomponent/dashboard/linkblogs/dbaction/_action';
function NewTargetLink({ id }) {
    const handleAddLink = async (data) => {
        const title = data.get('targetLink');
        await AddBlogLink(id, title);
    };
    return (
        <div className='flex w-full items-center justify-between gap-4'>
            <form action={handleAddLink} className='flex items-center gap-4'>
                <Input
                    type='text'
                    className='w-full'
                    placeholder='Add Label'
                    name='targetLink'
                />

                <Button
                    type='submit'
                    className='ml-2 px-2 py-1 text-sm  disabled:bg-red-400'
                    size='sm'
                >
                    +
                </Button>
            </form>
        </div>
    );
}

export default NewTargetLink;
