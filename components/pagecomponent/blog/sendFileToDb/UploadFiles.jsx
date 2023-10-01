"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { createFileAction } from "./_action";
import { useRouter } from "next/navigation";
import { countLanguage } from "./helper";

export const UploadFiles = ({ files }) => {
  const router = useRouter();
  const [count, setCount] = useState(files.length);
  // console.log(files);

  const startAction = async () => {
    const btnAction = document.getElementById("upload");
    btnAction.disabled = true;
    btnAction.textContent = "Uploading...";

    for (const file of files) {
      await createFileAction(file.slug, file.title);
      setCount((pre) => pre - 1);
    }
    setCount(0);
    btnAction.textContent = "Files Uploaded Done Refresh Page";
    // btnAction.disabled = false;
  };
  useEffect(() => {
    const btnAction = document.getElementById("upload");
    count === 0 ? (btnAction.disabled = true) : (btnAction.disabled = false);
    count === 0
      ? (btnAction.textContent = "No Files To Upload")
      : (btnAction.textContent = "UPLOAD New Files...");
  }, []);
  return (
    <>
      <div className="flex-col items-center justify-between w-full px-4 py-2 bg-purple-500 md:flex-row rounded-t-md ">
        <div className="flex items-start mb-2 text-sm justify-evenly">
          <p className="flex items-center justify-center p-1 px-2 text-xs text-white bg-green-600 rounded-lg">
            Blogs : {files.length}
          </p>
          {/* <div className="flex items-start justify-between w-full p-1 text-sm"> */}
          <p className="flex items-center justify-center p-1 px-2 text-xs text-white bg-green-600 rounded-lg">
            En/B : {countLanguage(files, "en")}
          </p>
          <p className="flex items-center justify-center p-1 px-2 text-xs text-white bg-green-600 rounded-lg">
            Ar/B : {countLanguage(files, "ar")}
          </p>
          {/* </div> */}
        </div>
        <div className="flex flex-col items-center justify-between p-2 text-white rounded-md shadow-lg bg-black/30">
          <Button
            id="upload"
            disabled={count === 0}
            onClick={() => startAction()}
          >
            Upload
          </Button>
          <p>Files : {count}</p>
        </div>
      </div>
    </>
  );
};
