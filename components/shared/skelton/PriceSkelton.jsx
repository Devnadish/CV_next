import { HiOutlineEye } from "@react-icons/all-files/hi/HiOutlineEye";
export default function PriceSkelton() {
  const isLoaded = true;

  return (
    <div className="flex flex-col animate-pulse border-2 border-gray-400/50 rounded-lg w-[300px] p-4">
      <div className="w-full ">
        <h3
          className="h-16 bg-gray-600 rounded-md dark:bg-gray-700"
          style={{ width: "100%" }}
        ></h3>

        <ul className="mt-5 space-y-3">
          <li className="w-full h-8 bg-gray-400 rounded-md dark:bg-gray-700"></li>
          <li className="w-full h-8 bg-gray-400 rounded-md dark:bg-gray-700"></li>
          <li className="w-full h-8 bg-gray-400 rounded-md dark:bg-gray-700"></li>
          <li className="w-full h-8 bg-gray-400 rounded-md dark:bg-gray-700"></li>
          <li className="w-full h-8 bg-gray-400 rounded-md dark:bg-gray-700"></li>
          <li className="w-full h-8 bg-gray-400 rounded-md dark:bg-gray-700"></li>
          <li className="w-full h-8 bg-gray-400 rounded-md dark:bg-gray-700"></li>
        </ul>
      </div>
    </div>
  );
}
