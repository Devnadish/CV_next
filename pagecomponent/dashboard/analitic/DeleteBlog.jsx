'use client';
import React from 'react';
import { MdDelete } from '@react-icons/all-files/md/MdDelete';
import { Button } from '@/components/ui/button';
import { deleteBlogFromDb } from '@/pagecomponent/dashboard/analitic/dbAction/_action';
function DeleteBlog({ id }) {
    const handleDelete = async () => {
        await deleteBlogFromDb(id);
    };

    return (
        <div>
            <Button size='sm' onClick={() => handleDelete()}>
                <MdDelete size={18} />
            </Button>
        </div>
    );
}

export default DeleteBlog;
