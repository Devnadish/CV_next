import React from 'react';
import ShowTag from '@/pagecomponent/blog/tag/ShowTag';
function Tags(props) {
    return (
        <div className='relative mt-4 h-full  rounded-lg border border-foreground/30 py-4 shadow-xl'>
            <div className='absolute left-5 top-0 -translate-y-[50%] rounded-xl border bg-primary px-4 text-sm  '>
                Tags
            </div>
            <ShowTag tags={props.tags} blogCont={props.length} />
        </div>
    );
}

export default Tags;
