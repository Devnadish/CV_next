/*eslint no-undef: 0*/
import { Offline, Online, onlinePost, offLinePost } from './export';
async function page({ params }) {
    const online = onlinePost(params.lang);
    const offline = offLinePost(params.lang);
    const [onlineData, offlineData] = await Promise.all([online, offline]);
    return (
        <div className='mt-8 flex h-[80%] w-full items-center justify-between gap-4'>
            <Online onlineData={onlineData} lang={params.lang} />
            <Offline offlineData={offlineData} lang={params.lang} />
        </div>
    );
}

export default page;
