import React from 'react';

import { getTimeElapsed } from '@/lib/calculateTimeAndDate';
import { Badge } from '@/components/ui/badge';
import NewComment from '@/pagecomponent/blog/comments/NewComment';
import Avatar from '@/components/shared/avatar/Avatar';
import { getBlogComment } from '@/pagecomponent/blog/dbAction/_action';
import {
    LikeComment,
    DisLikeComment,
} from '@/pagecomponent/blog/comments/ActionComment';
export const dynamic = 'force-dynamic';

async function Comments({ postSlug, posttitle, postID }) {
    const comments = await getBlogComment(postID);

    return (
        <div
            id='commentContainer'
            className='flex flex-col rounded-md border border-primary/40  sm:w-[100%]'
        >
            <NewComment slug={postSlug} postTitle={posttitle} postID={postID} />
            <ShowComments comments={comments} />
        </div>
    );
}

export default Comments;

const ShowComments = ({ comments }) => {
    return (
        <>
            <div className='mx-auto '>
                {comments.map((comment) => {
                    return (
                        <div
                            key={comment.id}
                            className='flex items-start   gap-4'
                        >
                            <Avatar src={comment.useerAvatar} />
                            <div className='flex flex-col gap-4 border-b border-foreground/20 p-2 text-sm font-light'>
                                <p>{comment.title}</p>

                                <div className='flex w-full items-center justify-between'>
                                    <Badge
                                        className='flex items-center justify-between gap-2 '
                                        variant='secondary'
                                    >
                                        <p className='text-primary/70'>
                                            {getTimeElapsed(
                                                comment.updatedDate,
                                            )}
                                        </p>
                                    </Badge>
                                    <div className='flex items-center justify-between gap-2'>
                                        <div>
                                            <LikeComment
                                                counter={comment.like}
                                                id={comment.id}
                                            />
                                        </div>
                                        <div>
                                            <DisLikeComment
                                                counter={comment.dislike}
                                                id={comment.id}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};
