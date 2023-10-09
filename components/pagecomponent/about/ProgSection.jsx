import { FaJs } from "@react-icons/all-files/fa/FaJs";
import Title from "@/components/shared/title/Title";
import { getDictionary } from "@/lib/dictionary";
import { devlopment } from "./utl";
import { sectionStyle } from "@/styles/homeSectionStyle";
import SkillBox from "@/components/pagecomponent/about/SkillBox";

async function ProgSection({ lang }) {
  const {
    page: {
      about: { skills },
    },
  } = await getDictionary(lang);
  const baseUrl = "/assets/about/";
  const data = devlopment(lang);

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
              <SkillBox
                imgz={baseUrl + skill.imgx}
                txt={skill.pres}
                key={skill.id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
export default ProgSection;
