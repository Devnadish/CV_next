
import getPostMetadata from "@/lib//getPostMetadata";
import PostPreview from "@/components/blogcomponent/PostPreview";
import PageContainer from   "@/components/shared/pagecontainer/PageContainer";


// export const revalidate = true;
export const revalidate = 0;
export const dynamic = 'force-dynamic'



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
    return data
  } catch (error) {
    console.error('An error occurred during the fetch request:', error);
    // Handle the error gracefully (e.g., show a fallback value or provide a default counter)
    return null;
  }
};



const page = async ({params: { lang }}) => {
  const postMetadata = getPostMetadata(lang);
  let GetcounterData = await getCounter()

  return (
    <PageContainer>
      <h1>{process.env.NEXT_PUBLIC_API_URL}</h1>

      <div className="grid w-full grid-cols-1 gap-4 place-items-center sm:grid-cols-2 sm:gap-4 md:grid-cols-3 ">
        {postMetadata.map(async (post) => {
          return(<PostPreview key={post.slug} {...post} lang={lang} data={GetcounterData} />);
        })}
      </div>
    </PageContainer>
  );
};

export default page;

