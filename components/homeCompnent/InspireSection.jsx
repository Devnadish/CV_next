import Title from "../shared/title/Title";
import CardWithImage from "../shared/cardWithImage/CardWithImage";
import { getDictionary } from "@/lib/dictionary";
import {sectionStyle,sectionGridStyle} from "@/styles/homeSectionStyle";
import { section8Data } from "./utl";

export const  InspireSection =async ({ lang }) => {
  const {
    page: {
      home: { inspire },
    },
  } = await getDictionary(lang);


  const Imageurl = "/assets/homePage/inSpirceSection/";
  const data=section8Data(inspire,lang);
  return (
    <>
      <div  className={sectionStyle}>
        <div className="w-auto"><Title title={inspire.title} withBtn/></div>

        <div className={sectionGridStyle}>
        {data.data.map((section8) => {
            return (
              <CardWithImage
                key={section8.id}
                title={section8.title}
                imageUrl={Imageurl + section8.imageUrl}
                des={section8.des}
                link={section8.link}
              />
            );
          })}
          {/* <CardWithImage
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
 */}




        </div>
      </div>
    </>
  );
};


