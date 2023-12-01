import React from 'react';

import { getTimeElapsed } from '@/lib/calculateTimeAndDate';
import { Badge } from '@/components/ui/badge';
import NewComment from '@/pagecomponent/blog/comments/NewComment';
import Avatar from '@/components/shared/avatar/Avatar';
import { getBlogComment } from '@/pagecomponent/blog/comments/backend/comments_action';
import {
    LikeComment,
    DisLikeComment,
} from '@/pagecomponent/blog/comments/ActionComment';
export const dynamic = 'force-dynamic';

async function Comments({ postSlug, posttitle, postID, comments }) {
    // const comments = await getBlogComment(postID);

    return (
        <div
            id='commentContainer'
            className='relative flex flex-col rounded-md border border-primary/40  pb-4 sm:w-[100%]'
        >
            <div className='sticky top-0 shadow-lg'>
                <NewComment
                    slug={postSlug}
                    postTitle={posttitle}
                    postID={postID}
                />
            </div>
            <ShowComments comments={comments} />
        </div>
    );
}

export default Comments;

const ShowComments = ({ comments }) => {
    return (
        <>
            <div className='mx-auto mt-2 flex flex-col gap-4'>
                {comments.map((comment, index) => {
                    let stl;
                    if (index % 2 === 0) {
                        stl = 'bg-gray-400  text-black';
                    } else {
                        stl = 'bg-gray-700  text-white';
                    }
                    return (
                        <div
                            key={comment.id}
                            className={`flex w-full flex-col gap-1 rounded-md  p-2 text-sm font-light ${stl}`}
                        >
                            <CommentHedear
                                avatar={comment.useerAvatar}
                                Udate={comment.updatedDate}
                            />
                            <CommentBody title={comment.title} />
                            <CommentFooter
                                like={comment.like}
                                dislike={comment.dislike}
                                id={comment.id}
                            />
                        </div>
                    );
                })}
            </div>
        </>
    );
};

const CommentHedear = ({ avatar, Udate }) => {
    return (
        <div className='flex items-center justify-between'>
            <Avatar src={avatar} width='30' height='30' />
            <div className='flex flex-col items-end gap-1'>
                <p className='text-xs'>w2.nadish@gmail.com</p>
                <p className='w-fit rounded-md bg-primary-foreground/10 px-2  text-xs text-foreground/60'>
                    {getTimeElapsed(Udate)}
                </p>
            </div>
        </div>
    );
};
const CommentBody = ({ title }) => {
    return (
        <>
            <div className='flex flex-col gap-2 border-y border-white/30'>
                <p className='p-2 font-semibold'>{title}</p>
            </div>
        </>
    );
};
const CommentFooter = ({ like, dislike, id }) => {
    return (
        <>
            <div className='flex items-center justify-around  gap-2 '>
                <div>
                    <LikeComment counter={like} id={id} />
                </div>
                <div>
                    <DisLikeComment counter={dislike} id={id} />
                </div>
            </div>
        </>
    );
};
