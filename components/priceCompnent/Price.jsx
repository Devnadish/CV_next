// 'use client'
import Btn from "@/components/shared/btn/Btn";
import {GiRotaryPhone} from "react-icons/gi"
export function Price({ price, cur = "sr" }) {
  // console.log(cur)
  return (
    <div className="flex items-center justify-between w-full">
      <div className="ml-2">

     <OrderNow/>
      </div>
      <h1 className="w-fit text-center text-white  font-extrabold mr-2 text-[3rem] ">
        {price}
        <span className="ml-1 text-lg text-blue-gray-50">Sr</span>
      </h1>
    </div>
  );
}


const OrderNow=()=>{
  return (
    <>
      <Btn
        type="button"
        icon={<GiRotaryPhone className="flex items-center mr-2 text-2xl"/>}
        className="px-5 py-2.5 text-sm font-medium text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >

        Order Now
      </Btn>
    </>
  );
}