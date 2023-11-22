import { getDictionary } from '@/lib/dictionary';
import { WillDoData } from '@/pagecomponent/about/utl.js';
async function WillDo({ lang }) {
    const {
        page: {
            about: { willdo },
        },
    } = await getDictionary(lang);

    const data = WillDoData(willdo);
    return (
        <>
            <div className='grid grid-cols-1 place-items-center gap-6  md:grid-cols-2 lg:grid-cols-3'>
                {data?.data?.map((willdo) => {
                    return (
                        <InfoBox
                            key={willdo.id}
                            icon={willdo.icon}
                            titlex={willdo.title}
                            subtitlex={willdo.subtitlex}
                            alt={willdo.alt}
                        />
                    );
                })}
            </div>
        </>
    );
}
export default WillDo;

const InfoBox = ({ titlex, subtitlex, icon }) => {
    return (
        <>
            <div className='flex w-full max-w-[350px] flex-col items-center justify-center gap-4 rounded-lg border-2 bg-card  p-2'>
                {icon}
                <p className='font-tajawal font-semibold'> {titlex} </p>
                <p className='font-tajawal line-clamp-2 p-4 text-gray-300 hover:line-clamp-none '>
                    {subtitlex}
                </p>
            </div>

            {/* </div> */}
        </>
    );
};
