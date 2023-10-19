import Markdown from "markdown-to-jsx";
import allgetPostMetadata from "@/lib/allgetPostMetadata";
import PageContainer from "@/components/shared/pagecontainer/PageContainer";
import dynamic from "next/dynamic";
import { NEWSLUG } from "@/lib/slugWithLang";
import { MDoptions } from "@/lib/MDoption/mdOption";
import { getPostContent } from "@/lib/blog/getPostContent";
const GoBack = dynamic(() => import("@/components/shared/goBack/GoBack"));
export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const post = getPostContent(params.slug, params.lang);

  return {
    title: post.data.title,
    description: post.data.subtitle,
  };
}

export const generateStaticParams = async () => {
  const posts = await allgetPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const Page = async ({ params }) => {
  // await visitSlug(props.params.slug)
  const { slug } = params;
  const post = getPostContent(NEWSLUG(params.slug, params.lang), params.lang);
  return (
    <>
      <PageContainer>
        <div className="w-full px-4 py-4 mx-auto">
          <div className="flex items-center justify-between px-4 my-4 rounded-md shadow-xl bg-primary/70">
            <GoBack />
            <h1 className="p-2 text-2xl capitalize text-foreground ">
              {post.data.title}
            </h1>
            <p className="text-xs text-forground">{post.data.date}</p>
          </div>
          <article className="flex items-center justify-center min-w-[100%] mx-auto prose font-tajawal text-foreground bg-primary/20 rounded-sm p-4">
            <Markdown>{post.content}</Markdown>
          </article>
        </div>
      </PageContainer>
    </>
  );
};

export default Page;
