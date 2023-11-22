import { InspireSection } from '@/pagecomponent/home/InspireSection';
import { Section2 } from '@/pagecomponent/home/Section2';
import { Section3 } from '@/pagecomponent/home/Section3';
import { Section4 } from '@/pagecomponent/home/Section4';
import { Section5 } from '@/pagecomponent/home/Section5';
import { Section6 } from '@/pagecomponent/home/Section6';
import { Section7 } from '@/pagecomponent/home/Section7';
import PageContainer from '@/components/shared/pagecontainer/PageContainer';

export default async function Home({ params: { lang } }) {
    return (
        <PageContainer>
            <Section2 lang={lang} />
            <Section3 lang={lang} />
            <Section4 lang={lang} />
            <Section5 lang={lang} />
            <Section6 lang={lang} />
            <Section7 lang={lang} />
            <InspireSection lang={lang} />
        </PageContainer>
    );
}
