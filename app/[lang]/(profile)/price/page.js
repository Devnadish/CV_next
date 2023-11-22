import { BiHappyAlt, Package, PageContainer, getDictionary } from './export';

async function page({ params: { lang } }) {
    const {
        page: { pricePkg },
    } = await getDictionary(lang);
    return (
        <>
            {/* // TODO: add more service like consoltation's service mobile        application */}
            <PageContainer>
                <div className='mt-1 grid grid-cols-1 place-items-start gap-6 lg:grid-cols-3 '>
                    <Package
                        category={pricePkg.standerd.title}
                        offerIcon={<BiHappyAlt size={'1.5rem'} />}
                        facility={pricePkg.standerd.facility}
                        price={pricePkg.standerd.price}
                        cur={pricePkg.standerd.cur}
                        subtitle={pricePkg.standerd.subtitle}
                        lang={lang}
                    />
                    <Package
                        category={pricePkg.plus.title}
                        offerIcon={<BiHappyAlt size={'1.5rem'} />}
                        facility={pricePkg.plus.facility}
                        price={pricePkg.plus.price}
                        cur={pricePkg.plus.cur}
                        recommend={true}
                        subtitle={pricePkg.plus.subtitle}
                        lang={lang}
                        hint={pricePkg.plus.hint}
                    />
                    <Package
                        category={pricePkg.advance.title}
                        offerIcon={<BiHappyAlt size={'1.5rem'} />}
                        facility={pricePkg.advance.facility}
                        price={pricePkg.advance.price}
                        // cur={pricePkg.standerd.cur}
                        lang={lang}
                        subtitle={pricePkg.advance.subtitle}
                    />
                </div>
            </PageContainer>
        </>
    );
}

export default page;
