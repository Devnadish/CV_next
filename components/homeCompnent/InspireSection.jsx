import { erInspire } from "./MDdocument/insporeSite.mjs";
import { enLang } from "@/locales/en/enInspiration";
import Title from "../shared/title/Title";
import CardWithImage from "../shared/cardWithImage/CardWithImage";
import { getDictionary } from "@/lib/dictionary";

export const  InspireSection =async ({ lang }) => {
  const {
    page: {
      home: { inspire },
    },
  } = await getDictionary(lang);


  const baseUrl = "/assets/homePage/inSpirceSection/";
  return (
    <>
      <div  className="flex flex-col justify-between
         w-[calc(100%-15px)] full gap-6 p-4 border border-gray-400/40 center rounded-b-md">
        <div className="w-auto">
          <Title title={enLang.S11L1} />
        </div>
        <div className="grid grid-cols-3 gap-6 lg:grid-cols-3 place-items-center">
          <CardWithImage
            title={inspire.S7L1}
            des={inspire.S7D1}
            // des={erInspire[0].des}
            imageUrl={baseUrl + "behance.jpg?=v1"}
            linkText={erInspire[0].name + " " + "Site"}
            link={erInspire[0].link}
            fitType="contain"
          />
          <CardWithImage
            title={inspire.S7L2}
            des={inspire.S7D2}
            imageUrl={baseUrl + "Dribbble.jpg?=v1"}
            linkText={erInspire[1].name + " " + "Site"}
            link={erInspire[1].link}
          />

          <CardWithImage
            title={inspire.S7L3}
            des={inspire.S7D3}
            imageUrl={baseUrl + "Pinterest.jpg?=v1"}
            linkText={erInspire[4].name + " " + "Site"}
            link={erInspire[4].link}
          />





        </div>
      </div>
    </>
  );
};


