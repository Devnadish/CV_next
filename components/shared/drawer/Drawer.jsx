"use client";
import { useState } from "react";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { FcPanorama } from "react-icons/fc";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { BsLayoutWtf } from "react-icons/bs";
import { BiLogoStackOverflow } from "react-icons/bi";
import { FaChalkboardUser } from "react-icons/fa6";
import { RiRemixiconLine } from "react-icons/ri";
import { GiCircularSawblade } from "react-icons/gi";
import { BiLogoMailchimp } from "react-icons/bi";
import { MdNewspaper } from "react-icons/md";
import { FaPaintBrush ,FaBrush} from "react-icons/fa";
import {  TfiPackage} from "react-icons/tfi";
import {  BiRestaurant} from "react-icons/bi";
import {  TbChartInfographic} from "react-icons/tb";
import { enLang } from "@/locales/en/translation";



const App = ({ setImageSelector, setDirName, setFileCounter,setTitleName }) => {
  const [open, setOpen] = useState(false);
  const Menus = [
    {
      title: enLang.smMenuTilte,
      src: <HiOutlineSpeakerphone />,
      imageFolder: "sm",
      fileCounter: 75,
    },
    {
      title: enLang.uiUxMenuTitle,
      src: <BsLayoutWtf />,
      imageFolder: "ui",
      fileCounter: 43,
    },
    {
      title: enLang.identityMenuTitle,
      src: <BiLogoStackOverflow />,
      imageFolder: "Identity",
      fileCounter: 10,
    },

    {
      title: enLang.singBoardMEnuTitle,
      src: <FaChalkboardUser />,
      imageFolder: "sinboard",
      fileCounter: 6,
    },
    {
      title: enLang.cncMenuTitle,
      src: <GiCircularSawblade />,
      imageFolder: "cnc",
      fileCounter: 6,
    },
    {
      title: "character",
      src: <BiLogoMailchimp />,
      imageFolder: "character",
      fileCounter: 10,
    },
    {
      title: "coverage",
      src: <MdNewspaper />,
      imageFolder: "coverage",
      fileCounter: 2,
    },
    {
      title: "logo",
      src: <RiRemixiconLine />,
      imageFolder: "logo",
      fileCounter: 28,
    },
    {
      title: "flyer",
      src: <FaPaintBrush />,
      imageFolder: "flyer",
      fileCounter: 59,
    },
    {
      title: "infograph",
      src: <TbChartInfographic />,
      imageFolder: "infograph",
      fileCounter: 11,
    },
    {
      title: "menu",
      src: <BiRestaurant />,
      imageFolder: "menu",
      fileCounter: 9,
    },
    {
      title: "package",
      src: <TfiPackage />,
      imageFolder: "package",
      fileCounter: 5,
    },
    {
      title: "poster",
      src: <FaBrush />,
      imageFolder: "poster",
      fileCounter: 4,
    },
  ];

  const changeDisData = (TMPimageFolder, TMPfileCounter,TmpsetTitlName) => {
    setDirName(TMPimageFolder);
    setFileCounter(TMPfileCounter);
    setTitleName(TmpsetTitlName)
  };

  return (
    <div className="flex h-[fit-content] bg-orange-500 rounded-md">
      <div  className={` ${open ? "w-72" : "w-20"}   p-5  pt-8 relative duration-300 `}>
        <MdKeyboardDoubleArrowLeft  className={`absolute   right-2 cursor-pointer text-3xl  top-3 w-7 border-white text-teal-50   border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <MenuTitle open={open}/>
        <MenuItems  open={open}   Menus={Menus}  changeDisData={changeDisData}/>
      </div>

    </div>
  );
};
export default App;

function MenuTitle({open}) {
  // console.log(open)
  return (
    <div className={`${!open && "h-0 pt-0"} flex  items-center pt-4 gap-x-4`}>
      <FcPanorama
        className={`text-2xl cursor-pointer duration-500 ${
          open && "rotate-[360deg]"
        }`}
      />

      <h1
        className={`text-white origin-left font-medium text-xl duration-200 ${
          !open && "scale-0"
        }`}
      >
        Sampe of Work
      </h1>
    </div>
  );
}

function MenuItems(props) {
  return (
    <ul className="pt-0">
      {props.Menus.map((Menu, index) => (
        <li
          key={index}
          className={`flex  rounded-md p-2  cursor-pointer hover:bg-blue-gray-200 hover:text-blue-gray-900 text-gray-900 text-sm items-center gap-x-4
              ${Menu.gap ? "mt-9" : "mt-2"} ${
            index === 0 && "bg-light-white"
          } `}
          onClick={() => {
            props.changeDisData(Menu.imageFolder, Menu.fileCounter,Menu.title);
          }}
        >
          {/* <img src={`./src/assets/${Menu.src}.png`} /> */}
          <div className="block text-2xl">{Menu.src}</div>
          <span
            className={`${!props.open && "hidden"} origin-left duration-200`}
          >
            {Menu.title}
          </span>
        </li>
      ))}
    </ul>
  );
}