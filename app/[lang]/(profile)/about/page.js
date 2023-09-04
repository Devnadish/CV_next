
import  AdvertisingText  from "@/components/aboutCompnent/AdvertisingText";
import  LazyDBSection from "@/components/aboutCompnent/DBSection"
import ProgSection from  "@/components/aboutCompnent/ProgSection";
import DesignSection from "@/components/aboutCompnent/DesignSection";
import UiSection from "@/components/aboutCompnent/UiSection";
import WillDo from "@/components/aboutCompnent/WillDo"
import HeroBanner from "@/components/aboutCompnent/HeroBanner";
import PageContainer from "@/components/pagecontainer/PageContainer";


function page() {

  return (
    <>
    <PageContainer>

    <div className='flex flex-col justify-start gap-4 overflow-auto ' >
        {/* v.1.01.1 */}
          <HeroBanner   />
          <AdvertisingText   />
          <WillDo   />
          <ProgSection   />
          <DesignSection   />
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2  w-[calc(100%-15px)] place-items-center">

          <UiSection   />
          <LazyDBSection   />
          </div>
      </div>
      </PageContainer>
    </>
  )
}

export default page