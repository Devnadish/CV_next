import { FaJs } from "react-icons/fa";
import Title from "@/components/shared/title/Title";
import AboutImage from "@/components/shared/cardWithImage/AboutImage";
import { getDictionary } from "@/lib/dictionary";
import { devlopment } from "./utl";
import {sectionStyle} from "@/styles/homeSectionStyle"

async function ProgSection({lang}) {
  const {
    page: {
      about: { skills },
    },
  } = await getDictionary(lang);
  const baseUrl = "/assets/about/";
  const data=devlopment()

  return (
    <>
      <div className={sectionStyle}>
        <Title
          title={skills.devlopingtitle}
          icon={<FaJs className="text-3xl text-yellow-600" />}
        />
        <div className="grid grid-cols-3 gap-6 lg:grid-cols-6 place-items-center">

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
export default ProgSection;
