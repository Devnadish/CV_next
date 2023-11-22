import WorkeSkelton from '@/components/shared/skelton/WorkeSkelton';

export default function Loading() {
    // Or a custom loading skeleton component
    return (
        <>
            <div className='flex flex-wrap items-center justify-evenly gap-4 p-4'>
                <WorkeSkelton />
                <WorkeSkelton />
                <WorkeSkelton />
                <WorkeSkelton />
                <WorkeSkelton />
                <WorkeSkelton />
                <WorkeSkelton />
                <WorkeSkelton />
                <WorkeSkelton />
                <WorkeSkelton />
                <WorkeSkelton />
            </div>
        </>
    );
}
