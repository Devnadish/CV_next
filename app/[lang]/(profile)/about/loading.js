import HomeSkelton from '@/components/shared/skelton/HomeSkelton';

export default function Loading() {
    // Or a custom loading skeleton component
    return (
        <>
            <div className='flex flex-wrap items-center justify-evenly gap-4    p-4'>
                <HomeSkelton />
                <HomeSkelton />
                <HomeSkelton />
                <HomeSkelton />
                <HomeSkelton />
                <HomeSkelton />
            </div>
        </>
    );
}
