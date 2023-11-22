'use client';
import React, { useTransition } from 'react';
import { deleteTagAction } from '../actions/_actions';
import { MdDelete } from '@react-icons/all-files/md/MdDelete';

function RemoveTage({ tagId }) {
    const [isPending, startTransition] = useTransition();
    const handleClick = async (tagId) => {
        await deleteTagAction(tagId);
    };
    return (
        <div>
            <button
                disabled={isPending}
                onClick={() => startTransition(() => handleClick(tagId))}
            >
                <MdDelete className='text-red-600' />
            </button>
        </div>
    );
}

export default RemoveTage;
