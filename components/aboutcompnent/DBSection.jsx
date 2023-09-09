
import { FaServer } from "react-icons/fa"
import Title from "@/components/shared/title/Title";
import AboutImage from "@/components/shared/cardWithImage/AboutImage";
import { getDictionary } from "@/lib/dictionary";
import { dataBase } from "./utl";
import {sectionStyle} from "@/styles/homeSectionStyle"

async function DBSection({lang}) {
  const {
    page: {
      about: { skills },
    },
  } = await getDictionary(lang);
  const baseUrl="/assets/about/"
  const data=dataBase()
  return (
    <>
     <div className={sectionStyle}>
         <Title title={skills.database}  icon={<FaServer className="text-3xl text-green-600"/>}/>
     <div className="flex justify-between w-auto gap-4 mt-4">
     {data.data.map((skill) => {
          return (
            <AboutImage
            key={skill.id}
              imgx={baseUrl + skill.imgx}
              pres={skill.pres}

            />
        )})}
      </div>
      </div>
    </>
  );
}

export default DBSection;