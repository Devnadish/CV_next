import   Description  from "../shared/description/Description";
import Title from "../shared/title/Title";
import { getDictionary } from "@/lib/dictionary";

export const Section3 = async ({ lang }) => {
  const {
    page: {
      home: { section3 },
    },
  } = await getDictionary(lang);
  return (
    <>
      <section id="section3"
        className="flex flex-col w-[calc(100%-15px)]
          p-4 border bg-blue-gray-100 border-gray-400/40 hover:opacity-80 hover:shadow-lg"
      >
        <Title title={section3.title} />
        <Description des={section3.S3L1}/>
      </section>
    </>
  );
};
