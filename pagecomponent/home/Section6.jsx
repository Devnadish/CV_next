import CardWithImage from '@/components/shared/cardWithImage/CardWithImage';
import Title from '@/components/shared/title/Title';
import { getDictionary } from '@/lib/dictionary';
import { sectionStyle, sectionGridStyle } from '@/styles/homeSectionStyle';
import { section6Data } from './utl';
export const Section6 = async ({ lang }) => {
    const {
        page: {
            home: { section6 },
        },
    } = await getDictionary(lang);
    const Imageurl = '/assets/homePage/section6/';
    const data = section6Data(section6, lang);
    return (
        <>
            <section id='section6' className={sectionStyle}>
                <Title title={section6.title} flag='title' />
                <div className={sectionGridStyle}>
                    {data.data.map((section6) => {
                        return (
                            <CardWithImage
                                key={section6.id}
                                title={section6.title}
                                imageUrl={Imageurl + section6.imageUrl}
                                des={section6.des}
                                link={section6.link}
                            />
                        );
                    })}
                </div>
            </section>
        </>
    );
};
