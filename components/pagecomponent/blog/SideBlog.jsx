"use client";
import React, { useState, useEffect } from "react";
import { showAllTag } from "./sendFileToDb/_action";
import { Badge } from "@/components/ui/badge";

function SideBlog({ tags }) {
  const [small, SetSmall] = useState(false);
  const [pointer, SetPointer] = useState("");

  const btnStyle =
    "absolute top-100 rotate-90 bg-purple-500 px-6 py-1 rounded-md   left-1 -translate-x-1/2 shadow-lg duration-200 cursor-pointer";
  const btnStyle1 =
    "absolute top-[150px] rotate-90 bg-purple-500 px-6 py-1 rounded-md   left-1 -translate-x-1/2 shadow-lg duration-200 cursor-pointer";
  const container =
    "flex flex-col  items-center h-[100dvh] justify-center gap-16 relative bg-primary duration-300  ";
  const widthSize = small ? " w-1/3" : " w-4";

  const handleFrequantluy = () => {
    SetPointer("Frequantluy");
    SetSmall(!small);
  };
  const handleTag = () => {
    SetPointer("Tag");
    SetSmall(!small);
  };

  return (
    <>
      <div className={`${container} ${widthSize}`}>
        <div onClick={() => handleTag()} className={btnStyle}>
          Tag
        </div>
        <div onClick={() => handleFrequantluy()} className={btnStyle1}>
          Frequantluy
        </div>
        <div className="p-8 m-auto  w-full h-full bg-secondary border ">
          {pointer === "Tag" ? <ShowTag tags={tags} /> : <ShowFreq />}
        </div>
      </div>
    </>
  );
}

export default SideBlog;

const ShowTag = ({ tags }) => {
  const [data, setData] = useState(tags);

  if (!data) return <p>No tag data</p>;

  return (
    <>
      <div className="flex w-full flex-wrap gap-4 items-center justify-start text-white">
        {data.map((tag) => {
          return (
            <div key={tag.title}>
              <Badge variant="outline">{tag.title}</Badge>
            </div>
          );
        })}
      </div>
    </>
  );
};

// -------------
const ShowFreq = () => {
  return <>{/* <div>{JSON.stringfy(getData)}</div> */}</>;
};
