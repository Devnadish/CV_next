'use client';
import { useRouter } from 'next/navigation';
import { AiOutlineRollback } from '@react-icons/all-files/ai/AiOutlineRollback';
export default function GoBack() {
    const router = useRouter();
    const handleBack = () => {
        // TODO: Back isuue not Back to actual link
        router.back();
    };

    return (
        <button
            className='rounded-md bg-destructive p-1  text-foreground '
            type='button'
            onClick={handleBack}
        >
            <AiOutlineRollback />
        </button>
    );
}
