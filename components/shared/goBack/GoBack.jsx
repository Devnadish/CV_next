'use client';
import { useRouter } from 'next/navigation';
import { AiOutlineRollback } from '@react-icons/all-files/ai/AiOutlineRollback';
export default function GoBack() {
    const router = useRouter();
    const handleBack = () => {
        router.back();
    };

    return (
        <button
            className='rounded-md bg-red-500 p-1 text-white '
            type='button'
            onClick={handleBack}
        >
            <AiOutlineRollback />
        </button>
    );
}
