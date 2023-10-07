import Description from "../../shared/description/Description";
import Title from "../../shared/title/Title";
import { getDictionary } from "@/lib/dictionary";
import { sectionStyle } from "@/styles/homeSectionStyle";
export const Section3 = async ({ lang }) => {
  const {
    page: {
      home: { section3 },
    },
  } = await getDictionary(lang);
  return (
    <>
      <section id="section3" className={sectionStyle}>
        <Title title={section3.title} flag="title" />
        <Description des={section3.S3L1} />
      </section>
    </>
  );
};
