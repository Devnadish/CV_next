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

function ShowSide({ tags, freq }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div
                id='toggleButton'
                className='mt-0 flex   items-center shadow-md sm:hidden md:mt-4 md:w-11/12 '
            >
                <Button size='xs' onClick={() => setOpen(true)}>
                    <AiOutlineMenu className='text-white' size={15} />
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
                        <SheetTitle>Select</SheetTitle>

                        <SheetDescription></SheetDescription>
                    </SheetHeader>
                    <div
                        className='flex flex-col gap-8'
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
