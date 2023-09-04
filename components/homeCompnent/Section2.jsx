import CardWithImage from "@/components/shared/cardWithImage/CardWithImage";
import Title from "@/components/shared/title/Title";
import { getDictionary } from "@/lib/dictionary";

export const Section2 = async ({ lang }) => {
  const {
    page: {
      home: { section2 },
    },
  } = await getDictionary(lang);
  const Imageurl = `/assets/homePage/section2/`;

  return (
    <>
      <section
        id="section2"
        className="flex flex-col justify-between
         w-[calc(100%-15px)] full gap-6 p-4 border border-gray-400/40 center rounded-b-md"
      >
        <div className="w-full">
          <Title title={section2.title} />
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 place-items-center">
          <CardWithImage
            title={section2.S2L1}
            imageUrl={Imageurl + "infra.jpg?=v1"}
            link={`/blog/infraStrcture`}
            des={section2.S2D1}
          />
          <CardWithImage
            title={section2.S2L2}
            imageUrl={Imageurl + "codeing.jpg?=v001"}
            link={`/blog/nextjs`}
            des={section2.S2D2}

            />
          <CardWithImage
            title={section2.S2L3}
            des={section2.S2D3}
            imageUrl={Imageurl + "server.jpg?=v1"}
            link={`/blog/scaleapp`}
            />
          <CardWithImage
            title={section2.S2L4}
            des={section2.S2D4}
            imageUrl={Imageurl + "content.jpg?=v1"}
            link={`/blog/mutilanguage`}
          />

          <CardWithImage
            title={section2.S2L5}
            des={section2.S2D5}
            imageUrl={Imageurl + "multiLang.jpg?=v1"}
            link={`/blog/sslSecurity`}
            />
          <CardWithImage
            title={section2.S2L6}
            des={section2.S2D6}
            imageUrl={Imageurl + "markting.jpg?=v1"}
            link={`/blog/socailPost`}
            />


          <CardWithImage
            title={section2.S2L7}
            des={section2.S2D7}
            imageUrl={Imageurl + "ssl.jpg?=v1"}
            link={`/blog/planYourWebsite`}
            />
          <CardWithImage
            title={section2.S2L8}
            des={section2.S2D8}
            imageUrl={Imageurl + "support.jpg?=v1"}
            link={`/blog/freesupport`}
            />

             <CardWithImage
            title={section2.S2L9}
            des={section2.S2D9}
            imageUrl={Imageurl + "techsupport.jpg?=v1"}
            link={`/blog/getclients`}
          />
        </div>
      </section>
    </>
  );
};
