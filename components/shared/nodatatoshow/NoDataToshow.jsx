'use client';
import PageContainer from '@/components/shared/pagecontainer/PageContainer';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

function NoDataToshow() {
    const router = useRouter();
    return (
        <>
            <PageContainer>
                <div className='mx-auto my-auto flex w-full flex-col items-center justify-center gap-4 p-4'>
                    <p className='font-tajawal text-3xl font-semibold'>
                        No Data To Show{' '}
                    </p>
                    <h2 className='font-tajawal text-4xl font-semibold'>
                        &#128513;
                    </h2>
                    <Button onClick={() => router.back()}>Back</Button>
                </div>
            </PageContainer>
        </>
    );
}

export default NoDataToshow;
