'use client';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

const DeleteWithAlertDialog = ({ id, action, des, icon, oldTag }) => {
    return (
        <AlertDialog>
            <AlertDialogTrigger>{icon}</AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        <div className='flex flex-col gap-2'>
                            <p>
                                This will permanently{' '}
                                <span className='font-semibold text-red-500'>
                                    delete{' '}
                                </span>{' '}
                                your data
                            </p>
                            <p className='font-semibold'>{des}</p>
                        </div>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => action(id, oldTag)}>
                        Continue
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default DeleteWithAlertDialog;
