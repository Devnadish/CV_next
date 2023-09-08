import Title from "../shared/title/Title";
import { sectionStyle, sectionGridStyle } from "@/styles/homeSectionStyle";
import { section7Data } from "./utl";
import { getDictionary } from "@/lib/dictionary";
import ShowHint from "../shared/hint/ShowHint";
export const Section7 = async ({ lang }) => {
  const {
    page: {
      home: { hint },
    },
  } = await getDictionary(lang);
  const data = section7Data(hint, lang);

  return (
    <>
      <div id="section7" className={sectionStyle}>
        <Title title={hint.title} />
        <div className={sectionGridStyle}>
          {data.data.map((hint) => {
            return (
              <ShowHint
                key={hint.id}
                title={hint.title}
                txt={hint.des}
                icon={hint.icon}
                link={hint.link}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
