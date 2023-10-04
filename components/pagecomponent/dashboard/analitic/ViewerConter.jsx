"use client";

import { Button } from "@/components/ui/button";
import { decreaseBlogViewers, increaseBlogViewers } from "./dbAction/_action";

function ViewerConter({ viewer, id }) {
  const plusOne = (id) => {
    increaseBlogViewers(id);
  };
  const minuesOne = (id) => {
    decreaseBlogViewers(id);
  };

  return (
    <div className="flex items-center w-full py-2 justify-evenly">
      <Button
        onClick={() => plusOne(id)}
        className="flex items-center justify-center w-8 h-8 bg-purple-600 hover:bg-purple-400"
      >
        <p className="mb-[5px] text-2xl font-bold text-white">+</p>
      </Button>
      <p className="self-center text-2xl font-bold text-green-600">{viewer}</p>
      <Button
        disabled={viewer === 0}
        onClick={() => minuesOne(id)}
        className="flex items-center justify-center w-8 h-8 p-0 bg-red-600 hover:bg-red-400 disabled:bg-gray-700 "
      >
        <p className="mb-[5px] text-2xl font-bold text-white">-</p>
      </Button>
    </div>
  );
}
export default ViewerConter;
