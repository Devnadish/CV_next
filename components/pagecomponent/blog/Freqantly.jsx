import React from "react";
import ShowFreqy from "@/components/pagecomponent/blog/ShowFreqy";

function Freqantly({ freq }) {
  console.log(freq);
  return (
    <div className="relative border max-h-[50vh] rounded-lg shadow-xl py-4 border-foreground/30 ">
      <div className="absolute left-5 top-0 -translate-y-[50%] border px-4 rounded-xl bg-primary text-sm  ">
        Freqantly View
      </div>
      <ShowFreqy freq={freq} />
    </div>
  );
}

export default Freqantly;
