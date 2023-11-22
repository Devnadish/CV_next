import {
    AdvertisingText,
    LazyDBSection,
    ProgSection,
    DesignSection,
    UiSection,
    WillDo,
    HeroBanner,
    PageContainer,
} from './export.js';

function page({ params: { lang } }) {
    return (
        <>
            <PageContainer>
                <div className='flex w-full flex-col justify-start gap-4 overflow-auto px-4 py-6'>
                    <div className='text-back text-md flex w-full flex-col items-center justify-between gap-5 md:flex-row'>
                        <HeroBanner lang={lang} />

                        <AdvertisingText lang={lang} />
                    </div>
                    <WillDo lang={lang} />
                    <ProgSection lang={lang} />
                    <DesignSection lang={lang} />
                    <div className='grid w-[calc(100%-15px)] grid-cols-1 place-items-center  gap-6 lg:grid-cols-2'>
                        <UiSection lang={lang} />
                        <LazyDBSection lang={lang} />
                    </div>
                </div>
            </PageContainer>
        </>
    );
}

export default page;
