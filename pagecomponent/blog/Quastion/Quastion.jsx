import { MessagesSquare } from 'lucide-react';
import { getTimeElapsed } from '@/lib/calculateTimeAndDate';
import Avatar from '@/components/shared/avatar/Avatar';
import { getBlogQuastion } from '@/pagecomponent/blog/Quastion/backend/quastion_action';

import NewQuastion from './NewQuastion';
import { Button } from '@/components/ui/button';
import Replay from './Replay';
import Link from 'next/link';

async function Quastion({ postSlug, posttitle, postID, QuastionData }) {
    // const QuastionData = await getBlogQuastion(postID);

    return (
        <div
            id='commentContainer'
            className='relative flex flex-col rounded-md border border-primary/40  pb-4 sm:w-[100%]'
        >
            <div className='sticky top-0 shadow-lg'>
                <NewQuastion
                    slug={postSlug}
                    postTitle={posttitle}
                    postID={postID}
                />
            </div>
            <ShowQuastion Questions={QuastionData} />
        </div>
    );
}

export default Quastion;

const ShowQuastion = ({ Questions }) => {
    let stl;
    return (
        <>
            <div className='mx-auto mt-2 flex flex-col gap-4'>
                {Questions.map((Question, index) => {
                    let stl;
                    if (index % 2 === 0) {
                        stl = 'bg-gray-400  text-black';
                    } else {
                        stl = 'bg-gray-700  text-white';
                    }
                    return (
                        <div
                            key={Question.id}
                            className={`flex w-full flex-col gap-1 rounded-md  p-2 text-sm font-light ${stl}`}
                        >
                            <QuestionHeader uDate={Question.updatedDate} />
                            <QuestionBody title={Question.Question} />
                            <Replay
                                QuestionId={Question.slug}
                                replay={Question.answersID}
                                QuastionTitle={Question.Question}
                                QID={Question.id}
                            />
                        </div>
                    );
                })}
            </div>
        </>
    );
};

const QuestionHeader = ({ uDate }) => {
    return (
        <>
            <div className='flex items-center justify-between  '>
                <Avatar src={''} width='25' height='25' />
                <div className='flex flex-col  items-end'>
                    <p className='text-xs'>w2.nadish@gmail.com</p>
                    <p className='w-fit rounded-md bg-primary-foreground/10 px-2  text-xs text-foreground/60'>
                        {getTimeElapsed(uDate)}
                    </p>
                </div>
            </div>
        </>
    );
};

const QuestionBody = ({ title }) => {
    return (
        <div className='flex flex-col gap-2 border-y border-white/30'>
            <p className='p-2 font-semibold'>{title}</p>
        </div>
    );
};
