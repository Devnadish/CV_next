import { getDictionary } from '@/lib/dictionary';

const AdvertisingText = async ({ lang }) => {
    const {
        page: {
            about: { advTxt },
        },
    } = await getDictionary(lang);
    return (
        <>
            <div className='hover: flex h-full w-[calc(100%-15px)] animate-pulse flex-col items-center justify-center gap-4 rounded-xl bg-orange-500 p-4 text-foreground shadow-xl duration-2000 hover:bg-blue-700 hover:shadow-none'>
                <p className='font-tajawal flex items-center justify-center text-center text-4xl font-semibold md:text-2xl lg:text-4xl'>
                    {advTxt.ask1}
                </p>
                <p className='font-tajawal flex items-center justify-center text-center text-2xl md:text-xl'>
                    {advTxt.ask2}
                </p>
            </div>
        </>
    );
};

export default AdvertisingText;
