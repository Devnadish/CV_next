import Link from "next/link";
import { HiOutlineEye } from "react-icons/hi";



const PostPreview = ({ subtitle, title, date, counter = 100, slug, lang }) => {
  // console.log(slug, title, date, subtitle)
  return (
    <div className="flex flex-col w-full
     justify-between overflow-hidden
       bg-zinc-800 border rounded-md
        shadow-sm  min-w-[300px] max-w-[300px] sm:min-w-[300px] sm:max-w-[300px] md:min-w-[230px] md:max-w-[250px] border-zinc-500  ">
      <Title title={title} slug={slug}/>
      <Subtitle subtitle={subtitle}/>
      <Viewer date={date} counter={counter}/>
    </div>
  );
};

export default PostPreview;
function Subtitle(props) {
  return (
    <p className="p-4 text-sm text-slate-200 line-clamp-1 hover:line-clamp-none font-tajawal">
      {props.subtitle}
    </p>
  );
}

function Viewer(props) {
  return (
    <div className="flex items-center justify-between w-full gap-3 px-4 pt-4 ">
      <div className="flex justify-start gap-2 py-1">
        <HiOutlineEye className="w-4 h-4 text-xs text-zinc-400/50 " />
        <p className="text-xs text-zinc-400/50 ">{props.counter}</p>
      </div>
      <p className="text-xs text-slate-100/50 ">{props.date}</p>
    </div>
  );
}
function Title(props) {
  return (
    <div className="flex items-center justify-between p-2 transition-all transform bg-zinc-700/50 hover:scale-110 ">
      <Link href={`/blog/${props.slug}`}>
        <h2 className="text-center text-white text-md hover:underline font-tajawal font-semibold">
          {props.title}
        </h2>
      </Link>
    </div>
  );
}