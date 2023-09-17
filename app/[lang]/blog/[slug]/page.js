import Markdown from "markdown-to-jsx";
import allgetPostMetadata from "@/lib/allgetPostMetadata";
import PageContainer from "@/components/shared/pagecontainer/PageContainer";
import dynamic from "next/dynamic";
import { NEWSLUG } from "@/lib/slugWithLang";
import { MDoptions } from "@/lib/MDoption/mdOption";
import { getPostContent } from "@/lib/blog/getPostContent";
const GoBack = dynamic(() => import("@/components/shared/goBack/GoBack"));



export async function generateMetadata({ params }) {
  const post = getPostContent(params.slug, params.lang);
  // console.log(params.slug);
  return {
    title: post.data.title,
    description: post.data.subtitle,
  };
}


export const generateStaticParams = async () => {
  const posts = allgetPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage =async (props) => {
  // await visitSlug(props.params.slug)
  const post = getPostContent(NEWSLUG(props.params.slug,props.params.lang), props.params.lang);



  return (
    <>
      <PageContainer>
        {/* {JSON.stringify(props)}{props.params.lang} */}
        <div className="w-full px-4 py-4 mx-auto">
          <div className="flex items-center justify-between px-4 my-4 rounded-md shadow-xl bg-slate-700">
            <GoBack />
            <h1 className="p-2 text-2xl capitalize text-slate-200 ">
              {post.data.title}
            </h1>
            <p className="text-xs text-slate-400">{post.data.date}</p>
          </div>
          <article className="flex items-center justify-center min-w-[80%] mx-auto prose font-tajawal text-slate-200 ">
            <Markdown options={MDoptions}>{post.content}</Markdown>
          </article>
        </div>
      </PageContainer>
    </>
  );
};

export default PostPage;
