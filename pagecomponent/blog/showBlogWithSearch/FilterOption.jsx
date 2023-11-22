'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { useCallback, useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

function FilterOption({ pageCount, text }) {
    const [pageNo, setPageNo] = useState(1);
    const [bodyFlag, setBodyFlag] = useState(false);
    const [descriptionFlag, setDescriptionFlag] = useState(false);
    const [pagination, setPagination] = useState(true);
    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const pathname = usePathname();

    const deletePrams = useCallback(
        (name) => {
            const params = new URLSearchParams(searchParams);
            params.delete(name);
            return params.toString();
        },
        [searchParams],
    );

    const createQueryString = useCallback(
        (name, value) => {
            const params = new URLSearchParams(searchParams);
            params.set(name, value);
            return params.toString();
        },
        [searchParams],
    );
    //------------------------------------------------------------
    const handleSearchBody = (e, text) => {
        // replace(`${pathname}?${createQueryString('body', text)}`);
        if (e.target.checked && text !== undefined) {
            setBodyFlag(true);
            replace(`${pathname}?${createQueryString('body', text)}`);
        } else {
            setBodyFlag(false);
            replace(`${pathname}?${deletePrams('body')}`);
        }

        // e.target.checked
        //     ? replace(`${pathname}?${createQueryString('body', text)}`)
        //     : replace(`${pathname}?${deletePrams('body')}`);
    };
    //------------------------------------------------------------
    const handleSearchsubtitle = (e, text) => {
        if (e.target.checked && text !== undefined) {
            setDescriptionFlag(true);
            replace(`${pathname}?${createQueryString('description', text)}`);
        } else {
            setDescriptionFlag(false);
            replace(`${pathname}?${deletePrams('description')}`);
        }

        // e.target.checked && text
        //     ? replace(`${pathname}?${createQueryString('description', text)}`)
        //     : replace(`${pathname}?${deletePrams('description')}`);
    };
    //------------------------------------------------------------
    const handleClear = () => {
        let inputField = document.getElementById('searchFiled');
        inputField.value = '';

        let inputBody = document.getElementById('body');
        inputBody.checked = false;

        let inputsubtitle = document.getElementById('description');
        inputsubtitle.checked = false;
        replace(`/blog`);
    };
    //------------------------------------------------------------
    const handleNext = useDebouncedCallback(() => {
        const nextPageNo = pageNo + 1;
        setPageNo(nextPageNo);
        replace(`${pathname}?${createQueryString('page', pageNo)}`);
    }, 500);
    //------------------------------------------------------------
    const handlePrev = useDebouncedCallback(() => {
        const prevPageNo = pageNo - 1;
        setPageNo(prevPageNo);
        replace(`${pathname}?${createQueryString('page', pageNo)}`);
    }, 500);
    //------------------------------------------------------------
    const handlelast = useDebouncedCallback((pageCount) => {
        setPageNo(pageCount);
        replace(`${pathname}?${createQueryString('page', pageNo)}`);
    }, 500);
    //------------------------------------------------------------
    const handlefirst = useDebouncedCallback(() => {
        setPageNo(1);
        replace(`${pathname}?${createQueryString('page', pageNo)}`);
    }, 500);
    //------------------------------------------------------------
    const handPaganation = () => {
        setPagination(!pagination);
    };
    //------------------------------------------------------------
    useEffect(() => {
        replace(`${pathname}?${createQueryString('page', pageNo)}`);
    }, [pageNo, replace, pathname]);
    useEffect(() => {
        if (descriptionFlag) {
            replace(`${pathname}?${createQueryString('description', text)}`);
        }
        if (bodyFlag) {
            replace(`${pathname}?${createQueryString('body', text)}`);
        }
    }, [text]);

    return (
        <div className='flex w-full items-center gap-2 px-8 pb-2'>
            <div className='flex w-full items-center justify-between'>
                {/* fiter option */}
                <div className='items-cente flex gap-4'>
                    <p className='text-xs'>Include </p>
                    <div className='flex gap-1'>
                        <input
                            type='checkbox'
                            id='description'
                            onChange={(e) => handleSearchsubtitle(e, text)}
                        />
                        <label htmlFor='description' className='text-xs'>
                            Description
                        </label>
                    </div>

                    <div className='flex gap-1'>
                        <input
                            type='checkbox'
                            id='body'
                            onChange={(e) => handleSearchBody(e, text)}
                        />
                        <label htmlFor='body' className='text-xs'>
                            Body
                        </label>
                    </div>
                </div>
                {/* pagenation */}
                <div className='flex items-center gap-1'>
                    <div className='flex gap-2'>
                        <input
                            type='checkbox'
                            id='pagenationMode'
                            onChange={() => handPaganation()}
                            defaultChecked={pagination}
                        />
                        <label htmlFor='pagenationMode' className='text-xs'>
                            Pagenation
                        </label>
                    </div>
                    {pagination && (
                        <Pagenation
                            handleNext={handleNext}
                            handlePrev={handlePrev}
                            pageNo={pageNo}
                            pageCount={pageCount}
                            handlelast={handlelast}
                            handlefirst={handlefirst}
                        />
                    )}
                </div>
                {/* Clear button */}
                <div className='flex gap-4'>
                    <Button
                        size='xs'
                        type='button'
                        id='all'
                        onClick={handleClear}
                    >
                        Clear
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default FilterOption;

const Pagenation = ({
    handleNext,
    handlePrev,
    pageNo,
    pageCount,
    handlelast,
    handlefirst,
}) => {
    return (
        <div className='flex gap-4 self-end rounded-md border border-foreground/30 px-3 py-2 '>
            <Button
                size='xs'
                type='button'
                onClick={() => handlefirst()}
                className='bg-blue-500'
                disabled={pageNo <= 1 ? 1 : 0}
            >
                First
            </Button>
            <Button
                size='xs'
                type='button'
                onClick={() => handlePrev()}
                className='bg-blue-500'
                disabled={pageNo <= 1 ? 1 : 0}
            >
                Prev
            </Button>
            <Button
                size='xs'
                type='button'
                onClick={() => handleNext()}
                className='bg-blue-500'
                disabled={pageNo >= pageCount ? 1 : 0}
            >
                Next
            </Button>
            <Button
                size='xs'
                type='button'
                onClick={() => handlelast(pageCount)}
                className='bg-blue-500'
                disabled={pageNo >= pageCount ? 1 : 0}
            >
                Last
            </Button>
            <div className='flex gap-4 self-end text-foreground/40'>
                <div className='text-xs'>
                    <span>Pages :</span>
                    <span className='underline underline-offset-4'>
                        {pageCount}
                    </span>
                </div>

                <div className='text-xs '>
                    <span>Current :</span>
                    <span className='underline underline-offset-4'>
                        {pageNo}
                    </span>
                </div>
            </div>
        </div>
    );
};
