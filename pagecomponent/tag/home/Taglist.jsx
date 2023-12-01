// "use client";
import React from 'react';
import { AiFillEdit } from '@react-icons/all-files/ai/AiFillEdit';
import DeleteWithAlertDialog from '@/components/shared/alertDialog/DeleteWithAlertDialog';
import Link from 'next/link';
import { MdDelete } from '@react-icons/all-files/md/MdDelete';
import { deleteTagAction } from '../backend/tag_actions';

const handleDelete = async (tagId, oldtagName) => {
    'use server';
    await deleteTagAction(tagId, oldtagName);
};
function Taglist({ tags }) {
    return (
        <div className='mx-auto my-auto  flex w-full  flex-wrap  justify-evenly gap-4 rounded-md'>
            {tags?.map((tag) => {
                return (
                    <React.Fragment key={tag.tagId}>
                        <TagCard tag={tag} handleDelete={handleDelete} />
                    </React.Fragment>
                );
            })}
        </div>
    );
}
export default Taglist;

const TagCard = ({ tag, handleDelete }) => {
    const boxBorder =
        tag.postCount !== 0 ? ' border-red-600' : 'border-green-600';
    return (
        <>
            <div
                className={`${boxBorder} flex w-full flex-col  gap-4 rounded-sm border p-4 md:max-w-[200px]`}
            >
                <p>{tag.tag}</p>
                <div className='flex items-center justify-between border-t  border-primary-foreground/50 py-2'>
                    <div className='text-xs'>
                        {tag.postCount === 0 ? (
                            <span className=' rounded-sm px-1  text-xs text-primary '>
                                Post Count:
                            </span>
                        ) : (
                            <span className='text-foreground/60e rounded-sm  px-1 text-xs '>
                                Post Count:
                            </span>
                        )}
                        <span className='ml-1 rounded-sm px-1  text-xs text-foreground '>
                            {tag.postCount}
                        </span>
                    </div>
                    <div className='flex gap-4'>
                        <Link
                            href={{
                                pathname: `/dashboard/tag/edittag/${tag.tagId}`,
                                query: { title: tag.title },
                            }}
                            prefetch={false}
                        >
                            <AiFillEdit className='text-blue-600' />
                        </Link>
                        <DeleteWithAlertDialog
                            id={tag.tagId}
                            oldTag={tag.tag}
                            action={handleDelete}
                            des={tag.title}
                            icon={<MdDelete className='text-red-400' />}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
