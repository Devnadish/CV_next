'use client';
// import { useState } from 'react';
import { Button } from '@/components/ui/button';
// import { useRouter } from 'next/navigation';
import { GoLinkExternal } from '@react-icons/all-files/go/GoLinkExternal';
import { useToast } from '@/components/ui/use-toast';
import { ToastAction } from '@/components/ui/toast';
import { getSearchPath } from '@/components/shared/cardWithImage/_action';

export function CardLink({
    // link = 'googl.com',
    // linkText = 'test',
    // lang,
    searchPath,
}) {
    const { toast } = useToast();
    // const [loading, setLoading] = useState(false);
    // const router = useRouter();

    const linking = async () => {
        const linkpath = await getSearchPath(searchPath);
        if (linkpath === false) {
            toast({
                title: `No Data about:  ${searchPath}`,
                description:
                    'If You Intrest on this topic you can send me Email An  I will help you as soon as i can',
                variant: 'destructive',
                action: (
                    <ToastAction altText='Goto schedule to undo'>
                        Requiest
                    </ToastAction>
                ),
            });
        }
    };

    return (
        <div>
            <Button
                className=' text-foreground hover:bg-primary hover:text-accent-foreground'
                onClick={() => {
                    linking();
                }}
            >
                <GoLinkExternal />
            </Button>
        </div>
    );
}
