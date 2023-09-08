import { ImageData } from "./uiImages";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { BsLayoutWtf } from "react-icons/bs";
import { BiLogoStackOverflow } from "react-icons/bi";
import { FaChalkboardUser } from "react-icons/fa6";
import { RiRemixiconLine } from "react-icons/ri";
import { GiCircularSawblade } from "react-icons/gi";
import { BiLogoMailchimp } from "react-icons/bi";
import { MdNewspaper } from "react-icons/md";
import { FaPaintBrush, FaBrush } from "react-icons/fa";
import { TfiPackage } from "react-icons/tfi";
import { BiRestaurant } from "react-icons/bi";
import { TbChartInfographic } from "react-icons/tb";
const iconStyle = [
  "bg-gray-100",
  "w-[80px]",
  "h-[80px]",
  "p-1",
  "rounded-lg",
  "border-1",
  "text-[23rem]",
].join(" ");
export function myWork2Data(data, lang) {
  return {
    data: [
      {
        id: "sm",
        title: data.smMenuTilte,
        icon: <HiOutlineSpeakerphone className={` ${iconStyle} `} />,
        imageFolder: ImageData("sm", 75),
        chip:75
      },
      {
        id: "uiux",
        title: data.uiUxMenuTitle,
        icon: <BsLayoutWtf className={`${iconStyle}  `} />,
        imageFolder: ImageData("ui", 43),
        chip:43
      },
      {
        id: "identity",
        title: data.identityMenuTitle,
        icon: <BiLogoStackOverflow className={`${iconStyle}  `} />,
        imageFolder: ImageData("Identity", 10),
        chip:10
      },

      {
        id: "signboard",
        title: data.singBoardMEnuTitle,
        icon: <FaChalkboardUser className={`${iconStyle}  `} />,
        imageFolder: ImageData("sinboard", 6),
      chip:6
      },
      {
        id: "cnc",
        title: data.cncMenuTitle,
        icon: <GiCircularSawblade className={`${iconStyle}  `} />,
        imageFolder: ImageData("cnc", 6),
        chip:5
      },
      {
        id: "Character",
        title: data.Character,
        icon: <BiLogoMailchimp className={`${iconStyle}`} />,
        imageFolder: ImageData("character", 10),
        chip:10
      },
      {
        id: "Coverpage",
        title: data.Coverpage,
        icon: <MdNewspaper className={`${iconStyle}`} />,
        imageFolder: ImageData("coverage", 2),
        chip:2
      },
      {
        id: "Logo",
        title: data.Logo,
        icon: <RiRemixiconLine className={`${iconStyle}`} />,
        imageFolder: ImageData("logo", 28),
        chip:28
      },
      {
        id: "flyer",
        title: data.flyer,
        icon: <FaPaintBrush className={`${iconStyle}`} />,
        imageFolder: ImageData("flyer", 59),
      chip:59
      },
      {
        id: "infograph",
        title: data.infograph,
        icon: <TbChartInfographic className={`${iconStyle}`} />,
        imageFolder: ImageData("infograph", 11),
        chip:11
      },
      {
        id: "menu",
        title: data.menu,
        icon: <BiRestaurant className={`${iconStyle}`} />,
        imageFolder: ImageData("menu", 9),
      chip:9
      },
      {
        id: "package",
        title: data.package,
        icon: <TfiPackage className={`${iconStyle} text-[5rem]`} />,
        imageFolder: ImageData("package", 5),
        chip:5
      },
      {
        id: "poster",
        title: data.poster,
        icon: <FaBrush className={`${iconStyle}   `} />,
        imageFolder: ImageData("poster", 4),
      chip: 4,
      },
    ],
  };
}
