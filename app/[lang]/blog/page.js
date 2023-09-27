import getPostMetadata from "@/lib//getPostMetadata";
import PostPreview from "@/components/blogcomponent/PostPreview";
import PageContainer from "@/components/shared/pagecontainer/PageContainer";
import { getCounter } from "@/lib/getCouners";
import myblog from "@/myblogs.json";

export const revalidate = 0;
export const dynamic = "force-dynamic";

const page = async ({ params: { lang } }) => {
  const postMetadata = getPostMetadata(lang);
  let GetcounterData = await getCounter();
  console.log(GetcounterData)

  return (
    <PageContainer>
      <div className="grid w-full grid-cols-1 gap-4 place-items-center sm:grid-cols-2 sm:gap-4 md:grid-cols-3 ">
        {postMetadata.map(async (post) => {
          return (
            <PostPreview
              key={post.slug}
              {...post}
              lang={lang}
              data={GetcounterData}
            />
          );
        })}
      </div>
    </PageContainer>
  );
};

export default page;
