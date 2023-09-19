import fs from "fs";
import path from "path";
import matter from "gray-matter";
// import { PostMetadata } from "./PostMetadata";

const getPostMetadata = (lang ) => {

  const folder = path.join(process.cwd(), "posts");
  const files = fs.readdirSync(folder);
  const filteredArr = files.filter(item => item.startsWith(lang));
  const markdownPosts = filteredArr.filter((file) => file.endsWith(".md"));
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`${folder}/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace(".md", ""),
    };
  });

  return posts;
};

export default getPostMetadata;
