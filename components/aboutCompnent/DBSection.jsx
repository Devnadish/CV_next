
import { FaServer } from "react-icons/fa"
import Title from "@/components/shared/title/Title";
import { enLang } from "@/locales/en/translation"
import AboutImage from "@/components/shared/cardWithImage/AboutImage";
function DBSection() {
  const baseUrl="/assets/about/"
  return (
    <>
     <div className="flex flex-col justify-center  w-[calc(100%-15px)]  border-gray-300/50 hover:border-gray-300 gap-2 p-2 border-1 bg-blue-gray-400 ">
         <Title title={enLang.database}  icon={<FaServer className="text-3xl text-green-600"/>}/>
     <div className="flex justify-between w-auto gap-4 mt-4">
        <AboutImage imgx={baseUrl+"mysql.png"}   pres={"70%"} />
        <AboutImage imgx={baseUrl+"firebase.png"}   pres={"60%"} />
      </div>
      </div>
    </>
  );
}

export default DBSection;
