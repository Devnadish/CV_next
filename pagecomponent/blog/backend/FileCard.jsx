'use client';
import { useState } from 'react';
import Modal from '@/components/shared/modal/Modal';

export const FileCard = ({
    slug,
    title,
    lang,
    isAvlibal,
    description,
    crDate,
    subtitle,
    htmlContent,
}) => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className='relative flex max-h-[230px] min-h-[230px] min-w-[350px]  max-w-[350px]  flex-col  items-start justify-center gap-1 overflow-auto rounded-lg border p-4'>
                <p className='font-normal'>File : {slug}</p>
                <p className='font-normal'>Title : {title}</p>
                <p className='font-normal'>subTitle : {subtitle}</p>
                <p className='font-normal'>description : {description}</p>
                <p className='font-normal'>Creation Date : {crDate}</p>
                <p className='font-normal'>Lang : {lang}</p>

                <p className='mt-1 flex font-normal'>
                    Exsit :
                    <span className='flex items-center justify-center rounded-lg bg-green-600 p-1 px-2 text-xs  text-foreground'>
                        {isAvlibal}
                    </span>
                </p>
                <button
                    type='button'
                    className='absolute  right-0  top-0 z-50 rounded-md bg-blue-500 px-4 py-1 text-foreground'
                    onClick={() => setOpen(true)}
                >
                    Preview
                </button>
            </div>
            {open ? (
                <div className='bg-green fixed w-full p-8'>
                    <Modal
                        open={open}
                        setOpen={setOpen}
                        title={`old Title : ${title}`}
                        Description='------------------------------------------------------'
                    >
                        <div
                            dangerouslySetInnerHTML={{ __html: htmlContent }}
                        />
                    </Modal>
                </div>
            ) : null}
        </>
    );
};
