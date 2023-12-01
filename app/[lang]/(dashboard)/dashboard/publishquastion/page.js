import React from 'react';
import { getunPublishQuastion } from '@/pagecomponent/blog/Quastion/backend/quastion_action';
import PageContainer from '@/components/shared/pagecontainer/PageContainer';
import { getTimeElapsed } from '@/lib/calculateTimeAndDate';
import OnOrOff from '@/pagecomponent/blog/Quastion/publish/OnOrOff';
// TODO: add option to close the replay
async function page() {
    const Qst = await getunPublishQuastion();
    return (
        <PageContainer>
            <div className='bg-secondary/300 mt-16  flex h-[80%]  w-full flex-col flex-wrap items-start justify-between gap-4 overflow-hidden rounded-md border border-primary p-4 shadow-lg lg:flex-row'>
                <div className='relative h-full  flex-1 overflow-y-auto rounded-sm border  border-primary-foreground/40 '>
                    <p className='sticky top-0 z-50 flex h-10 items-center justify-center  bg-green-600 text-center shadow-lg'>
                        OnLine Quastion
                    </p>
                    <OnlineQ onlineData={Qst.onlineQuestions} />
                </div>
                <div className='relative h-full   w-full flex-1 overflow-y-auto rounded-sm  border border-primary-foreground/40 '>
                    <p className='sticky top-0 z-50 flex h-10 items-center justify-center  bg-orange-600  text-center shadow-lg'>
                        OffLine Quastion
                    </p>
                    <OffLineQ OfflineData={Qst.offQuestions} />
                </div>
            </div>
        </PageContainer>
    );
}

export default page;

const OnlineQ = ({ onlineData }) => {
    return (
        <>
            <div className='flex   w-full flex-col gap-4 bg-primary/10 p-4'>
                {onlineData.map((el, index) => {
                    let stl;
                    if (index % 2 === 0) {
                        stl = 'bg-primary/20  text-foreground';
                    } else {
                        stl = 'bg-primary/50  text-foreground';
                    }
                    return (
                        <div
                            key={el.id}
                            className={`flex min-h-[20px] w-full flex-col gap-1  rounded-md  text-sm font-light ${stl} border border-primary`}
                        >
                            <p className='flex min-h-[30px] items-center bg-foreground/20 px-2'>
                                {el.postTitle}
                            </p>
                            <p className='p-2'>{el.Question}</p>
                            <div className='flex items-center justify-between border-t  border-primary-foreground/20 px-2 py-1'>
                                <OnOrOff
                                    published={el.published}
                                    Qid={el.id}
                                    postID={el.postID}
                                />
                                <p className='  text-foreground/50'>
                                    {getTimeElapsed(el.updatedDate)}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};
const OffLineQ = ({ OfflineData }) => {
    return (
        <>
            <div className='flex   w-full flex-col gap-4 bg-destructive/10 p-4'>
                {OfflineData.map((el, index) => {
                    let stl;
                    if (index % 2 === 0) {
                        stl = 'bg-destructive/20  text-foreground';
                    } else {
                        stl = 'bg-destructive/40  text-foreground';
                    }
                    return (
                        <div
                            key={el.id}
                            className={` flex min-h-[20px] w-full flex-col gap-1  rounded-md  text-sm font-light ${stl} border border-primary`}
                        >
                            <p className='flex min-h-[30px] items-center bg-foreground/20 px-2'>
                                {el.postTitle}
                            </p>
                            <p className='p-2'>{el.Question}</p>
                            <div className='flex items-center justify-between border-t  border-primary-foreground/20 px-2 py-1'>
                                <OnOrOff
                                    published={el.published}
                                    Qid={el.id}
                                    postID={el.postID}
                                />
                                <p className='  text-foreground/50'>
                                    {getTimeElapsed(el.updatedDate)}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};
