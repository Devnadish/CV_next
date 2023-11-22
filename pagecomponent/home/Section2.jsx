import CardWithImage from '@/components/shared/cardWithImage/CardWithImage';
import Title from '@/components/shared/title/Title';
import { getDictionary } from '@/lib/dictionary';
import { sectionStyle, sectionGridStyle } from '@/styles/homeSectionStyle';
import { section2Data } from './utl';
import Link from 'next/link';
export const Section2 = async ({ lang }) => {
    const {
        page: {
            home: { section2 },
        },
    } = await getDictionary(lang);
    const Imageurl = `/assets/homePage/section2/`;
    const data = section2Data(section2, lang);

    return (
        <>
            <section id='section2' className={sectionStyle}>
                <div className='flex w-full items-center '>
                    <Title title={section2.title} withBtn flag='title'>
                        <Link
                            className='text-primary underline-offset-4 hover:underline'
                            href={'/'}
                            prefetch={false}
                        >
                            More
                        </Link>
                    </Title>
                </div>

                <div className={sectionGridStyle}>
                    {data.data.map((section2) => {
                        return (
                            <CardWithImage
                                key={section2.id}
                                title={section2.title}
                                imageUrl={Imageurl + section2.imageUrl}
                                des={section2.des}
                                link={section2.link}
                                lang={lang}
                            />
                        );
                    })}
                </div>
            </section>
        </>
    );
};
