'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { AiOutlineLike } from '@react-icons/all-files/ai/AiOutlineLike';
import { AiOutlineDislike } from '@react-icons/all-files/ai/AiOutlineDislike';
import {
    addCommentCounter,
    minusCommentCounter,
} from '@/pagecomponent/blog/comments/backend/comments_action';

export const LikeComment = ({ counter, id }) => {
    const handleAddComment = async () => {
        await addCommentCounter(id);
    };
    return (
        <Button
            size='xs'
            className='flex items-center gap-3 text-foreground'
            onClick={handleAddComment}
        >
            <AiOutlineLike />
            {counter}
        </Button>
    );
};
// -----------------
export const DisLikeComment = ({ counter, id }) => {
    const handleminusComment = async () => {
        await minusCommentCounter(id);
    };

    return (
        <Button
            variant='destructive'
            size='xs'
            className='flex items-center gap-3 text-foreground'
            onClick={handleminusComment}
        >
            <AiOutlineDislike />
            {counter}
        </Button>
    );
};
