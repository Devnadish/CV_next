'use client';
import React from 'react';
import { Gift } from 'lucide-react';
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

function VersionControl() {
    return (
        <div>
            <div className='flex  w-full justify-between bg-primary'>
                <p className='px-4 text-xs text-white'></p>
                <p className='px-4 text-xs text-black'></p>

                <AlertDialog>
                    <AlertDialogTrigger>
                        <Gift />
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>
                                beta Version 2.0.12
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                                <div className='flex flex-col gap-2'>
                                    <p>
                                        Waiting for your suggestions or feedback
                                        on e-mail
                                        (devnadish@gmail.com)-(whatsApp
                                        +966502699023){' '}
                                    </p>
                                </div>
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>
        </div>
    );
}

export default VersionControl;
