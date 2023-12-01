'use client';
import React, { useState } from 'react';
import { AiOutlineMenu } from '@react-icons/all-files/ai/AiOutlineMenu';
import { Button } from '@/components/ui/button';
import Tags from '@/pagecomponent/blog/tag/Tags';
import Freqantly from '@/pagecomponent/blog/showBlogWithSearch/Freqantly';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
} from '@/components/ui/sheet';
import Link from 'next/link';

function ShowSide({ tags, freq }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div
                id='toggleButton'
                className='mt-0 flex items-center  shadow-md md:mt-4  md:hidden md:w-11/12 '
            >
                <Button size='xs' onClick={() => setOpen(true)}>
                    <AiOutlineMenu className=' text-foreground' size={15} />
                </Button>
            </div>
            {open ? (
                <Drawer open={open} setOpen={setOpen} tags={tags} freq={freq} />
            ) : null}
        </>
    );
}

export default ShowSide;

const Drawer = ({ open, setOpen, tags, freq }) => {
    return (
        <>
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetContent>
                    <SheetHeader>
                        {/* <SheetTitle>Select</SheetTitle>

                        <SheetDescription>

                        </SheetDescription> */}
                        <Link
                            className='mt-1 w-10/12 self-center rounded-md bg-destructive p-2 text-center hover:bg-destructive/50'
                            href='/dashboard/post/new'
                            as='/dashboard/post/new'
                        >
                            New Post
                        </Link>
                    </SheetHeader>
                    <div
                        className='mt-8 flex flex-col gap-8'
                        onClick={() => setOpen(false)}
                    >
                        <Tags tags={tags} />
                        <Freqantly freq={freq} />
                    </div>
                </SheetContent>
            </Sheet>
        </>
    );
};
