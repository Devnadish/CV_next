'use client';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import '@/styles/styles.css';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { Textarea } from '@/components/ui/textarea';
import { Eraser } from 'lucide-react';
import { View } from 'lucide-react';
import { Save } from 'lucide-react';
import { convertToSlug } from '@/lib/slug';
import { useToast } from '@/components/ui/use-toast';
import {
    createFileAction,
    updatePostAction,
} from '@/pagecomponent/blog/dbAction/_action';
import DeleteWithAlertDialog from '@/components/shared/alertDialog/DeleteWithAlertDialog';
import GoBack from '@/components/shared/goBack/GoBack';
import { v4 as uuidv4 } from 'uuid';

const ReactQuill = dynamic(
    async () => {
        const { default: RQ } = await import('react-quill');
        return ({ forwardedRef, ...props }) => (
            <RQ ref={forwardedRef} {...props} />
        );
    },
    {
        ssr: false,
    },
);

import 'react-quill/dist/quill.snow.css';
import '@/styles/styles.css';

const toolbar = {
    container: [
        ['bold', 'italic', 'underline'],
        [{ header: 1 }, { header: 2 }],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ indent: '-1' }, { indent: '+1' }],
        [{ align: [] }],
        ['image', 'video', 'blockquote'],
        ['clean'],
        [{ color: [] }, { background: [] }],
    ],
};

