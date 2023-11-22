'use client';
import { BiLogOut } from '@react-icons/all-files/bi/BiLogOut';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import ThemeSwitcher from './ThemeSwitcher';
import { IoPersonCircleSharp } from '@react-icons/all-files/io5/IoPersonCircleSharp';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { usePathname } from 'next/navigation';

export default function Profile() {
    const pathName = usePathname();
    const router = useRouter();
    const redirectedPathName = (locale) => {
        if (!pathName) return '/';
        const segments = pathName.split('/');
        segments[1] = locale;
        return segments.join('/');
    };

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant='menughost'>
                    <IoPersonCircleSharp size={24} />
                </Button>
            </SheetTrigger>

            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Welcome</SheetTitle>
                    <div className='flex w-full items-center justify-center'>
                        <Image
                            src={'/assets/blank-profile-picture.webp'}
                            alt='language selected'
                            width={150}
                            height={112}
                        />
                    </div>

                    <SheetDescription></SheetDescription>
                </SheetHeader>

                <div className='grid gap-4 py-4 text-[.8rem]'>
                    <div className='flex flex-col gap-4'>
                        <Separator className='mb-2 w-full' />

                        <ThemeSwitcher />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <Separator className='mb-2 w-full' />
                        <div className='flex items-center justify-evenly gap-4'>
                            <SheetClose asChild>
                                <Button
                                    onClick={() => {
                                        router.push(redirectedPathName('ar'));
                                    }}
                                    variant='ghost'
                                    className='flex items-center gap-4'
                                >
                                    <Image
                                        src={'/assets/locales/saudi-arabia.png'}
                                        alt='language selected'
                                        width={24}
                                        height={24}
                                    />
                                    {/* <Sun className="h-[1.2rem] w-[1.2rem] mr-2 rotate-0 scale-100 transition-all  " /> */}
                                    <h2>عربي</h2>
                                </Button>
                            </SheetClose>
                            <SheetClose asChild>
                                <Button
                                    onClick={() => {
                                        router.push(redirectedPathName('en'));
                                        // redirectedPathName("en");
                                    }}
                                    className='flex items-center gap-4'
                                    variant='ghost'
                                >
                                    <Image
                                        src={
                                            '/assets/locales/united-states.png'
                                        }
                                        alt='language selected'
                                        width={24}
                                        height={24}
                                    />
                                    <h2>English</h2>
                                </Button>
                            </SheetClose>
                        </div>
                    </div>

                    <Separator className='mb-2 w-full' />
                    <div className='flex items-center justify-start gap-4 '>
                        <BiLogOut size={24} />
                        <h2>Logout</h2>
                    </div>
                    <div className='grid grid-cols-4 items-center gap-4'></div>
                </div>
                <SheetFooter>
                    {/* <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose> */}
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
}
