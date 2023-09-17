import { HiOutlineEye } from "@react-icons/all-files/hi/HiOutlineEye";
export default function WorkeSkelton() {
  const isLoaded = true;

  return (
    <div className="flex flex-col animate-pulse border-2 border-gray-400/50 rounded-lg w-[150px] h-[150px] p-4">
      <div className="w-full ">
        <ul className="space-y-3">
          <li className="w-full h-4 bg-gray-400 rounded-md dark:bg-gray-700"></li>
          <li className="w-full h-16 bg-gray-400 rounded-md dark:bg-gray-700" ></li>
          <li className="w-full h-4 bg-gray-400 rounded-md dark:bg-gray-700"></li>
        </ul>
      </div>
    </div>
  );
}
