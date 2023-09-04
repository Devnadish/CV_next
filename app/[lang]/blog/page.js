import getPostMetadata from "@/components/getPostMetadata";
import PostPreview from "@/components/PostPreview";
import PageContainer from "@/components/pagecontainer/PageContainer";
const page = () => {
  const postMetadata = getPostMetadata();
  // const postPreviews = postMetadata.map((post) => (
  //     <PostPreview key={post.slug} {...post} />
  // ));

  return (
    <PageContainer>
    <div className="grid w-full grid-cols-1 gap-4 place-items-center sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
     { postMetadata.map((post) => (
      <PostPreview key={post.slug} {...post} />
  ))}

      </div>
    </PageContainer>
  );
};

export default page;
