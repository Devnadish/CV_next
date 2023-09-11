import getPostMetadata from "@/lib//getPostMetadata";
import PostPreview from "@/components/blogcomponent/PostPreview";
import PageContainer from "@/components/pagecontainer/PageContainer";



const page = ({params: { lang }}) => {
  const postMetadata = getPostMetadata(lang);
// console.log("language :" ,lang)
  return (
    <PageContainer>
      <div className="grid w-full grid-cols-1 gap-4 place-items-center sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
        {postMetadata.map((post) => (
          <PostPreview key={post.slug} {...post} lang={lang} />
        ))}
      </div>
    </PageContainer>
  );
};

export default page;
