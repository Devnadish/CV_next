"use server";
import { UseBlogLinkHook } from "@/lib/hooks/UseBlogLinkHook";
import Link from "next/link";
import { redirect } from "next/navigation";

export const getSearchPath = async (searchPath, lang = "en") => {
  const BlogPath = await UseBlogLinkHook(searchPath);
  if (!BlogPath[0]?.slug) {
    return false;
  }
  redirect(`/${lang}/blog/${BlogPath[0]?.slug}`);
  //   return true;
};

//   <Link href={`/${lang}/blog/${BlogPath[0]?.slug}`} prefetch={false}></Link>;
// setLoading(false);
//   router.push(`/${lang}/blog/${BlogPath[0]?.slug}`);
