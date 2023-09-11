import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import allgetPostMetadata from "@/lib/allgetPostMetadata";
// import getPostMetadata from "../../../../components/getPostMetadata";
import PageContainer from "@/components/pagecontainer/PageContainer";
import dynamic from "next/dynamic";
// import {getIp} from "@/lib/getIp"



export const getIP =async ()=>  {
  try {
    const response = await fetch('https://api.ipify.org ');
// console.log(response);
    return  response;
  } catch (error) {
    console.log(error);
  }
};



const GoBack = dynamic(() => import("@/components/shared/goBack/GoBack"));

const getPostContent = (slug, lang) => {
  const folder = `posts/`;
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = allgetPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage =   (props    ) => {
 const Ip=   getIP()

  // console.log(JSON.stringify(Ip));

  // change this first two characters to getPostContent if the language chage immediately
  const slug = props.params.slug;
  const replacement = props.params.lang;
  const newSlug = replacement + slug.slice(2);
  // get the new slug

  const post = getPostContent(newSlug, props.params.lang);
  const options = {
    overrides: {
      // Override the default rendering of certain elements
      h2: {
        component: 'h2',
        props: {
          style: { color: 'red' }, // Apply custom styles
        },
      },
      h3: {
        component: 'h3',
        props: {
          style: { color: 'red' }, // Apply custom styles
        },
      },
      p: {
        component: 'p',
        props: {
          style: { color: "white",width:"100%" },
        },
      },
    },
  };


  return (
    <>
      <PageContainer>
        {/* {JSON.stringify(props)}{props.params.lang} */}
        <div className="w-full px-4 py-4 mx-auto">
          <div className="flex items-center justify-between px-4 my-4 rounded-md shadow-xl bg-slate-700">
            <GoBack />
            <h1 className="p-2 text-2xl capitalize text-slate-200 ">  {post.data.title}   </h1>
            <p className="text-xs text-slate-400">{post.data.date}</p>
          </div>
          <article className="flex items-center justify-center min-w-[80%] mx-auto prose font-tajawal text-slate-200 ">
            <Markdown  options={options}>
              {post.content}
              </Markdown>
          </article>
        </div>
      </PageContainer>
    </>
  );
};

export default PostPage;
