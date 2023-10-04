import { HiOutlineEye } from "@react-icons/all-files/hi/HiOutlineEye";
export default function AnalitocBlogSkelton() {
  const isLoaded = true;

  return (
    <div className="flex flex-col animate-pulse border rounded-lg w-[250px] p-4 gap-4">
      <div className="w-full ">
        <ul className="space-y-3">
          <li className="w-full h-10 bg-gray-400 rounded-md dark:bg-gray-700"></li>
          <li className="w-full h-24 bg-gray-400 rounded-md dark:bg-gray-700"></li>
          <li className="w-full h-10 bg-gray-400 rounded-md dark:bg-gray-700"></li>
        </ul>
      </div>
    </div>
  );
}
