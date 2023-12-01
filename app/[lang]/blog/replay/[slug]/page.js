import { PageContainer } from '../../export';
import Avatar from '@/components/shared/avatar/Avatar';
import { getTimeElapsed } from '@/lib/calculateTimeAndDate';
import { MessageSquare } from 'lucide-react';
import { getBlogQuastionBySlug } from '@/pagecomponent/blog/Quastion/backend/quastion_action';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import AddReplayComponent from '@/pagecomponent/blog/Quastion/replay/AddReplayComponent';

const Page = async ({ params }) => {
    const QuestionDb = await getBlogQuastionBySlug(params.slug);
    return (
        <PageContainer>
            <div className='relative  flex  w-full flex-col items-start  gap-4 rounded-md md:w-11/12 md:flex-row'>
                <div className='flex w-full flex-col gap-4   bg-muted p-4 shadow-2xl   md:sticky md:top-0 md:w-[40%]'>
                    <QuestionComponent
                        // TODO: get userId And Avatar from db
                        Question={QuestionDb.question[0]}
                    />
                    <AddReplayComponent Question={QuestionDb.question[0]?.id} />
                </div>
                <div className='w-full md:w-[60%]'>
                    <AnswersComponent answers={QuestionDb.answer} />
                </div>
            </div>
        </PageContainer>
    );
};

export default Page;

const QuestionComponent = ({ Question }) => {
    return (
        <div className='flex w-full flex-col shadow-xl'>
            <Accordion type='single' collapsible>
                <AccordionItem value='item-1'>
                    <div className='flex w-full  items-center justify-between '>
                        <div className='flex gap-2 rounded px-2 text-sm font-light'>
                            <MessageSquare className=' text-foreground/30' />
                            <p className='text-sm  text-foreground/30'>
                                {getTimeElapsed(Question.updatedDate)}
                            </p>
                        </div>
                        <div className='flex items-center gap-2 rounded px-2 text-sm font-light'>
                            <Avatar src={''} width='20' height='20' />
                            <p className='text-xs'>{Question.userID}</p>
                        </div>
                    </div>
                    <AccordionTrigger className='w-full'>
                        <div className='flex flex-col items-start justify-start gap-2'>
                            <p className='px-4'>{Question.Question}</p>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className='flex h-12 items-center justify-between border-b border-primary-foreground/20  bg-primary/20 px-4 shadow-2xl'>
                            <p className='border-b'>{Question.postTitle}</p>
                            <div className='flex items-center gap-2  '>
                                <Avatar src={''} width='20' height='20' />
                                <p className='text-xs'>w.nadish@gmail.com</p>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

const AnswersComponent = ({ answers }) => {
    return (
        <div className='flex w-full  flex-col  gap-4 p-4 md:w-11/12 '>
            {answers.map((txt, index) => {
                return (
                    <div
                        className='flex  flex-col rounded-md border  border-primary/40'
                        key={index + txt.text}
                    >
                        <div className='flex h-12 items-center justify-between bg-black/20 px-4 text-xs'>
                            <div className='flex items-center gap-2  '>
                                <Avatar src={''} width='25' height='25' />
                                <p>{txt.userID}</p>
                            </div>
                            <p>{getTimeElapsed(txt.updatedDate)}</p>
                        </div>
                        <p className='overflow-auto p-4  text-foreground'>
                            {txt.Answer}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};
// const AddReplayComponent = ({ Question }) => {
//     const handleAddReplay = async (data) => {
//         'use server';
//         const answer = data.get('answerData');
//         const userID = 'dummy';
//         const userAvatar = 'dummy';
//         const Doit = await AddReplay(answer, Question, userID, userAvatar);
//     };
//     return (
//         <form
//             action={handleAddReplay}
//             className='flex w-full flex-col  items-center gap-4 px-4'
//         >
//             <Textarea
//                 placeholder='Write Your Answer Plaease ?'
//                 name='answerData'
//                 className='resize-none'
//                 rows='10'
//             />
//             <div className='flex  w-full items-center justify-between'>
//                 <Button type='button' variant='outline' className='self-end'>
//                     clear
//                 </Button>
//                 <Button type='submit' variant='outline' className='self-end'>
//                     Submit
//                 </Button>
//             </div>
//         </form>
//     );
// };
