import Link from 'next/link';
import Logo from '@/components/header/Logo';
import dynamic from 'next/dynamic';

import { getDictionary } from '@/lib/dictionary';

const Profile = dynamic(() => import('../profile/Profile'), {
    loading: () => <p>Loading...</p>,
});

const Navbar = async ({ lang }) => {
    const { navigation } = await getDictionary(lang);
    return (
        <nav className='sticky left-0 top-4 z-50 flex h-16 w-full items-center justify-between overflow-hidden bg-primary/80 text-primary-foreground '>
            <div className='flex items-center'>
                <Profile />
                <MenuItems navigation={navigation} lang={lang} />
            </div>
            <Logo />
        </nav>
    );
};

export default Navbar;
function MenuItems({ navigation, lang }) {
    const menuStly =
        ' border-b-2 border-primary-foreground/40 p-2 px-4    hover:bg-primary';
    return (
        <div className='flex items-center justify-around gap-4 capitalize text-primary-foreground'>
            <Link href={`/${lang}`} prefetch={false} className={menuStly}>
                {navigation.home}
            </Link>
            <Link href={`/${lang}/price`} prefetch={false} className={menuStly}>
                {navigation.price}
            </Link>

            <Link
                href={`/${lang}/services`}
                as={`/${lang}/services`}
                prefetch={false}
                className={menuStly}
            >
                {navigation.serves}
            </Link>

            {/* <Link
        href={`/${lang}/blog/lookup/all`}
        as={`/${lang}/blog/lookup/all`}
        prefetch={false}
        className="border-b-2 p-2 px-4  border-foreground/40  text-foreground  hover:bg-primary"
      >
        {navigation.blog}
      </Link> */}
            <Link
                href={`/${lang}/blog/`}
                as={`/${lang}/blog/`}
                prefetch={false}
                className={menuStly}
            >
                {navigation.blog}
            </Link>
            <Link
                href={`/${lang}/dashboard`}
                as={`/${lang}/dashboard`}
                prefetch={false}
                className='hidden  border-b-2 border-foreground/40 p-2  px-4   hover:bg-primary md:block'
            >
                Dashboard
            </Link>
        </div>
    );
}
