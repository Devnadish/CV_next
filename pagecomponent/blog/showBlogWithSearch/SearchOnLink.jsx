'use client';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { MdSearch } from '@react-icons/all-files/md/MdSearch';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import ShowSide from '@/pagecomponent/blog/showBlogWithSearch/ShowSide';
import FilterOption from '@/pagecomponent/blog/showBlogWithSearch/FilterOption';

const SearchOnLink = ({
    placeholder = 'Search In Blog',
    tags,
    freq,
    blogCont,
}) => {
    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const pathname = usePathname();
    const [searchText, setSearchText] = useState();

    const handleSearch = useDebouncedCallback((e) => {
        const params = new URLSearchParams(searchParams);
        if (e.target.value) {
            e.target.value.length > 2 &&
                params.set('text', encodeURIComponent(e.target.value));
        } else {
            params.delete('text');
        }
        setSearchText(e.target.value);
        replace(`${pathname}?${params}`);
        // replace(`/${lang}/blog/lookup/${pathname}?${params}`);
    }, 1000);

    return (
        <div className='relative flex w-full items-center justify-around gap-4 rounded-md p-3'>
            <ShowSide tags={tags} freq={freq} />
            <div className='flex w-full flex-col gap-4'>
                <div className='flex w-full items-center gap-2'>
                    <MdSearch size={20} />
                    <Input
                        type='text'
                        placeholder={placeholder}
                        className='w-full'
                        onChange={handleSearch}
                        id='searchFiled'
                    />
                    <p className='absolute right-5 top-2 rounded bg-slate-500 px-2 text-xs'>
                        {blogCont}
                    </p>
                </div>

                {/* <FilterOption
                    pageCount={blogCont}
                    text={encodeURIComponent(searchText)}
                /> */}
            </div>
        </div>
    );
};

export default SearchOnLink;
