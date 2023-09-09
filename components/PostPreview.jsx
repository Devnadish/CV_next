import Link from "next/link";
import { HiOutlineEye } from "react-icons/hi";

const PostPreview = ({ subtitle, title, date, counter = 100, slug,lang }) => {
  console.log(slug, title, date, subtitle)
  return (
    <div className="flex flex-col justify-between  p-4 bg-white border rounded-md shadow-sm  min-w-[350px] max-w-[350px] sm:min-w-[300px] sm:max-w-[300px] md:min-w-[230px] md:max-w-[250px] border-slate-300 ">
      <div className="flex items-center justify-between p-2 transition-all transform bg-gray-200 rounded-md hover:scale-110">
        <Link href={`/blog/${slug}`}>
          <h2 className="text-center text-md text-violet-600 hover:underline">
            {title}
          </h2>
        </Link>
      </div>

      <div className="flex flex-col justify-start w-full gap-3 p-4 mt-2 rounded-md bg-slate-800">
        <p className=" text-tiny text-slate-200 line-clamp-1 hover:line-clamp-none">
          {subtitle}
        </p>
        <div className="flex justify-between">
          <div className="flex justify-start">
            <HiOutlineEye color="white" />
            <p className="ml-2 text-tiny text-slate-200 ">{counter}</p>
          </div>
          <p className="text-left text-tiny text-slate-100/50 ">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default PostPreview;
