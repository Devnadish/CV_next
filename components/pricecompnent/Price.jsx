// 'use client'
import Btn from "@/components/shared/btn/Btn";
import { GiRotaryPhone } from "@react-icons/all-files/gi/GiRotaryPhone";
export function Price({ price, cur = "sr", recommend = false, lang }) {
  return (
    <div className="flex items-center w-full px-2 bg-red-500 justify-evenly">
      <div className="ml-2">
        <OrderNow />
      </div>
      <h1
        className="text-center text-white  font-extrabold text-[2rem] px-2 "
        style={{
          color: recommend ? "white" : "black",
        }}
      >
        {price}
        <span className="px-2 text-sm text-blue-gray-50">Sr</span>
      </h1>
    </div>
  );
}

const OrderNow = () => {
  return (
    <>
      <Btn
        type="button"
        icon={<GiRotaryPhone className="flex items-center mr-2 text-2xl" />}
        className="px-2 py-2.5 text-sm font-medium text-white  items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Order Now
      </Btn>
    </>
  );
};
