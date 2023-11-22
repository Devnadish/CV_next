import {
    PageContainer,
    BlurImage,
    MyDrawer,
    getDictionary,
    myWork2Data,
} from './export';

async function page({ params: { lang } }) {
    const {
        page: { mywork },
    } = await getDictionary(lang);

    const data = myWork2Data(mywork, lang);

    return (
        <PageContainer>
            <div className='m-auto grid grid-cols-1 place-items-center gap-6 p-4  md:grid-cols-5 lg:grid-cols-7'>
                {data?.data?.map((el) => {
                    return (
                        <div className='w-fit' key={el.id}>
                            <MyDrawer
                                btnTXT={el.title}
                                headTitle={el.title}
                                btnIcon={el.icon}
                                chip={el.chip + ' ' + 'Task'}
                            >
                                <Gallery images={el.imageFolder} />
                            </MyDrawer>
                        </div>
                    );
                })}
            </div>
        </PageContainer>
    );
}
export default page;

function Gallery({ images }) {
    return (
        <div className='border-1 mx-auto w-full rounded-md border-gray-200/50 px-4 py-4 lg:max-w-7xl'>
            <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 '>
                {images?.map((image, idx) => (
                    <BlurImage key={idx} image={image.imgSrc} />
                ))}
            </div>
        </div>
    );
}
