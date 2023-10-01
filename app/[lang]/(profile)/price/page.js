import { BiHappyAlt } from "@react-icons/all-files/bi/BiHappyAlt";
import { Package } from "@/components/pagecomponent/price/Package";
import PageContainer from "@/components/shared/pagecontainer/PageContainer";
import { getDictionary } from "@/lib/dictionary";
export const revalidate = 0;
export const dynamic = "force-dynamic";

async function page({ params: { lang } }) {
  const {
    page: { pricePkg },
  } = await getDictionary(lang);
  return (
    <>
      <PageContainer>
        {/* <h1>{process.env.NEXT_PUBLIC_API_URL}</h1>
        <h1 className="text-2xl text-black">{ dd.user }</h1> */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 place-items-start ">
          <Package
            category={pricePkg.standerd.title}
            offerIcon={<BiHappyAlt size={"1.5rem"} />}
            facility={pricePkg.standerd.facility}
            price={pricePkg.standerd.price}
            lang={lang}
          />
          <Package
            category={pricePkg.plus.title}
            offerIcon={<BiHappyAlt size={"1.5rem"} />}
            facility={pricePkg.plus.facility}
            price={pricePkg.plus.price}
            recommend={true}
            lang={lang}
          />
          <Package
            category={pricePkg.advance.title}
            offerIcon={<BiHappyAlt size={"1.5rem"} />}
            facility={pricePkg.advance.facility}
            price={pricePkg.advance.price}
            lang={lang}
          />
        </div>
      </PageContainer>
    </>
  );
}

export default page;
