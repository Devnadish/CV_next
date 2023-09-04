import fs from "fs";
import path from "path";
import matter from "gray-matter";
// import { PostMetadata } from "./PostMetadata";

const getPostMetadata = () => {
  // console.log(path.dirname(__filename));
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  // console.log(files,folder)
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // Get gray-matter data from each file.
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
