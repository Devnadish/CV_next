'use client';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { createFileAction, deleteAllPOst } from './_action';
import { countLanguage } from './helper';
import { convertToSlug } from '@/lib/slug';

export const UploadFiles = ({ files, lang }) => {
    const [fileName, setFileName] = useState('');
    const [count, setCount] = useState(files.length);
    const startAction = async () => {
        const btnAction = document.getElementById('upload');
        btnAction.disabled = true;
        btnAction.textContent = 'Uploading...';
        for (const file of files) {
            // let lang = file.slug.slice(0, 2);
            let lang = file.slug.slice(0, 2);
            let slugify = lang + ' ' + file.title;
            let slug = convertToSlug(slugify);
            let title = file.title;
            let description = file.description;
            let body = file.htmlContent;
            let subtitle = file.subtitle;
            let crdate = file.crDate;

            const fileCreate = await createFileAction(
                slug,
                title,
                lang,
                description,
                body,
                subtitle,
                crdate,
            );
            setCount((pre) => pre - 1);
            setFileName(fileCreate);
        }
        setCount(0);
        btnAction.textContent = 'Files Uploaded Done Refresh Page';
    };
    useEffect(() => {
        const btnAction = document.getElementById('upload');
        count === 0
            ? (btnAction.disabled = true)
            : (btnAction.disabled = false);
        count === 0
            ? (btnAction.textContent = 'No Files To Upload')
            : (btnAction.textContent = 'UPLOAD New Files...');
    }, [count]);
    const deleteAll = async () => {
        await deleteAllPOst();
    };
    return (
        <>
            <div className='w-full flex-col items-center justify-between rounded-t-md bg-purple-500 px-4 py-2 md:flex-row '>
                <div className='mb-2 flex items-start justify-evenly text-sm'>
                    <p className='flex items-center justify-center rounded-lg bg-green-600 p-1 px-2 text-xs text-white'>
                        Blogs : {files.length}
                    </p>
                    <p className='flex items-center justify-center rounded-lg bg-green-600 p-1 px-2 text-xs text-white'>
                        En/B : {countLanguage(files, 'en')}
                    </p>
                    <p className='flex items-center justify-center rounded-lg bg-green-600 p-1 px-2 text-xs text-white'>
                        Ar/B : {countLanguage(files, 'ar')}
                    </p>
                    <button
                        className='rounded-lg border bg-red-500 px-8 '
                        onClick={deleteAll}
                    >
                        del
                    </button>
                    {/* </div> */}
                </div>
                <div className='flex flex-col items-center justify-between rounded-md bg-black/30 p-2 text-white shadow-lg'>
                    <Button
                        id='upload'
                        disabled={count === 0}
                        onClick={() => startAction()}
                    >
                        Upload
                    </Button>
                    <div className='flex w-full items-center justify-between gap-4'>
                        <p>Files : {count}</p>
                        {fileName && <p>File Name : {fileName}</p>}
                    </div>
                </div>
            </div>
        </>
    );
};
