'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

const SearchInput = () => {
    const search = useSearchParams();
    const [searchQuery, setSearchQuery] = useState(
        search ? search.get('q') : '',
    );
    const router = useRouter();

    const onSearch = (event) => {
        event.preventDefault();
        if (typeof searchQuery !== 'string') {
            return;
        }
        const encodedSearchQuery = encodeURI(searchQuery);
        router.push(`/dashboard/bloganalitic/${encodedSearchQuery}`);
    };

    return (
        <form onSubmit={onSearch} className='flex w-2/3 justify-center'>
            <input
                value={searchQuery || ''}
                onChange={(event) => setSearchQuery(event.target.value)}
                className='w-2/3 flex-1 rounded-md border bg-zinc-800 px-5 py-1 text-zinc-200 placeholder:text-zinc-400 focus:bg-black focus:outline-none focus:ring-[1px] focus:ring-green-700 sm:px-5 sm:py-3'
                placeholder='What are you looking for? --> Or Type [ all ] '
            />
        </form>
    );
};

export default SearchInput;
