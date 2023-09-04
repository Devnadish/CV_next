'use client'
import React from "react";

function Btn({ children, icon, btnType }) {
  const standerStyle = `px-6 py-2 rounded flex gap-2 justify-center text-sm font-medium items-center`;
  let typeStyle = ""
  switch (btnType) {
    case "success":
       typeStyle = `text-green-100 bg-green-500  hover:bg-green-600  `;
      break;
      case "secondary":
       typeStyle = `text-orange-100 bg-orange-500  hover:bg-orange-400 `;

    default:
      break;
  }




  return (
    <button
      type="button"  className={`${standerStyle} ${typeStyle}`}
    >
      {icon}
      {children}
    </button>
  );
}

export default Btn;
