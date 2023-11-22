import { BsInboxes } from '@react-icons/all-files/bs/BsInboxes';
import { FaPaperPlane } from '@react-icons/all-files/fa/FaPaperPlane';
import Image from 'next/image';
import Link from 'next/link';
import VersionControl from './VersionControl';
function MyCv() {
    return (
        <Link
            href='/about'
            as={`/about`}
            className={
                'flex animate-pulse items-center  justify-center  rounded-full duration-2000 '
            }
            prefetch={false}
        >
            <div className='flex items-center gap-2 '>
                <MyAvatar />
            </div>
        </Link>
    );
}

function Footer({ lang }) {
    return (
        <div className='flex h-12 flex-col  justify-center bg-primary'>
            <div className='flex items-center  justify-evenly bg-primary align-middle text-gray-200'>
                <BsInboxes className='text-blue-gray-100 text-xl' />
                <FaPaperPlane className='text-blue-gray-100 text-xl' />
                <MyCv lang={lang} />
                <VersionControl />
            </div>
        </div>
    );
}

export default Footer;

const MyAvatar = () => {
    return (
        <div className='border-1 relative h-[25px] w-[25px] overflow-hidden rounded-full shadow-sm'>
            <Image
                src={'/assets/about/avatar.jpg'}
                alt={'خالد دبش khalid nadish مطور مبرمج مصمم مواقع'}
                width={29}
                height={29}
                style={{ objectFit: 'cover' }}
            />
        </div>
    );
};
