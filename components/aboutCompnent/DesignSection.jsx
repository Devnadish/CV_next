import { FaPalette } from "react-icons/fa";
import { enLang } from "@/locales/en/translation";
import Title from "@/components/shared/title/Title";
import AboutImage from "@/components/shared/cardWithImage/AboutImage";


function DesignSection() {
  const baseUrl="/assets/about/"
  return (
    <>
      <div className="flex flex-col justify-center gap-2 p-2 border-1 rounded  w-[calc(100%-15px)] ">
        <Title
          title={enLang.desigtitle}
          icon={<FaPalette className="text-3xl text-orange-600"/>}
        />
        <div className="flex justify-between w-auto gap-4 p-4">
          <AboutImage imgx={baseUrl+"ps.png"}   pres={"70%"} />
          <AboutImage imgx={baseUrl+"ai.png"}   pres={"60%"} />
          <AboutImage imgx={baseUrl+"pr.png"}   pres={"60%"} />
          <AboutImage imgx={baseUrl+"ae.png"}   pres={"50%"} />
        </div>
      </div>
    </>
  );
}

export default DesignSection;
