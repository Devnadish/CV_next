import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../../../components/getPostMetadata";
import PageContainer from "@/components/pagecontainer/PageContainer";
import dynamic from "next/dynamic";
const GoBack = dynamic(() => import("@/components/shared/goBack/GoBack"));

const getPostContent = (slug) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = (props) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <PageContainer>
      <div className="min-w-2xl">
        <GoBack />

        <div className="flex items-center justify-between px-4 my-4 rounded-md shadow-xl bg-slate-700">
          <h1 className="p-4 text-2xl capitalize text-slate-200 ">
            {post.data.title}
          </h1>
          <p className="mt-2 text-tiny text-slate-400">{post.data.date}</p>
        </div>

        <article className="w-full prose font-tajawal md:prose-2xl text-slate-200 ">
          <Markdown>{post.content}</Markdown>
        </article>
      </div>
    </PageContainer>
  );
};

export default PostPage;
