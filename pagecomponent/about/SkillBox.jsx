import Image from 'next/image';
import React from 'react';

const SkillBox = ({ imgz, txt, colorx }) => {
    return <SkillImage imgz={imgz} txt={txt} />;
};
export default SkillBox;
function SkillImage({ imgz, txt }) {
    return (
        <div className='flex flex-col  items-center justify-center  rounded-md border p-4'>
            <Image width={35} height={35} src={imgz} alt='skills' />
            <p className='mt-1 flex w-full items-center justify-center border-t-2 border-black/10'>
                {txt}
            </p>
        </div>
    );
}
