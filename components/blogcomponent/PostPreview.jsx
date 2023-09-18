import Link from "next/link";
import { HiOutlineEye } from "@react-icons/all-files/hi/HiOutlineEye";
import ViewerClick from "./ViewerClick";
import { getTimeElapsed } from "@/lib/calculateTimeAndDate";

const PostPreview = ({ subtitle, data, title, slug, lang }) => {
  // console.log("data : ", data.blogs);
  // let filteredItems = filterItems(data?.blogs, slug);
  // let lookup = search( slug,data?.blogs);
  // console.log("lookup : ", lookup.user);
  // let couter;
  // if (filteredItems[0].counter === undefined) {
  //   couter = 0;
  // } else {
  //   couter = filteredItems[0].counter;
  // }

  return (
    <div
      className="flex flex-col w-full min-w-[320px] max-w-[320px]
                 justify-between overflow-hidden
                bg-white dark:bg-zinc-700  border rounded-md
                  shadow-lg
                  border-3 border-gray-500"

      // md:min-w-[230px] md:max-w-[250px] "
    >
      <ViewerClick title={title} slug={slug} lang={lang} />
      {/* <Title title={title} slug={slug} lang={lang}/> */}
      <Subtitle subtitle={subtitle} />
      <Viewer
        // blogLastView={getTimeElapsed(lookup.updatedAt)}
        // blogCounter={lookup.counter}
      />
    </div>
  );
};

export default PostPreview;
function Subtitle(props) {
  return (
    <p className="p-4 text-sm text-black dark:text-white/70 line-clamp-1 hover:line-clamp-none font-tajawal">
      {props.subtitle}
    </p>
  );
}

function Viewer({blogCounter,blogLastView}) {
  return (
    <div className="flex items-center justify-between w-full h-8 gap-3 px-4 bg-slate-200 dark:bg-zinc-600 ">
      <div className="flex justify-start gap-2">
        <HiOutlineEye className="w-4 h-4 text-black/60 dark:text-white/50 " />
        <p className="text-xs text-black dark:text-white/50">{blogCounter}</p>
      </div>
      <p className="text-xs text-black dark:text-white/50">{blogLastView}</p>
    </div>
  );
}
function Title(props) {
  return (
    <div className="flex items-center justify-center p-2 transition-all transform bg-zinc-700/50 hover:scale-110 ">
      <Link
        prefetch={false}
        href={`/blog/${props.slug}`}
        as={`/${props.lang}/blog/${props.slug}`}
      >
        <h2 className="font-semibold text-center text-white text-md hover:underline font-tajawal">
          {props.title}
        </h2>
      </Link>
    </div>
  );
}
function filterItems(items, searchParam) {
  const filteredItems = items?.filter((item) => {
    console.log("Filtering item:", item.blog);
    return item?.blog?.includes(searchParam);
  });

  console.log("Search Parameter:", searchParam);
  console.log("Filtered Items:", filteredItems);

  return filteredItems;
}


function search(nameKey, myArray){
  console.log("nameKey:", nameKey);
  let index=0
  for (let i=0; i < myArray.length; i++) {
      if (myArray[i].blog === nameKey) {
        //  console.log(myArray[i]);
        index=i

      }
  }
  return myArray[index];
}