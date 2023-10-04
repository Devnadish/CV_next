import AdvertisingText from "@/components/pagecomponent/about/AdvertisingText";
import LazyDBSection from "@/components/pagecomponent/about/DBSection";
import ProgSection from "@/components/pagecomponent/about/ProgSection";
import DesignSection from "@/components/pagecomponent/about/DesignSection";
import UiSection from "@/components/pagecomponent/about/UiSection";
import WillDo from "@/components/pagecomponent/about/WillDo";
import HeroBanner from "@/components/pagecomponent/about/HeroBanner";
import PageContainer from "@/components/shared/pagecontainer/PageContainer";

function page({ params: { lang } }) {
  return (
    <>
      <PageContainer>
        <div className="flex flex-col justify-start w-full gap-4 px-4 py-6 overflow-auto">
          <div className="flex flex-col items-center justify-between w-full gap-8 md:flex-row text-back text-md">
            <HeroBanner lang={lang} />
            <AdvertisingText lang={lang} />
          </div>
          <WillDo lang={lang} />
          <ProgSection lang={lang} />
          <DesignSection lang={lang} />
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2  w-[calc(100%-15px)] place-items-center">
            <UiSection lang={lang} />
            <LazyDBSection lang={lang} />
          </div>
        </div>
      </PageContainer>
    </>
  );
}

export default page;
