import { getDictionary } from "@/lib/dictionary";
import Title from "../../shared/title/Title";
import ShowHint from "../../shared/hint/ShowHint";
import { sectionStyle, sectionGridStyle } from "@/styles/homeSectionStyle";
import { section5Data } from "./utl";
export const Section5 = async ({ lang }) => {
  const {
    page: {
      home: { section5 },
    },
  } = await getDictionary(lang);
  const data = section5Data(section5, lang);
  return (
    <>
      <section id="section5" className={sectionStyle}>
        <Title title={section5.title} flag="title" />
        <div className={sectionGridStyle}>
          {data.data.map((section5) => {
            return (
              <ShowHint
                key={section5.id}
                title={section5.title}
                txt={section5.des}
                icon={section5.icon}
                link={section5.link}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};
