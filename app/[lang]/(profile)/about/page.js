import  AdvertisingText  from "@/components/aboutcompnent/AdvertisingText";
import  LazyDBSection from "@/components/aboutcompnent/DBSection"
import ProgSection from  "@/components/aboutcompnent/ProgSection";
import DesignSection from "@/components/aboutcompnent/DesignSection";
import UiSection from "@/components/aboutcompnent/UiSection";
import WillDo from "@/components/aboutcompnent/WillDo"
import HeroBanner from "@/components/aboutcompnent/HeroBanner";
import PageContainer from "@/components/shared/pagecontainer/PageContainer";


function page({params: { lang }}) {

  return (
    <>
    <PageContainer>

    <div className='flex flex-col justify-start w-full gap-4 overflow-auto ' >
        {/* v.1.01.1 */}
          <HeroBanner  lang={lang} />
          <AdvertisingText  lang={lang} />
          <WillDo  lang={lang} />
          <ProgSection  lang={lang} />
          <DesignSection  lang={lang} />
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2  w-[calc(100%-15px)] place-items-center">
          <UiSection   lang={lang}/>
          <LazyDBSection lang={lang}   />
          </div>
      </div>
      </PageContainer>
    </>
  )
}

export default page