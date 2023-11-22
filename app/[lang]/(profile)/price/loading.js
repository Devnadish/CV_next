import PriceSkelton from '@/components/shared/skelton/PriceSkelton';

export default function Loading() {
    // Or a custom loading skeleton component
    return (
        <>
            <div className='flex flex-wrap items-center justify-evenly gap-4 p-4'>
                <PriceSkelton />
                <PriceSkelton />
                <PriceSkelton />
            </div>
        </>
    );
}
