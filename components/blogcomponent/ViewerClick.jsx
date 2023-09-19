"use client";
import React,{useState,useEffect} from 'react'
import { useRouter } from 'next/navigation'
function ViewerClick({ title, slug, lang, children }) {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  const handleIncrease = async () => {
    try {
      const url = `${process.env.NEXT_PUBLIC_API_URL}/api/blog/blogvisitor/${slug}`;
      const options = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(slug),
      };

      const response = await fetch(url, options);
      const data = await response.json();

      router.push(`/${lang}/blog/${slug}`);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted && <BtnClick handleIncrease={handleIncrease} title={title}/>;
}

export default ViewerClick


const BtnClick=({handleIncrease,title})=>{
  return(
    <div className="flex items-center justify-center p-2 transition-all transform bg-blue-600/70 dark:bg-zinc-800/90 hover:scale-110">
      <button
        className="font-semibold text-center text-white text-md hover:underline font-tajawal"
        onClick={handleIncrease}
      >
        {title}
      </button>
    </div>
  )}