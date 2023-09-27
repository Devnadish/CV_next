import React from 'react'
import Link from 'next/link'




 function page() {

    const menuItem = [
        { menuTitle: "Grap Blog", menuLink: "/dashboard/bloglist" },
        { menuTitle: "Tags", menuLink: "/dashboard/tag" },
        { menuTitle: "Blog Analitic", menuLink: "/dashboard/bloganalitic" },
        { menuTitle: "Add service", menuLink: "/blog" },
      ];

  return (
    <>
    <div className="flex items-center justify-center w-full gap-4 p-4 text-white bg-slate-500 text-2xl">dashboard</div>
    <div className="flex flex-col items-center justify-center w-full h-full gap-4">
     {menuItem.map(
         (item, index) =>      {
       return (
         <>
           <div
             className="p-4 text-xl  text-white bg-green-500 border border-gray-400 rounded-lg cursor-pointer"
             key={index}
           >
            <Link href={item.menuLink}>
             {item.menuTitle}
             </Link>
           </div>
         </>
       );
       }
       )
     }
    </div>
    </>
  )
}

export default page