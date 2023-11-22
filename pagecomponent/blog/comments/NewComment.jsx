'use client';
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { FaPaperPlane } from '@react-icons/all-files/fa/FaPaperPlane';
import { AiOutlineComment } from '@react-icons/all-files/ai/AiOutlineComment';
import { AddComment } from '@/pagecomponent/blog/dbAction/_action';
import { Button } from '@/components/ui/button';
import Modal from '@/components/shared/modal/Modal';

const NewComment = ({ postTitle, postID, userID, userAvatar }) => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className='min-w-full'>
                <Button
                    //   size="sm"
                    variant='blue'
                    className='flex min-w-full items-center justify-evenly rounded-none '
                    onClick={() => setOpen(true)}
                >
                    Write Your Comment
                    <AiOutlineComment className='h-6 w-6' />
                </Button>

                <Modal
                    open={open}
                    setOpen={setOpen}
                    title={`${postTitle}`}
                    Description={`Wait for comments about ${postTitle} `}
                >
                    <InputComment
                        postID={postID}
                        userID={userID}
                        setOpen={setOpen}
                        postTitle={postTitle}
                        userAvatar={userAvatar}
                    />
                </Modal>
            </div>
        </>
    );
};

export default NewComment;

const InputComment = ({ postID, userID, setOpen, postTitle, useAvatar }) => {
    const [comment, setComment] = useState('');

    const handleAddComment = async () => {
        await AddComment(comment, postID, postTitle, userID, useAvatar);

        setComment('');
        setOpen(false);
    };

    return (
        <>
            <form
                action={handleAddComment}
                className='flex w-full items-center justify-center gap-2 px-2'
            >
                <Input
                    value={comment}
                    onChange={() => setComment(event.target.value)}
                    placeholder='what you think !! '
                    className='my-2'
                    name='title'
                />
                <Button size='sm'>
                    <FaPaperPlane />
                </Button>
            </form>
        </>
    );
};
