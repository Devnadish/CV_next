import { BiHappyAlt } from "react-icons/bi";
import PakageDetail from "@/components/pricecompnent/Pakagedetail.json";
import { Package } from "@/components/pricecompnent/Package";
import PageContainer from "@/components/pagecontainer/PageContainer";

async function page({ test }) {
  return (
    <>
      <PageContainer>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 place-items-start ">
          <Package
            category={PakageDetail.pkg1.title}
            offerIcon={<BiHappyAlt size={"1.5rem"} />}
            facility={PakageDetail.pkg1.facility}
            price={PakageDetail.pkg1.price}
            cur={PakageDetail.pkg1.cur}
          />
          <Package
            category={PakageDetail.pkg2.title}
            offerIcon={<BiHappyAlt size={"1.5rem"} />}
            facility={PakageDetail.pkg2.facility}
            price={PakageDetail.pkg2.price}
            cur={PakageDetail.pkg2.cur}
            recommend={true}
          />
          <Package
            category={PakageDetail.pkg3.title}
            offerIcon={<BiHappyAlt size={"1.5rem"} />}
            facility={PakageDetail.pkg3.facility}
            price={PakageDetail.pkg3.price}
            cur={PakageDetail.pkg3.cur}
          />
        </div>
      </PageContainer>
    </>
  );
}

export default page;
