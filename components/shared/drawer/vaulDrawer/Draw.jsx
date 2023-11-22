'use client';
import React from 'react';
import { Drawer } from 'vaul';
import { AiOutlineEye } from '@react-icons/all-files/ai/AiOutlineEye';
import colors from '@/constant/colors.json';

export default function MyDrawer({
    headTitle = 'sample',
    btnTXT = 'test',
    btnIcon,
    children,
    chip,
}) {
    return (
        <Drawer.Root shouldScaleBackground>
            <div className='flex flex-col items-center justify-between'>
                <ChipData chip={chip} />
                <Triger btnIcon={btnIcon} btnTXT={btnTXT} />
                <div className='font-tajawal flex h-8 w-full items-center justify-center rounded-b-lg bg-gray-900 text-sm'>
                    {btnTXT}
                </div>
            </div>
            <Drawer.Portal>
                <Drawer.Overlay className='fixed inset-0 bg-black/40' />
                <Drawer.Content className='fixed bottom-0 left-0 right-0 mt-24 flex h-[70%] flex-col rounded-t-[10px] bg-zinc-100 '>
                    <div className='flex-1 overflow-auto rounded-t-[10px] bg-white p-4 '>
                        <div className='h-15 mx-auto mb-8 w-12 flex-shrink-0 rounded-full bg-zinc-900 ' />
                        <div className='mx-auto max-w-fit '>
                            <DrawTItle headTitle={headTitle} />
                            {children}
                        </div>
                    </div>
                    <DrawFooter></DrawFooter>
                </Drawer.Content>
            </Drawer.Portal>
        </Drawer.Root>
    );
}

function DrawFooter() {
    return (
        <div className='mt-auto border-t border-zinc-200 bg-black p-4'>
            <div className='mx-auto flex max-w-md justify-end gap-6'></div>
        </div>
    );
}

function DrawTItle({ headTitle }) {
    return (
        <Drawer.Title className='mb-4 font-medium'>
            <div className='mb-4 flex h-8 w-fit items-center border-b-4 border-black bg-black px-8 '>
                <h1>{headTitle} </h1>
            </div>
        </Drawer.Title>
    );
}

function ChipData({ chip, viewer = 0 }) {
    return (
        <div className=' border-1  flex w-full items-center justify-between  rounded-t-lg bg-green-400/50 p-2 shadow-sm'>
            <span className='rounded-t-sm bg-green-400/50 px-2 text-sm  text-black '>
                {chip}
            </span>
            <div className='flex  items-center gap-2'>
                <span className='text-sm  text-zinc-600'>{viewer}</span>
                <AiOutlineEye className=' h-4 w-4 text-zinc-600' />
            </div>
        </div>
    );
}

function Triger({ btnIcon }) {
    let indexColor = Math.floor(Math.random() * 10) + 1;

    return (
        <>
            <Drawer.Trigger asChild>
                <button
                    className='bg-sprimary flex min-h-[80px] min-w-[150px]
                           flex-col items-center justify-center gap-4
                           rounded-sm  p-4
                           hover:shadow-lg hover:ring-1   hover:ring-yellow-400 '
                    style={{
                        backgroundColor:
                            colors.items[indexColor]?.backgroundColor,
                        color: colors.items[indexColor]?.textColor,
                    }}
                >
                    {/* {btnIcon } */}
                    {React.cloneElement(btnIcon, {
                        style: {
                            backgroundColor:
                                colors.items[indexColor]?.backgroundColor,
                            color: colors.items[indexColor]?.textColor,
                            fontSize: '24px',
                            padding: '8px',
                            // borderRadius: '50%'
                        },
                    })}
                    {/* {btnTXT} */}
                </button>
            </Drawer.Trigger>
            {/* <div>

    {btnTXT}
   </div> */}
        </>
    );
}
