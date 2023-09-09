import { VscSymbolColor } from "react-icons/vsc";
import { FaUsers, FaHandshake } from "react-icons/fa";
import { IoSpeedometerOutline } from "react-icons/io5";
import { BsFillEmojiHeartEyesFill } from "react-icons/bs";
import { AiOutlineFileSearch } from "react-icons/ai";
export function WillDoData( willdo ) {
    return {
       data : [
    {
      id: "UI",
      title: willdo.Ui,
      subtitlex: willdo.UiDetail,
      alt: willdo.Ui,
      icon: <VscSymbolColor  className="w-10 h-10 text-orange-500" />,
    },
    {
      id: "UX",
      title: willdo.Ux,
      subtitlex: willdo.UxDetail,
      alt: willdo.Ux,
      icon: <FaUsers className="w-10 h-10 text-green-500" />,
    },
    {
      id: "Perfomance",
      title: willdo.perfomance,
      subtitlex: willdo.perfomanceTitle,
      alt: willdo.perfomance,
      icon: <IoSpeedometerOutline className="w-10 h-10 text-red-500" />,
    },
    {
      id: "SEO",
      title: willdo.seo,
      subtitlex: willdo.seoTitle,
      alt: willdo.seo,
      icon: <AiOutlineFileSearch className="w-10 h-10 text-blue-500" />,
    },
    {
      id: "Help",
      title: willdo.help,
      subtitlex: willdo.helpTitle,
      alt: willdo.help,
      icon: <FaHandshake className="w-10 h-10 text-brown-900" />,
    },
    {
      id: "Free Consultation",
      title: willdo.freeConsultaion,
      subtitlex: willdo.freeConsultaionTitle,
      alt: willdo.freeConsultaion,
      icon: <BsFillEmojiHeartEyesFill className="w-10 h-10 text-yellow-400" />,
    },
  ]}
}


export function devlopment(lang)  {

  return {
    data: [
      {
        id: "html",
        imgx:  "html.png",
        pres: "90%",
        link:`/blog/${lang}html5`
      },
      {
        id: "css",
        imgx: "css.png",
        pres: "80%",
        link:`/blog/${lang}css`
      },
      {
        id: "js",
        imgx: "javascript.png",
        pres: "75%",
        link:`/blog/${lang}js`
      },
      {
        id: "react",
        imgx: "react.png",
        pres: "80%",
        link:`/blog/${lang}react`
      },
      {
        id: "nextjs",
        imgx: "nextjs.jpg",
        pres: "70%",
        link:`/blog/${lang}nextjs`

      },
      {
        id: "node",
        imgx: "nodejs.png",
        pres: "70%",
        link:`/blog/${lang}nodejs`
      },
    ],
  };
}
export function design()  {

    return {
      data: [
        {
          id: "ps",
          imgx:  "ps.png",
          pres: "90%",
        },
        {
          id: "css",
          imgx: "ai.png",
          pres: "80%"
        },
        {
          id: "pr",
          imgx: "pr.png",
          pres: "75%",
        },
        {
          id: "ae",
          imgx: "ae.png",
          pres: "80%"
        }

      ],
    };
  }
  export function uiux()  {

    return {
      data: [
        {
          id: "xd",
          imgx:  "xd.png",
          pres: "90%",
        },
        {
          id: "figma",
          imgx: "figma.png",
          pres: "80%"
        },

      ],
    };
  }

  export function dataBase()  {

    return {
      data: [
        {
          id: "mysql",
          imgx:  "mysql.png",
          pres: "90%",
        },
        {
          id: "firebase",
          imgx: "firebase.png",
          pres: "80%"
        },

      ],
    };
  }

