import PageContainer from "@/components/pagecontainer/PageContainer";
import dynamic from "next/dynamic";
const BlurImage = dynamic(() =>
  import("@/components/shared/blurImage/BluerImage")
);
const MyDrawer = dynamic(() =>
  import("@/components/shared/drawer/vaulDrawer/Draw")
);
import { getDictionary } from "@/lib/dictionary";
import { myWork2Data } from "@/components/mywokcomponent/utl";

async function page({ params: { lang } }) {
  const {
    page: { mywork },
  } = await getDictionary(lang);
  // console.log(mywork);

  const data = myWork2Data(mywork, lang);

  return (
    <PageContainer>
      <div className="flex items-center justify-center p-4 rounded shadow-lg ">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-5 lg:grid-cols-6 p-4 w-[calc(100%-15px)] place-items-center ">
          {data?.data?.map((el) => {
            return (
              <div key={el.id}>
                <MyDrawer
                  btnTXT={el.title}
                  headTitle={el.title}
                  btnIcon={el.icon}
                  chip={el.chip + " " + "Task"}
                >
                  <Gallery images={el.imageFolder} />
                </MyDrawer>
              </div>
            );
          })}
        </div>
      </div>
    </PageContainer>
  );
}
export default page;

function Gallery({ images, titlename }) {
  return (
    <div className="w-full px-4 py-4 mx-auto rounded-md border-gray-200/50 border-1 lg:max-w-7xl">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 ">
        {images?.map((image, idx) => (
          <BlurImage key={idx} image={image.imgSrc} />
        ))}
      </div>
    </div>
  );
}
