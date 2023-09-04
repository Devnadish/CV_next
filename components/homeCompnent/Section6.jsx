
import  CardWithImage  from "../shared/cardWithImage/CardWithImage";
import Title from "../shared/title/Title";
import { getDictionary } from "@/lib/dictionary";

export const Section6 = async ({lang}) => {
  const {
    page: {
      home: { section6 },
    },
  } = await getDictionary(lang);
  const Imageurl  = "/assets/homePage/section6/";
  // const Imageurl  = "http://localhost:3000/assets/homePage/section6/";
  return (
    <>
      <div
        id="section6"
        className="flex flex-col justify-center w-[calc(100%-15px)] gap-6 p-4 border rounded-md border-gray-400/50 "
      >
        <Title title={section6.title} />
        <div className="grid grid-cols-1 gap-6 place-items-center md:grid-cols-3 ">
          <CardWithImage
            title={section6.S6L1}
            imageUrl={Imageurl +"person-donating-goods.jpg"}
            des={section6.S6D1}
            link={"/blog/ecomm"}
            pageData={"ecommerce"}
          />
          <CardWithImage
            title={section6.S6L2}
            imageUrl={Imageurl +"people-and-technology.jpg"}
            des={section6.S6D2}
            link={"/blog/blog"}
            pageData={"blogData"}
          />
          <CardWithImage
            title={section6.S6L3}
            imageUrl={Imageurl +"sitetype.jpg"}
            des={section6.S6D3}
            link={"/blog/webtype"}
            pageData={"sechduleSoftWare"}
          />
          <CardWithImage
            title={section6.S6L4}
            imageUrl={Imageurl +"administrator-working-on-computer.jpg"}
            des={section6.S6D4}
            link={"/blog/portofol"}
            pageData={"portoFolio"}
          />
          <CardWithImage
            title={section6.S6L5}
            imageUrl={Imageurl +"person-dealing-with-a-social-media-issue.jpg"}
            des={section6.S6D5}
            link={"/blog/domainAndhosting"}
            pageData={"domainHosting"}
          />
          <CardWithImage
            title={section6.S6L6}
            imageUrl={Imageurl +"groovy-abstract-composition.jpg"}
            des={section6.S6D6}
            link={"/blog/identity"}
            pageData={"visualIdentity"}
          />
        </div>
      </div>
    </>
  );
};



