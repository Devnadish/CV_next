import { HiOutlineEye } from "@react-icons/all-files/hi/HiOutlineEye";
export default function BlogSkelton() {
  const isLoaded = true;

  return (
    <div className="flex flex-col animate-pulse border-2 rounded-lg w-[300px] p-4">
      <HiOutlineEye className="block w-12 h-12 font-light text-gray-400 rounded-full dark:bg-gray-700" />
      <div className="w-full ">
        <h3
          className="h-4 bg-gray-200 rounded-md dark:bg-gray-700"
          style={{ width: "100%" }}
        ></h3>

        <ul className="mt-5 space-y-3">
          <li className="w-full h-4 bg-gray-400 rounded-md dark:bg-gray-700"></li>
          <li className="w-full h-4 bg-gray-400 rounded-md dark:bg-gray-700"></li>
        </ul>
      </div>
    </div>
  );
}
