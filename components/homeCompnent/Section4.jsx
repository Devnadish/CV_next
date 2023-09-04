import Title from "../shared/title/Title";
import   Description  from "../shared/description/Description";
import { getDictionary } from "@/lib/dictionary";
export const Section4 =async ({ lang }) => {
  const {
    page: {
      home: { section4 },
    },
  } = await getDictionary(lang);
  return (
    <>
      <section
        id="section4"
        className="flex flex-col w-[calc(100%-15px)] gap-4 p-4 border border-gray-400/40 hover:opacity-80 hover:shadow-lg"
      >
        <Title title={section4.title} />
        <Description  des={section4.S4L1} />
      </section>
    </>
  );
};
