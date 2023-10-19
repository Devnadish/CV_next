import React from "react";
import ShowTag from "@/components/pagecomponent/blog/ShowTag";
function Tags(props) {
  return (
    <div className="relative border max-h-[50vh] rounded-lg shadow-xl py-4 border-foreground/30 ">
      <div className="absolute left-5 top-0 -translate-y-[50%] border px-4 rounded-xl bg-primary text-sm  ">
        Tags
      </div>
      <ShowTag tags={props.tags} blogCont={props.length} />
    </div>
  );
}

export default Tags;
