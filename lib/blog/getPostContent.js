import fs from "fs";
import matter from "gray-matter";

import path from "path";

export const getPostContent = (slug, lang) => {
  // const folder = `posts/`;
  const folder = path.join(process.cwd(), "posts");
  const file = `${folder}/${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  console.log(matterResult);
  return matterResult;
};
