import { FiFigma } from "react-icons/fi";
import { enLang } from "@/locales/en/translation";
import Title from "@/components/shared/title/Title";
import AboutImage from "@/components/shared/cardWithImage/AboutImage";
function UiSection() {
  const baseUrl="/assets/about/"
  return (
    <>
      <div className="flex flex-col justify-center  border-gray-300/50 hover:border-gray-300  w-[calc(100%-15px)] gap-2 p-2 border-1 rounded ">
        <Title
          title={enLang.uiux}
          icon={<FiFigma className="text-3xl text-red-600" />}
        />
        <div className="flex justify-between w-auto gap-4 mt-4">
          <AboutImage imgx={baseUrl+"xd.png"}   pres={"70%"} />
          <AboutImage imgx={baseUrl+"figma.png"}   pres={"60%"} />
        </div>
      </div>
    </>
  );
}

export default UiSection;
