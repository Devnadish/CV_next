"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const BlogSearchInput = () => {
  const search = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(search ? search.get("q") : "");
  const router = useRouter();

  const onSearch = (event) => {
    event.preventDefault();
    if (typeof searchQuery !== "string") {
      return;
    }
    const encodedSearchQuery = encodeURI(searchQuery);
    console.log(encodedSearchQuery);
    // router.push(`bloganalitic/search?q=${encodedSearchQuery}`);
    router.push(`/blog/lookup/${encodedSearchQuery}`);
    // <Link href={"/" + router.query.tenantId + "/jobdetails/12312"}></Link>
  };

  return (
    <form onSubmit={onSearch} className="flex justify-center w-2/3">
      <input
        value={searchQuery || ""}
        onChange={(event) => setSearchQuery(event.target.value)}
        className="px-5 py-1 w-2/3 border sm:px-5 sm:py-3 flex-1 text-zinc-200 bg-zinc-800 focus:bg-black rounded-full focus:outline-none focus:ring-[1px] focus:ring-green-700 placeholder:text-zinc-400"
        placeholder="What are you looking for? --> Or Type [ all ] "
      />
    </form>
  );
};

export default BlogSearchInput;
