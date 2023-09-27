"use client";
import React from "react";
import { deleteTagAction } from "../forms/tags/new/_actions";
import { MdDelete } from "@react-icons/all-files/md/MdDelete";
function RemoveTage({ tagId }) {
  const handleClick = async (tagId) => {
    await deleteTagAction(tagId);
  };
  return (
    <div>
      <button onClick={() => handleClick(tagId)}>
        <MdDelete className="text-red-600" />
      </button>
    </div>
  );
}

export default RemoveTage;