export default function Editor({
    tagData,
    lang,
    updateMode = false,
    updpost = null,
}) {
    // const language = lang;
    const [postId, setPostId] = useState('');
    const [tagElement, setTagElement] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [mounted, setMounted] = useState(false);
    const [isSave, setIsSave] = useState(true);
    const [slug, setSlug] = useState('');
    const [data, setData] = useState(
        typeof window !== 'undefined' ? localStorage.getItem('innerHTML') : '',
    );
    const [language, setLanguage] = useState(lang);

    const { toast } = useToast();

    const SAVEPOST = async () => {
        await createFileAction(
            slug,
            title,
            language,
            description,
            data,
            tagElement,
        );

        toast({
            variant: 'green',
            title: 'Saved Success',
            description: (
                <p className='my-4 w-full rounded-lg border border-green-700  bg-primary/80 p-2 text-center'>
                    Saved Successfully Waiting For Admin To Approve And{' '}
                    <span className='text-red-800 '>Puplish </span> It..
                </p>
            ),
        });
    };
    const UPDATEPOST = async () => {
        await updatePostAction(
            postId,
            slug,
            title,
            language,
            description,
            data,
            tagElement,
        );

        toast({
            variant: 'red',
            title: 'Update Success',
            description: (
                <p className='my-4 w-full rounded-lg border border-green-700  bg-primary/80 p-2 text-center'>
                    Saved Successfully Waiting For Admin To Approve And{' '}
                    <span className='text-red-800 '>Puplish </span> It..
                </p>
            ),
        });
    };

    const handleSavePost = async () => {
        updateMode ? await UPDATEPOST() : await SAVEPOST();
    };

    useEffect(() => {
        if (title && description && tagElement && data) {
            setIsSave(false);
        } else {
            setIsSave(true);
        }
    }, [title, description, tagElement, data]);

    useEffect(() => {
        const generatedSlug = title ? convertToSlug(title) : undefined;
        setSlug(generatedSlug);
    }, [title]);

    useEffect(() => {
        setMounted(true);
        if (updateMode) {
            setPostId(updpost[0].id);
            setTagElement(updpost[0].tag);
            setTitle(updpost[0].title);
            setDescription(updpost[0].description);
            setSlug(updpost[0].slug);
            setData(updpost[0].body);
        } else {
            let previewPost =
                typeof window !== 'undefined'
                    ? localStorage.getItem('previewPost')
                    : '';
            const post = JSON.parse(previewPost);
            setTagElement(post?.tagElement);
            setTitle(post?.title);
            setDescription(post?.description);
            setSlug(post?.slug);
            setData(post?.document);
        }
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div className='flex w-full flex-col items-center  px-4'>
            {updateMode ? (
                <div className='mb-4 flex w-[90%]  items-center  gap-4  bg-white/10 px-4 '>
                    <GoBack />
                    <p className='flex   h-[40px] w-full items-center justify-center rounded-sm  px-4 text-xl'>
                        Update Post
                    </p>
                </div>
            ) : (
                <p className='mt-2 w-fit rounded-full bg-green-700 px-4'>
                    New Post
                </p>
            )}

            <div className='flex w-full flex-col items-start justify-evenly gap-4 md:flex-row'>
                {/* title with slug */}
                <div className='flex w-full flex-col gap-2 md:w-1/4'>
                    <Textarea
                        // className="md:w-1/4 "
                        name='titleName'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        id='title'
                        placeholder='Post Title'
                        rows='2'
                    />
                    <p className='text-xs'>
                        <span className='mr-2 rounded-sm  bg-primary/50 px-2 py-0.5 font-semibold '>
                            slug
                        </span>{' '}
                        {slug}
                    </p>
                </div>
                {/* description with button */}
                <div className='flex w-full flex-col gap-4'>
                    <Textarea
                        className='md:w-full'
                        name='subtitle'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        id='subtitle'
                        placeholder='Description'
                        rows='2'
                    />
                    <div className='flex flex-col gap-4 md:flex-row'>
                        <Button
                            className='w-full disabled:bg-red-500 disabled:text-white'
                            disabled={isSave ? 1 : 0}
                            onClick={handleSavePost}
                            variant={updateMode ? 'red' : 'green'}
                        >
                            {updateMode ? <p>Update Post</p> : <p>New Post</p>}
                        </Button>
                    </div>
                </div>
                {/* tag with lang */}
                <div className='flex h-full w-full  flex-col gap-4 rounded-md  border border-foreground/20 px-4 py-2  md:w-1/4'>
                    <SelectTag
                        tagElement={tagElement}
                        setTagElement={setTagElement}
                        tagData={tagData}
                    />

                    <div className='flex items-center justify-evenly space-x-4'>
                        <label className='inline-flex items-center'>
                            <input
                                type='radio'
                                name='language'
                                value='en'
                                checked={language === 'en'}
                                className='form-radio h-4 w-4 text-indigo-600'
                                onChange={() => setLanguage('en')}
                            />
                            <span className='ml-2  text-foreground'>
                                English
                            </span>
                        </label>
                        <label className='inline-flex items-center'>
                            <input
                                type='radio'
                                name='language'
                                value='ar'
                                checked={language === 'ar'}
                                className='form-radio h-4 w-4 text-indigo-600'
                                onChange={() => setLanguage('ar')}
                            />
                            <span className='ml-2 text-foreground'>عربي</span>
                        </label>
                    </div>
                </div>
            </div>
            {/* editor */}
            <div className='p-4'>
                {mounted && (
                    <div className='flex items-center justify-end'>
                        {/* <EditorToolbar /> */}
                        <ActionButton
                            setData={setData}
                            data={data}
                            title={title}
                            tagElement={tagElement}
                            description={description}
                            slug={slug}
                        />
                    </div>
                )}

                <ReactQuill
                    className='container'
                    theme='snow'
                    value={data}
                    onChange={setData}
                    placeholder='write post...'
                    modules={{ toolbar: toolbar }}
                    style={{ width: '100%' }}
                    // modules={modules}
                    // formats={formats}
                />
            </div>
        </div>
    );
}
const SelectTag = ({ tagElement, setTagElement, tagData }) => {
    return (
        <>
            <select
                // name="tagsName"
                id='tagsID'
                value={tagElement}
                className='mt-2 h-6 w-full  outline outline-1 outline-offset-4 outline-white/50    '
                onChange={(e) => setTagElement(e.target.value)}
            >
                <option value=''>select Tag</option>
                {tagData?.map((tag) => {
                    return (
                        <option key={tag.tagId} value={tag.tag}>
                            {tag.tag}
                        </option>
                    );
                })}
            </select>
        </>
    );
};

const ActionButton = ({
    setData,
    data,
    title,
    tagElement,
    description,
    slug,
}) => {
    const { toast } = useToast();
    const router = useRouter();
    const handlePreview = () => {
        if (
            data === '' ||
            data === undefined ||
            data === null ||
            data === '<p><br></p>'
        ) {
            toast({
                variant: 'red',
                title: title,
                description: "Save Your Post First Can't preview Empty Post",
            });
        } else {
            router.push(`/dashboard/post/preview?a=1`);
        }

        // router.push({ href: `/dashboard/post/preview?from=local` });
    };
    const handleClear = () => {
        setData('');
        localStorage.setItem('innerHTML', '');
    };
    const handleSave = () => {
        if (
            data === '' ||
            data === undefined ||
            data === null ||
            data === '<p><br></p>'
        ) {
            toast({
                variant: 'red',
                title: title,
                description: "Can't save Empty Post",
            });
        } else {
            // localStorage.setItem("innerHTML", data);
            const previewPost = {
                title: title,
                slug: slug,
                description: description,
                tagElement: tagElement,
                document: data,
            };

            window.localStorage.setItem(
                'previewPost',
                JSON.stringify(previewPost),
            );

            // localStorage.setItem("innerHTML", {,,, , });
            toast({
                variant: 'blue',
                title: title,
                description: 'Temporary Saved Successfully',
            });
        }
    };

    return (
        <div className='mr-4 flex items-center  justify-around'>
            <p className='mb-2 self-end rounded-md bg-background/70 px-2 text-xs'>
                Save Your Post To continue Later...
            </p>
            <Button
                className='text-blue-400'
                variant='ghost'
                onClick={handleSave}
            >
                <Save />
            </Button>
            <DeleteWithAlertDialog
                action={handleClear}
                des={
                    <p className='my-4 rounded-lg border border-white/30 p-2 text-center'>
                        Your Post Will Be{' '}
                        <span className='text-red-500 '>Deleted</span>
                    </p>
                }
                icon={<Eraser className='text-red-400' />}
            />
            <Button variant='ghost' onClick={handlePreview}>
                <View />
            </Button>
        </div>
    );
};
