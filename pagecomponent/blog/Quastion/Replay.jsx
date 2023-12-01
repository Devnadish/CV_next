'use client';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Reply, Smile, Frown } from 'lucide-react';
import Link from 'next/link';
import { getReplays } from '@/pagecomponent/blog/Quastion/backend/quastion_action';
import { getTimeElapsed } from '@/lib/calculateTimeAndDate';

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from '@/components/ui/sheet';
function Replay({ QuestionId, lang = 'en', replay, QuastionTitle, QID }) {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [replayData, setReplayData] = useState([]);
    const handlereplay = async (QuestionId) => {
        setOpen(true);
        const data = await getReplays(QID);
        setReplayData(data);
        console.log({ replayData });
        console.log({ data });
    };

    return (
        <div className='shadow-xle flex w-full items-center justify-between gap-4  rounded-md p-2 '>
            {replay.length !== 0 ? (
                <Button
                    className='text-centerd flex w-[30%] items-center  gap-2 rounded-md bg-primary p-2 shadow-xl '
                    onClick={() => {
                        handlereplay(QID);
                    }}
                >
                    <Smile size={24} className='text-white' />
                    <p className='text-md font-semibold  text-white'>
                        {replay.length}
                    </p>
                </Button>
            ) : (
                <Frown
                    size={24}
                    className='h-8 w-8 rounded-md bg-white text-red-800'
                />
            )}
            <Link
                className='flex w-full items-center justify-center gap-2  rounded-md bg-destructive  p-2 text-center font-medium text-foreground shadow-xl hover:bg-destructive/50 '
                href={`/${lang}/blog/replay/${QuestionId}`}
                as={`/${lang}/blog/replay/${QuestionId}`}
            >
                <span>Replay</span>
                <Reply />
            </Link>
            {open && (
                <DisplayReplay
                    open={open}
                    setOpen={setOpen}
                    QuastionTitle={QuastionTitle}
                    replayData={replayData}
                />
            )}
        </div>
    );
}

export default Replay;

const DisplayReplay = ({ open, setOpen, QuastionTitle, replayData }) => {
    return (
        <>
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetContent className='w-full overflow-auto'>
                    <SheetHeader>
                        <SheetTitle>
                            <div className='border-b-2  border-primary-foreground/40 py-2 text-foreground'>
                                <p className='text-foreground/70'>
                                    {QuastionTitle}
                                </p>
                            </div>
                        </SheetTitle>
                    </SheetHeader>
                    <div className='flex flex-col gap-4  p-4'>
                        {replayData.map((el) => {
                            return (
                                <>
                                    <div className='rounded-md border p-2'>
                                        <div className='flex items-center justify-between text-sm'>
                                            <p className='rounded-md bg-white/20 px-3 text-white/40'>
                                                {el.userID}
                                            </p>
                                            <p className='rounded-md bg-white/20 px-3 text-white/40'>
                                                {getTimeElapsed(el.updatedDate)}
                                            </p>
                                        </div>
                                        <p className='p-2 text-foreground/80'>
                                            {el.Answer}
                                        </p>
                                    </div>
                                </>
                            );
                        })}
                    </div>
                </SheetContent>
            </Sheet>
        </>
    );
};
