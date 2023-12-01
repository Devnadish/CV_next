'use client';
import { useState } from 'react';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import Quastion from '@/pagecomponent/blog/Quastion/Quastion.jsx';
import Comments from '@/pagecomponent/blog/comments/Comments';

function ShowQuestion({ postSlug, posttitle, postID, QuastionData, comments }) {
    const [Qisopen, setQIsOpen] = useState(false);
    const [Cisopen, setCIsOpen] = useState(false);
    return (
        <div className='flex w-full items-center justify-between'>
            <Button onClick={() => setCIsOpen(true)} size='sm'>
                Comments
            </Button>
            <Button onClick={() => setQIsOpen(true)} size='sm'>
                Question
            </Button>
            {Qisopen && (
                <QuastionSide
                    Qisopen={Qisopen}
                    setQIsOpen={setQIsOpen}
                    postSlug={postSlug}
                    posttitle={posttitle}
                    postID={postID}
                    QuastionData={QuastionData}
                />
            )}

            <Sheet open={Cisopen} onOpenChange={setCIsOpen}>
                <SheetContent className='w-full overflow-auto'>
                    <SheetHeader>
                        <SheetTitle>
                            <div className='border-b-2  border-primary-foreground/40 py-2 text-foreground'>
                                <p className='text-foreground/70'>Comments's</p>
                            </div>
                        </SheetTitle>
                    </SheetHeader>
                    <div className='p-4'>
                        <Comments
                            postSlug={postSlug}
                            posttitle={posttitle}
                            postID={postID}
                            comments={comments}
                        />
                    </div>
                    {/* <MenuX menuItem={menuItem} isOpen={isOpen} /> */}
                    {/* <MenuItems menuItem={menuItem} isOpen={isOpen} setIsOpen={setIsOpen} lang={lang} /> */}
                </SheetContent>
            </Sheet>
        </div>
    );
}

export default ShowQuestion;

const QuastionSide = ({
    Qisopen,
    setQIsOpen,
    postSlug,
    posttitle,
    postID,
    QuastionData,
}) => {
    return (
        <>
            {' '}
            <Sheet open={Qisopen} onOpenChange={setQIsOpen}>
                <SheetContent className='w-full overflow-auto'>
                    <SheetHeader>
                        <SheetTitle>
                            <div className='border-b-2  border-primary-foreground/40 py-2 text-foreground'>
                                <p className='text-foreground/70'>Quastion's</p>
                            </div>
                        </SheetTitle>
                    </SheetHeader>
                    <div className='p-4'>
                        <Quastion
                            postSlug={postSlug}
                            posttitle={posttitle}
                            postID={postID}
                            QuastionData={QuastionData}
                        />
                    </div>
                </SheetContent>
            </Sheet>
        </>
    );
};
