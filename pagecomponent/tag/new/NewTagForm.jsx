'use client';
import React from 'react';
import { AiOutlinePlus } from '@react-icons/all-files/ai/AiOutlinePlus';
import { useRef } from 'react';
import { createTagAction } from '../backend/tag_actions';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';

const NewTagForm = () => {
    const formRef = useRef(null);
    const { toast } = useToast();

    async function action(data) {
        const title = data.get('title');
        if (typeof title !== 'string' || !title) {
            return;
        }
        const isSave = await createTagAction(title);
        if (isSave) {
            formRef.current?.reset();
            toast({
                variant: 'blue',
                description: 'New Tag Add Succufully...',
            });
        } else {
            toast({
                variant: 'red',
                description: 'Dublication Not Allowed !!.',
            });
        }
    }

    return (
        <>
            <h2 className=' font-medium'>Create a New Tag</h2>
            <form
                ref={formRef}
                action={action}
                className='flex items-center justify-between gap-4'
                id='tagForm'
            >
                <input
                    type='text'
                    name='title'
                    className='h-9 rounded border border-slate-400 px-2 py-0.5'
                />

                <Button
                    type='submit'
                    className='ml-2 px-2 py-1 text-sm  disabled:bg-destructive'
                    size='sm'
                >
                    <AiOutlinePlus size={'20px'} />
                </Button>
            </form>
        </>
    );
};

export default NewTagForm;
