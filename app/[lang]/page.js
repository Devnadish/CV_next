import { InspireSection } from "@/components/homeCompnent/InspireSection";
import { Section2 } from "@/components/homeCompnent/Section2";
import { Section3 } from "@/components/homeCompnent/Section3";
import { Section4 } from "@/components/homeCompnent/Section4";
import { Section5 } from "@/components/homeCompnent/Section5";
import { Section6 } from "@/components/homeCompnent/Section6";
import { Section7 } from "@/components/homeCompnent/Section7";
import PageContainer from "@/components/shared/pagecontainer/PageContainer";


export default async function Home({params: { lang }}) {

  return (
    <PageContainer>
      <Section2 lang={lang}/>
      <Section3 lang={lang} />
      <Section4 lang={lang}/>
      <Section5 lang={lang}/>
      <Section6 lang={lang}/>
      <Section7 lang={lang}/>
      <InspireSection lang={lang}/>
    </PageContainer>

  );
}
