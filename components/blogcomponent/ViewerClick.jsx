"use client";
import React from 'react'
import { useRouter } from 'next/navigation'
function ViewerClick({ title, slug, lang }) {
  const router = useRouter();

  const handleIncrease = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/blog/blogvisitor/${slug}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(slug),
        }
      );
      const data = await response.json();
      router.push(`/${lang}/blog/${slug}`);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex items-center justify-center p-2 transition-all transform bg-blue-600/70 dark:bg-zinc-800/90 hover:scale-110">
      <button
        className="font-semibold text-center text-white text-md hover:underline font-tajawal"
        onClick={handleIncrease}
      >
        {title}
      </button>
    </div>
  );
}

export default ViewerClick