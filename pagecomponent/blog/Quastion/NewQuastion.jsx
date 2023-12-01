'use client';
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { FaPaperPlane } from '@react-icons/all-files/fa/FaPaperPlane';
import { RadioTower } from 'lucide-react';
import { AddQuastion } from '@/pagecomponent/blog/Quastion/backend/quastion_action';
import { Button } from '@/components/ui/button';
import Modal from '@/components/shared/modal/Modal';
import { convertToSlug } from '@/lib/slug';

const NewQuastion = ({ postTitle, postID, userID, userAvatar }) => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className='min-w-full '>
                <Button
                    variant='red'
                    className='flex min-w-full items-center justify-evenly rounded-none '
                    onClick={() => setOpen(true)}
                >
                    Ask What You like ?
                    <RadioTower />
                </Button>

                <Modal
                    open={open}
                    setOpen={setOpen}
                    title={`${postTitle}`}
                    Description={`What is Your Quastion about ${postTitle} `}
                >
                    <InputQuastion
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

export default NewQuastion;

const InputQuastion = ({ postID, userID, setOpen, postTitle, userAvatar }) => {
    const [Quastion, setQuastion] = useState('');

    const handleAddQuastion = async () => {
        const slug = convertToSlug(Quastion);
        let userID = 'dummy';
        let userAvatar = 'dummy';
        console.log(slug, postID, postTitle, Quastion, userID, userAvatar);
        await AddQuastion(
            slug,
            postID,
            postTitle,
            Quastion,
            userID,
            userAvatar,
        );
        // TODO: add save msg here and review userId and avatar
        setQuastion('');
        setOpen(false);
    };

    return (
        <>
            <form
                id='quintionform'
                action={handleAddQuastion}
                className='flex w-full flex-col items-center justify-center gap-2 overflow-hidden px-2'
            >
                <Input
                    value={Quastion}
                    onChange={() => setQuastion(event.target.value)}
                    placeholder='Quastion Please ? '
                    className='my-2 h-24'
                    name='title'
                />
                {/* // TODO: add this msg to Comment and translate */}
                <Legal />
                <Button
                    size='sm'
                    className='flex  items-center gap-4  self-end'
                >
                    Agree and Submit <FaPaperPlane />
                </Button>
            </form>
        </>
    );
};

const Legal = () => {
    return (
        <ul className='list-disc px-4 py-2 text-sm capitalize text-foreground/50'>
            <li>
                The information provided in the Questions and Answers app is for
                general informational purposes only and should not be considered
                legal advice.
            </li>
            <li>
                Users should verify the accuracy and reliability of the
                information provided and independently verify it.
            </li>
            <li>
                management reserves the right to refuse to display any question
                or answer that conflicts with the site's policies, without the
                need to provide any reasons.
            </li>
            <li>
                By using this app, the user agrees that their use is subject to
                the terms and conditions of use and privacy policy.
            </li>
            <li>
                Questions submitted by users will be subject to review by the
                site management within{' '}
                <span className=' text-foreground/70'>48</span> hours.
            </li>
        </ul>
    );
};
