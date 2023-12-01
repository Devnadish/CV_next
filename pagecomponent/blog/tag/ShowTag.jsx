'use client';
import { useCallback, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
function ShowTag({ tags }) {
    const searchParams = useSearchParams();

    const { replace } = useRouter();
    const pathname = usePathname();
    const [isFilter, setIsFilter] = useState(false);

    const createQueryString = useCallback(
        (name, value) => {
            const params = new URLSearchParams(searchParams);
            params.set(name, value);

            return params.toString();
        },
        [searchParams],
    );

    const handleSearchBody = (tagName) => {
        setIsFilter(true);
        replace(`${pathname}?${createQueryString('tag', tagName)}`);
    };
    const removeFilter = () => {
        replace(`${pathname}?${createQueryString('tag', undefined)}`);
        setIsFilter(false);
    };
    return (
        <div className='flex w-full  flex-col  justify-start  gap-2  overflow-y-auto  overflow-x-hidden  px-4'>
            {isFilter && (
                <Button
                    size='xs'
                    className='w-8 self-end  bg-destructive text-foreground'
                    onClick={removeFilter}
                >
                    X
                </Button>
            )}
            {tags?.map((tag) => {
                return (
                    <Badge
                        key={tag.tagName}
                        variant='outline'
                        className='w-full cursor-pointer border-foreground/30 hover:border-foreground  active:bg-destructive'
                        onClick={() => {
                            // onSearch(tag.title);
                            handleSearchBody(tag.tagName);
                        }}
                    >
                        <div className='flex  w-full items-center justify-between'>
                            <span>{tag.tagName}</span>

                            <span className='min-w-[20px] border-l  border-primary/70 text-right text-xs text-foreground/50'>
                                {tag.count}
                            </span>
                        </div>
                    </Badge>
                );
            })}
        </div>
    );
}

// -----------------

export default ShowTag;
