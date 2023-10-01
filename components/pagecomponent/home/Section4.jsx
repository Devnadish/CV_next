import Title from "../../shared/title/Title";
import Description from "../../shared/description/Description";
import { getDictionary } from "@/lib/dictionary";
import { sectionStyle } from "@/styles/homeSectionStyle";
export const Section4 = async ({ lang }) => {
  const {
    page: {
      home: { section4 },
    },
  } = await getDictionary(lang);
  return (
    <>
      <section id="section4" className={sectionStyle}>
        <Title title={section4.title} />
        <Description des={section4.S4L1} />
      </section>
    </>
  );
};
