"use client";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenuUnfold } from "@react-icons/all-files/ai/AiOutlineMenuUnfold";
import { AiOutlineMenuFold } from "@react-icons/all-files/ai/AiOutlineMenuFold";

function DashBoardMenu() {
  const [isOpen, setIsOpen] = useState(true);
  const menuItem = [
    { id: 1, menuTitle: "Tags", menuLink: "/dashboard/tag" },
    { id: 2, menuTitle: "Grap Blog", menuLink: "/dashboard/bloglist" },
    { id: 3, menuTitle: "Blog Analitic", menuLink: "/dashboard/bloganalitic" },
    { id: 4, menuTitle: "Add service", menuLink: "/blog" },
    { id: 5, menuTitle: "Add Project", menuLink: "/blog" },
  ];
  let styl1;
  let styl2 =
    "flex flex-col items-start justify-start bg-green-800/90 h-full transition-all duration-300 border-r border-emerald-200";
  isOpen
    ? (styl1 = styl2 + "  min-w-[50px]")
    : (styl1 = styl2 + " min-w-[270px]");
  return (
    <>
      <div className={styl1}>
        <div className="flex items-center justify-between w-full bg-green-800 ">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="p-2 my-2 ml-6 border rounded"
          >
            {isOpen ? (
              <AiOutlineMenuUnfold size={24} />
            ) : (
              <AiOutlineMenuFold size={24} />
            )}
          </button>
          <Title isOpen={isOpen} />
          {/* {isOpen ? <MenuX menuItem={menuItem} /> : null} */}
        </div>
        <MenuX menuItem={menuItem} isOpen={isOpen} />
      </div>
    </>
  );
}

export default DashBoardMenu;

function MenuX({ isOpen, menuItem }) {
  return (
    <div className="p-2">
      <MenuItems menuItem={menuItem} isOpen={isOpen} />
    </div>
  );
}

function Title(props) {
  let titlstyl =
    "flex items-center justify-center w-full gap-4  text-2xl text-white  ";

  props.isOpen ? (titlstyl = "  text-[0]") : (titlstyl = titlstyl + " text-sm");
  return (
    <div className={titlstyl}>
      <p>Dashboard</p>
    </div>
  );
}

function MenuItems(props) {
  let Linkstyl =
    "flex items-center justify-center px-2 py-1 w-full h-8 text-white   rounded-md  bg-green-800  cursor-pointer border border-emerald-200";
  props.isOpen
    ? (Linkstyl = Linkstyl + "  text-xs min-w-[45px]")
    : (Linkstyl = Linkstyl + " text-md min-w-[250px]");

  return (
    <div className="flex flex-col items-center gap-2 mt-4 text-white justify-evenly">
      {props.menuItem.map((item, index) => {
        return (
          <Link className={Linkstyl} key={item.id} href={item.menuLink}>
            {item.menuTitle}
          </Link>
        );
      })}
    </div>
  );
}
