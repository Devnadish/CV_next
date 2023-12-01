'use client';
import React, { useState } from 'react';
import { AiFillEdit } from '@react-icons/all-files/ai/AiFillEdit';
import Modal from '@/components/shared/modal/Modal';
import { Button } from '@/components/ui/button';
import { UpdateTitleForm } from './UpdateTitleForm';
import { AiFillEye } from '@react-icons/all-files/ai/AiFillEye';

function EditTitle({ id, title, description, tags }) {
    const [open, setOpen] = useState(false);
    return (
        <div className='flex w-full items-center justify-start gap-4 pt-4 '>
            <Button size='xs' variant='grayGhost' onClick={() => setOpen(true)}>
                <AiFillEdit className=' text-foreground' />
            </Button>
            <Button size='xs' variant='grayGhost'>
                <AiFillEye />
            </Button>

            {open ? (
                <Modal
                    open={open}
                    setOpen={setOpen}
                    title={`old Title : ${title}`}
                    Description='This action cannot be undone. This will permanently Updatedy Your.'
                >
                    <UpdateTitleForm
                        title={title}
                        description={description}
                        id={id}
                        setOpen={setOpen}
                        tags={tags}
                    />
                </Modal>
            ) : null}
        </div>
    );
}

export default EditTitle;
