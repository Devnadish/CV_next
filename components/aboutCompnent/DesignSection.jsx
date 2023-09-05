import { FaPalette } from "react-icons/fa";
import Title from "@/components/shared/title/Title";
import AboutImage from "@/components/shared/cardWithImage/AboutImage";
import { getDictionary } from "@/lib/dictionary";
import {sectionStyle} from "@/styles/homeSectionStyle"
import { design } from "./utl";

async function DesignSection({lang}) {
  const {
    page: {
      about: { skills },
    },
  } = await getDictionary(lang);
  const baseUrl="/assets/about/"
  const data=design()
  return (
    <>
      <div className={sectionStyle}>
        <Title
          title={skills.desigtitle}
          icon={<FaPalette className="text-3xl text-orange-600"/>}
        />
     <div className="grid grid-cols-2 gap-6 lg:grid-cols-6 place-items-center">
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

export default DesignSection;
