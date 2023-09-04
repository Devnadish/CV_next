// "use client";
import React from "react";
import PageContainer from "@/components/pagecontainer/PageContainer";
// import BlurImage from "@/components/shared/blurImage/BluerImage";
// import MyDrawer  from "@/components/shared/drawer/vaulDrawer/Draw";
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
import { enLang } from "@/locales/en/translation";
import dynamic from "next/dynamic";
const BlurImage =dynamic(()=>import("@/components/shared/blurImage/BluerImage"))
const MyDrawer =dynamic(()=>import("@/components/shared/drawer/vaulDrawer/Draw"))
// const Section3 = dynamic(() => import("../components/homeCompnent/Section3"));


function page() {
  const iconStyle = [
    "bg-gray-100",
    "w-[80px]",
    "h-[80px]",
    "p-1",
    "rounded-lg",
    "border-1",
    "text-[23rem]",

  ].join(" ");

  const Menus = [
    {
      id: 1,
      title: enLang.smMenuTilte,
      icon: <HiOutlineSpeakerphone className={` ${iconStyle} `} />,
      imageFolder: ImageData("sm", 75),
      chip:75
    },
    {
      id: 2,
      title: enLang.uiUxMenuTitle,
      icon: <BsLayoutWtf className={`${iconStyle}  `} />,
      imageFolder: ImageData("ui", 43),
      chip:43
    },
    {
      id: 3,
      title: enLang.identityMenuTitle,
      icon: <BiLogoStackOverflow className={`${iconStyle}  `} />,
      imageFolder: ImageData("Identity", 10),
      chip:10
    },

    {
      id: 4,
      title: enLang.singBoardMEnuTitle,
      icon: <FaChalkboardUser className={`${iconStyle}  `} />,
      imageFolder: ImageData("sinboard", 6),
      chip:6
    },
    {
      id: 5,
      title: enLang.cncMenuTitle,
      icon: <GiCircularSawblade className={`${iconStyle}  `} />,
      imageFolder: ImageData("cnc", 6),
      chip:5
    },
    {
      id: 6,
      title: "Character",
      icon: <BiLogoMailchimp className={`${iconStyle}`} />,
      imageFolder: ImageData("character", 10),
      chip:10
    },
    {
      id: 7,
      title: "Cover page",
      icon: <MdNewspaper className={`${iconStyle}`} />,
      imageFolder: ImageData("coverage", 2),
      chip:2
    },
    {
      id: 8,
      title: "Logo",
      icon: <RiRemixiconLine className={`${iconStyle}`} />,
      imageFolder: ImageData("logo", 28),
      chip:28
    },
    {
      id: 9,
      title: "flyer",
      icon: <FaPaintBrush className={`${iconStyle}`} />,
      imageFolder: ImageData("flyer", 59),
      chip:59

    },
    {
      id: 10,
      title: "infograph",
      icon: <TbChartInfographic className={`${iconStyle}`} />,
      imageFolder: "infograph",
      imageFolder: ImageData("infograph", 11),
      chip:11
    },
    {
      id: 11,
      title: "menu",
      icon: <BiRestaurant className={`${iconStyle}`} />,
      imageFolder: ImageData("menu", 9),
      chip:9
    },
    {
      id: 12,
      title: "package",
      icon: <TfiPackage className={`${iconStyle} text-[5rem]`} />,
      imageFolder: ImageData("package", 5),
      chip:5
    },

    {
      id: 13,
      title: "poster",
      icon: <FaBrush className={`${iconStyle}   `} />,
      imageFolder: ImageData("poster", 4),
      chip: 4,
    },
  ];
  return (
    <PageContainer>
      <div className="flex items-center justify-center p-4 rounded shadow-lg ">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-5 lg:grid-cols-6 p-4 w-[calc(100%-15px)] place-items-center ">
          {Menus.map((el) => {
            return (
              <div  key={el.id}>
                <MyDrawer
                  btnTXT={el.title}
                  headTitle={el.title}
                  btnIcon={el.icon}
                  chip={el.chip + ' ' + "Task"}
                >
                  <Gallery images={el.imageFolder} />
                </MyDrawer>
              </div>
            );
          })}
        </div>
      </div>
    </PageContainer>
  );
}
export default page;

function Gallery({ images, titlename }) {
  return (
    <div className="w-full px-4 py-4 mx-auto rounded-md border-gray-200/50 border-1 lg:max-w-7xl">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 ">
        {images?.map((image, idx) => (
          <BlurImage key={idx} image={image.imgSrc} />
        ))}
      </div>
    </div>
  );
}

// const ImageHolders = ({ children }) => {
//   return (
//     <>
//       <div className="flex flex-wrap items-center justify-center w-full mr-2 rounded-md min-h-fit">
//         {children}
//       </div>
//     </>
//   );
// };

{
  /* <div className="flex justify-start w-full gap-4 overflow-auto">
        <Drawer
          setImageSelector={setImageSrray}
          setDirName={setDirName}
          setFileCounter={setFileCounter}
          setTitleName={setTitleName}
        />
        <ImageHolders>
          <Gallery images={ImageArray} titlename={titlename} />
        </ImageHolders>
      </div> */
}
