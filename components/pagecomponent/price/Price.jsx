import { Button } from "@/components/ui/button";
import { FaThumbsUp } from "@react-icons/all-files/fa/FaThumbsUp";
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
      <Button type="button" variant="secondary">
        <FaThumbsUp className="flex items-center mr-2 text-2xl" />
        <span>Order Now</span>
      </Button>
    </>
  );
};
