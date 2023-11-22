import React from 'react';
import ShowFreqy from '@/pagecomponent/blog/showBlogWithSearch/ShowFreqy';

function Freqantly({ freq }) {
    return (
        <div className='relative max-h-[50vh] rounded-lg border border-foreground/30 py-4 shadow-xl '>
            <div className='absolute left-5 top-0 -translate-y-[50%] rounded-xl border bg-primary px-4 text-sm  '>
                Freqantly
            </div>
            <ShowFreqy freq={freq} />
        </div>
    );
}

export default Freqantly;
