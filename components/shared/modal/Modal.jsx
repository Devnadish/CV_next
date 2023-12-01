import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import React from 'react';

function Modal({ open, setOpen, title = '', Description, children }) {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            {/* <DialogTrigger >Open</DialogTrigger> */}

            <DialogContent
                className={'max-h-[90vh] overflow-y-auto lg:max-w-screen-lg'}
            >
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>{Description}</DialogDescription>
                    {/* <DialogDescription>{children}</DialogDescription> */}
                    {children}
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}

export default Modal;
