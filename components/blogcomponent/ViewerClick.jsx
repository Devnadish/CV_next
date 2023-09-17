"use client";
import React from 'react'
import { useRouter } from 'next/navigation'
function ViewerClick({title, slug, lang}) {
    const router = useRouter();
    const handelIncrese = () => {
      console.log("ViewerClick")
        fetch(`http://localhost:3000/api/blog/blogvisitor/${slug}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(slug),
        }).then((res) => res.json())
        router.push(`/${lang}/blog/${slug}`)
    }


  return (
    <div className="flex items-center justify-center p-2 transition-all transform bg-blue-600/70 dark:bg-zinc-800/90 hover:scale-110 ">
      <button
        className="font-semibold text-center text-white text-md hover:underline font-tajawal"
        onClick={handelIncrese}
      >
        {title}
      </button>
    </div>
  );
}

export default ViewerClick