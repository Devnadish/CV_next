
import Logo from '@/components/header/Logo';
import dynamic from 'next/dynamic';

import { getDictionary } from '@/lib/dictionary';
import BuregerMenu from './BuregerMenu';
import MenuItems from './MenuItems';

const Profile = dynamic(() => import('../profile/Profile'), {
    loading: () => <p>Loading...</p>,
});

const Navbar = async ({ lang }) => {
    const { navigation } = await getDictionary(lang);
    return (
        <nav className='sticky left-0 top-4 z-50 flex h-16 w-full items-center justify-between overflow-hidden bg-primary/80 text-primary-foreground '>
            <div className='flex w-full items-center justify-between'>
                <div>
                    <Profile />
                </div>
                <div className='order-1 sm:hidden '>
                    <BuregerMenu navigation={navigation} lang={lang} />
                </div>
                <div className='hidden sm:block'>
                    <MenuItems navigation={navigation} lang={lang} />
                </div>
                <div className=''>
                    <Logo />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
