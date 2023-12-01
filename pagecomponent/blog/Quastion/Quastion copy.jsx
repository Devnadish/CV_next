import { MessagesSquare } from 'lucide-react';
import { getTimeElapsed } from '@/lib/calculateTimeAndDate';
import Avatar from '@/components/shared/avatar/Avatar';
import { getBlogQuastion } from '@/pagecomponent/blog/Quastion/backend/quastion_action';

import NewQuastion from './NewQuastion';
import { Button } from '@/components/ui/button';
import Replay from './Replay';

async function Quastion({ postSlug, posttitle, postID }) {
    const QuastionData = await getBlogQuastion(postID);

    return (
        <div
            id='commentContainer'
            className='flex flex-col rounded-md border border-primary/40  pb-4 sm:w-[100%]'
        >
            <NewQuastion
                slug={postSlug}
                postTitle={posttitle}
                postID={postID}
            />
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
                        stl = 'bg-primary-foreground/20  text-foreground';
                    } else {
                        stl = 'bg-primary-foreground/30  text-foreground';
                    }
                    return (
                        <>
                            <div
                                key={Question.id}
                                className={`flex w-full flex-col gap-1 rounded-md  p-2 text-sm font-light ${stl}`}
                            >
                                <div className='flex items-center gap-2'>
                                    <Avatar src={''} width='25' height='25' />
                                    <p className='text-xs text-foreground/40 '>
                                        w2.nadish@gmail.com
                                    </p>
                                </div>
                                <p>{Question.Question}</p>

                                <div className='mb-2 mt-2 flex items-center justify-end border-b  border-primary-foreground/40 py-2'>
                                    <p className=' text-xs  text-foreground/40'>
                                        {getTimeElapsed(Question.updatedDate)}
                                    </p>
                                </div>
                                <div className='flex items-center justify-between gap-4'>
                                    <div className='flex  w-full items-center justify-between  gap-2  shadow-xl'>
                                        <Button className='border-1 flex  w-full items-center justify-between  bg-primary-foreground/30  '>
                                            <MessagesSquare className='text-md  text-foreground ' />
                                            <span className='text-md  text-foreground '>
                                                5
                                            </span>
                                        </Button>
                                    </div>
                                    <Replay QuestionId={Question.slug} />
                                </div>
                                <div className='flex  items-center justify-between'></div>
                            </div>
                        </>
                    );
                })}
            </div>
        </>
    );
};
