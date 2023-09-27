// "use client";
import React from "react";
import { AiFillEdit } from "@react-icons/all-files/ai/AiFillEdit";
import RemoveTage from "./RemoveTage";
import Link from "next/link";
function Taglist({ tags }) {
  return (
    <div className="bg-zinc-700 min-w-[300px] max-[300px]: mx-auto  p-4 rounded-md max-h-[60vh] overflow-auto">
      <ul>
        {tags.map((tag) => {
          return (
            <div
              key={tag.id}
              className="flex items-center justify-between gap-4 p-2 border-b "
            >
              <li>{tag.title}</li>
              <div className="flex items-center justify-between gap-4">
                <li>
                  <RemoveTage tagId={tag.id} />
                </li>
                <li>
                  <Link
                    href={{
                      pathname: `/dashboard/tag/edittag/${tag.id}`,
                      query: { title: tag.title },
                    }}
                  >
                    <AiFillEdit className="text-blue-600" />
                  </Link>
                </li>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Taglist;
