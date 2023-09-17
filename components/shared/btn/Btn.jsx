'use client'
import React from "react";

function Btn({ children, icon, btnType="success" }) {
  const standerStyle = `px-6 py-2 rounded flex h-8 gap-2 justify-center text-sm font-medium items-center font-tajawal text-white font-semibold `;
  let typeStyle = ""
  switch (btnType) {
    case "success":
       typeStyle = `bg-green-600  hover:bg-green-500  text-black   `;
      break;
      case "secondary":
       typeStyle = `bg-orange-500  hover:bg-orange-400 `;

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
