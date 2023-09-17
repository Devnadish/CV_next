import fs from "fs";
import matter from "gray-matter";

export const getPostContent = (slug, lang) => {
    const folder = `posts/`;
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult;
  };
