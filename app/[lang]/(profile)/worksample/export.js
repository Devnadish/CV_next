import PageContainer from '@/components/shared/pagecontainer/PageContainer';
import dynamic from 'next/dynamic';
const BlurImage = dynamic(() =>
    import('@/components/shared/blurImage/BluerImage'),
);
const MyDrawer = dynamic(() =>
    import('@/components/shared/drawer/vaulDrawer/Draw'),
);
import { getDictionary } from '@/lib/dictionary';
import { myWork2Data } from '@/pagecomponent/worksample/utl';
export { PageContainer, BlurImage, MyDrawer, getDictionary, myWork2Data };
