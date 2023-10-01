import { FiFigma } from "@react-icons/all-files/fi/FiFigma";
import Title from "@/components/shared/title/Title";
import AboutImage from "@/components/shared/cardWithImage/AboutImage";
import { getDictionary } from "@/lib/dictionary";
import { uiux } from "./utl";
import {sectionStyle} from "@/styles/homeSectionStyle"
async function UiSection({lang}) {
  const {
    page: {
      about: { skills },
    },
  } = await getDictionary(lang);
  const baseUrl="/assets/about/"
  const data=uiux()
  return (
    <>
      <div className={sectionStyle} >
        <Title
          title={skills.uiux}
          icon={<FiFigma className="text-3xl text-red-600" />}
        />
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

export default UiSection;
