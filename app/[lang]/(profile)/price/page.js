import { BiHappyAlt } from "@react-icons/all-files/bi/BiHappyAlt";
import { Package } from "@/components/pricecompnent/Package";
import PageContainer from "@/components/shared/pagecontainer/PageContainer";
import { getDictionary } from "@/lib/dictionary";


const getCounter = async () => {
  try {
    // const response = await fetch(`http://localhost:3000/api/blog/blogvisitor`,{
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blog/blogvisitor`,{
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    } ,{
      cache: 'no-cache',
    });
    const data = await response.json();
    // const data = await response.json();
console.log(data.blogs[0])
    return data.blogs[0]
  } catch (error) {
    console.error('An error occurred during the fetch request:', error);
    // Handle the error gracefully (e.g., show a fallback value or provide a default counter)
    return null;
  }
};





async function page({ params: { lang } }) {
  const {
    page: { pricePkg  },
  } = await getDictionary(lang);
const dd= await getCounter()


  return (
    <>
      <PageContainer>
      <h1>{process.env.NEXT_PUBLIC_API_URL}</h1>
        <h1 className="text-2xl text-black">{ dd.user }</h1>
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
