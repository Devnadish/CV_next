'use client';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { HiOutlineEye } from '@react-icons/all-files/hi/HiOutlineEye';
import { increaseBlogViewers } from '@/pagecomponent/blog/backend/blog_action';
function LinkClick({ slug, id, children }) {
    const decodedSlug = decodeURIComponent(slug);
    const router = useRouter();
    const handleClick = async () => {
        router.push(`/blog/${decodedSlug}`);
        await increaseBlogViewers(id);
    };
    return (
        <Button
            onClick={handleClick}
            className='flex w-full items-center justify-between bg-primary/80 text-primary-foreground'
        >
            {children}
            <HiOutlineEye className='h-4 w-4 text-primary-foreground ' />
        </Button>
    );
}
export default LinkClick;
