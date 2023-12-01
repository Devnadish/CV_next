'use client';
import { Badge } from '@/components/ui/badge';
import { useRouter } from 'next/navigation';

function ShowFreqy({ freq }) {
    const router = useRouter();
    const onSearch = (search) => {
        if (typeof search !== 'string') {
            return;
        }
        router.push(`/blog/lookup/tag=${encodeURI(search)}`);
    };
    return (
        <div className='flex w-full  flex-col  justify-start  gap-2  overflow-y-auto  overflow-x-hidden scroll-smooth px-4 '>
            {freq.map((freq) => {
                return (
                    <Badge
                        key={freq.id}
                        variant='outline'
                        className='flex  w-full cursor-pointer items-center justify-between border-foreground/30 hover:border-foreground  active:bg-destructive'
                        onClick={() => {
                            onSearch(freq.title);
                        }}
                    >
                        <div className='flex  w-full items-center justify-between gap-2'>
                            <span className='break-normal '>{freq.title}</span>
                            <span className='min-w-[20px] border-l  border-primary/70 text-right text-xs text-foreground/50'>
                                {freq.viewers}
                            </span>
                        </div>
                    </Badge>
                );
            })}
        </div>
    );
}

export default ShowFreqy;
