import { BiHappyAlt } from "@react-icons/all-files/bi/BiHappyAlt";
import { Package } from "@/components/pricecompnent/Package";
import PageContainer from "@/components/shared/pagecontainer/PageContainer";
import { getDictionary } from "@/lib/dictionary";

async function page({ params: { lang } }) {
  const {
    page: { pricePkg  },
  } = await getDictionary(lang);

  // console.log(pricePkg);
  return (
    <>
      <PageContainer>
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
