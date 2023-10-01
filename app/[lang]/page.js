import { InspireSection } from "@/components/pagecomponent/home/InspireSection";
import { Section2 } from "@/components/pagecomponent/home/Section2";
import { Section3 } from "@/components/pagecomponent/home/Section3";
import { Section4 } from "@/components/pagecomponent/home/Section4";
import { Section5 } from "@/components/pagecomponent/home/Section5";
import { Section6 } from "@/components/pagecomponent/home/Section6";
import { Section7 } from "@/components/pagecomponent/home/Section7";
import PageContainer from "@/components/shared/pagecontainer/PageContainer";

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
