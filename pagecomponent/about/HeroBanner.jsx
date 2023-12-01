import Image from 'next/image';
import { FaHandshake } from '@react-icons/all-files/fa/FaHandshake';
import { FiDownload } from '@react-icons/all-files/fi/FiDownload';
import MyWorkSample from '@/pagecomponent/worksample/MyWorkSample';
import { Button } from '@/components/ui/button';
import { getDictionary } from '@/lib/dictionary';

async function HeroBanner({ lang }) {
    const {
        page: {
            about: { heroSection },
        },
    } = await getDictionary(lang);
    return (
        <>
            {/* w-[calc(100%-15px)] */}
            <div className='flex w-full flex-col  rounded-lg border bg-accent lg:flex-row lg:justify-evenly  '>
                <div className='flex w-full flex-1 flex-col rounded-lg'>
                    <div className='relative h-32 w-full overflow-hidden rounded-lg md:h-52'>
                        <Image
                            alt={'خالد دبش khalid nadish مطور مبرمج مصمم مواقع'}
                            src={'/assets/about/meOnly2.png'}
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <IamKhalid
                        himsg={heroSection.himsg}
                        iamKhalid={heroSection.iamKhalid}
                        develepor={heroSection.develepor}
                        develoerSince={heroSection.develoerSince}
                        waitingForyou={heroSection.waitingForyou}
                        download={heroSection.download}
                    />
                    <MyWorkSample />
                </div>
            </div>
            {/* medea area */}
        </>
    );
}
export default HeroBanner;

export function IamKhalid({
    himsg,
    iamKhalid,
    develepor,
    develoerSince,
    waitingForyou,
    download,
}) {
    return (
        <div className='flex w-full flex-col items-center justify-evenly gap-4 p-4'>
            <div>
                <span className='font-tajawal font-semibold'> {himsg} </span>
                <span className='font-tajawal font-semibold'>{iamKhalid}</span>
            </div>
            <div>
                <span className='font-tajawal font-semibold'>
                    {' '}
                    {develepor}{' '}
                </span>
                <span className='font-tajawal font-semibold'>
                    {' '}
                    {develoerSince}{' '}
                </span>
            </div>
            <div className='my-4 flex items-center justify-around gap-4 '>
                <Button type='button' variant='blue'>
                    <FaHandshake className='text-xl  text-foreground' />
                    <p className='font-tajawal font-semibold'>
                        {' '}
                        {waitingForyou}{' '}
                    </p>
                </Button>
                <Button
                    variant='green'
                    type='button'
                    className='flex items-center gap-2'
                >
                    <FiDownload className='text-xl  text-foreground' />
                    <p className='font-tajawal font-semibold'>{download}</p>
                </Button>
            </div>
        </div>
    );
}
