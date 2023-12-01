'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from '@/components/ui/sheet';

function DashBoardMenu({ lang }) {
    const [isOpen, setIsOpen] = useState(false);
    const menuItem = [
        {
            id: 1,
            menuTitle: 'Dashboard',
            menuLink: '/dashboard',
            icon: <Menu className='border' />,
        },
        { id: 2, menuTitle: 'New Blog', menuLink: '/dashboard/post/new' },
        {
            id: 3,
            menuTitle: 'Puplish And Edit',
            menuLink: '/dashboard/post/puplish',
        },
        { id: 18, menuTitle: 'Tags Opration', menuLink: '/dashboard/tag' },
        {
            id: 4,
            menuTitle: 'Grap Blog From MDX Files',
            menuLink: '/dashboard/bloglist',
        },
        {
            id: 5,
            menuTitle: 'Blog Counters',
            menuLink: '/dashboard/bloganalitic',
        },
        {
            id: 6,
            menuTitle: 'Link Section To  Blog',
            menuLink: '/dashboard/linkblog',
        },
        { id: 7, menuTitle: 'Visitors Logs', menuLink: '/dashboard/iplog' },
        {
            id: 8,
            menuTitle: 'Publish Quastion',
            menuLink: '/dashboard/publishquastion',
        },
    ];

    return (
        <>
            <div className='mt-4 flex  items-center justify-center  '>
                <Button
                    onClick={() => setIsOpen((prev) => !prev)}
                    variant='outline'
                    size='xs'
                    className='flex h-12 w-12 items-center justify-center shadow-lg     '
                >
                    <Menu size={24} />
                </Button>
            </div>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetContent className='lg:w-[20%]'>
                    <SheetHeader>
                        <SheetTitle>
                            <div className='border-b-2  border-primary-foreground/40 py-2 text-foreground'>
                                <p className=' text-foreground/70'>Dashboard</p>
                            </div>
                        </SheetTitle>
                    </SheetHeader>
                    {/* <MenuX menuItem={menuItem} isOpen={isOpen} /> */}

                    <MenuItems
                        menuItem={menuItem}
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        lang={lang}
                    />
                </SheetContent>
            </Sheet>
        </>
    );
}

export default DashBoardMenu;

function MenuItems({ menuItem, setIsOpen, lang }) {
    return (
        <div className='mt-4 flex flex-col items-center justify-evenly gap-2  text-foreground'>
            {menuItem.map((item) => {
                return (
                    <div
                        key={item.id}
                        className='w-full'
                        onClick={() => setIsOpen(false)}
                    >
                        <Link
                            className='flex w-full flex-col gap-6 border-b  border-primary-foreground/20 p-1'
                            href={`/${lang}/${item.menuLink}`}
                            prefetch={false}
                        >
                            <p className='py-1 text-sm  text-foreground/60'>
                                {item.menuTitle}
                            </p>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
}
