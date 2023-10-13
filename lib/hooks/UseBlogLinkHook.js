import { getBlogpath } from "./_action.js";
export async function UseBlogLinkHook(searchPath) {
  const BlogPath = await getBlogpath(searchPath);
  return BlogPath;
}
