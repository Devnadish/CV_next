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
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 place-items-start ">
          <Package
            category={pricePkg.standerd.title}
            offerIcon={<BiHappyAlt size={"1.5rem"} />}
            facility={pricePkg.standerd.facility}
            price={pricePkg.standerd.price}
            cur={pricePkg.standerd.cur}
            subtitle={pricePkg.standerd.subtitle}
            lang={lang}
          />
          <Package
            category={pricePkg.plus.title}
            offerIcon={<BiHappyAlt size={"1.5rem"} />}
            facility={pricePkg.plus.facility}
            price={pricePkg.plus.price}
            cur={pricePkg.plus.cur}
            recommend={true}
            subtitle={pricePkg.plus.subtitle}
            lang={lang}
            hint={pricePkg.plus.hint}
          />
          <Package
            category={pricePkg.advance.title}
            offerIcon={<BiHappyAlt size={"1.5rem"} />}
            facility={pricePkg.advance.facility}
            price={pricePkg.advance.price}
            // cur={pricePkg.standerd.cur}
            lang={lang}
            subtitle={pricePkg.advance.subtitle}
          />
        </div>
      </PageContainer>
    </>
  );
}

export default page;
