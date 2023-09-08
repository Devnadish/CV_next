import { ImSmile2 } from "react-icons/im";
import { MdMobileFriendly } from "react-icons/md";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import { BsImages } from "react-icons/bs";
import { IoNavigateCircleOutline } from "react-icons/io5";
import { BiLineChart } from "react-icons/bi";

import {
  AiOutlineFileSearch,
  AiOutlineWhatsApp,
  AiOutlineMail,
} from "react-icons/ai";
import { MdTextsms } from "react-icons/md";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaExternalLinkSquareAlt } from "react-icons/fa";

export function section2Data(data, lang) {
  return {
    data: [
      {
        id: "infraStrcture",
        title: data.S2L1,
        des: data.S2D1,
        imageUrl: "infra.jpg?=v1",
        link: `/blog/infraStrcture`,
      },
      {
        id: "nextjs",
        title: data.S2L2,
        des: data.S2D2,
        imageUrl: "codeing.jpg?=v001",
        link: `/blog/nextjs`,
      },
      {
        id: "scaleapp",
        title: data.S2L3,
        des: data.S2D3,
        imageUrl: "server.jpg?=v1",
        link: `/blog/scaleapp`,
      },

      {
        id: "mutilanguage",
        title: data.S2L4,
        des: data.S2D4,
        imageUrl: "content.jpg?=v1",
        link: `/blog/mutilanguage`,
      },
      {
        id: "sslSecurity",
        title: data.S2L5,
        des: data.S2D5,
        imageUrl: "multiLang.jpg?=v1",
        link: `/blog/sslSecurity`,
      },
      {
        id: "socailPost",
        title: data.S2L6,
        des: data.S2D6,
        imageUrl: "markting.jpg?=v1",
        link: `/blog/socailPost`,
      },
      {
        id: "planYourWebsite",
        title: data.S2L7,
        des: data.S2D7,
        imageUrl: "ssl.jpg?=v1",
        link: `/blog/planYourWebsite`,
      },
      {
        id: "freesupport",
        title: data.S2L8,
        des: data.S2D8,
        imageUrl: "support.jpg?=v1",
        link: `/blog/freesupport`,
      },
      {
        id: "techsupport",
        title: data.S2L9,
        des: data.S2D9,
        imageUrl: "techsupport.jpg?=v1",
        link: `/blog/techsupport`,
      },
    ],
  };
}
export function section5Data(data, lang) {
  return {
    data: [
      {
        id: "planYourWebsite",
        title: data.S5L1,
        des: data.S5D1,
        icon: <ImSmile2 className="text-orange-400 w-14 h-14" />,
        link: `/blog/planYourWebsite`,
      },
      {
        id: "frindly",
        title: data.S5L2,
        des: data.S5D2,
        icon: <IoNavigateCircleOutline className="text-orange-400 w-14 h-14" />,
        link: `/blog/frindly`,
      },
      {
        id: "captive",
        title: data.S5L3,
        des: data.S5D3,
        icon: <BsImages className="text-green-300 w-14 h-14" />,
        link: `/blog/captive`,
      },

      {
        id: "responsivDesien",
        title: data.S5L4,
        des: data.S5D4,
        icon: <MdMobileFriendly className="text-cyan-400 w-14 h-14" />,
        link: `/blog/responsivDesien`,
      },
      {
        id: "compleContent",
        title: data.S5L5,
        des: data.S5D5,
        icon: <AiOutlineDeploymentUnit className="text-blue-400 w-14 h-14" />,
        link: `/blog/compleContent`,
      },
      {
        id: "seoSolution",
        title: data.S5L6,
        des: data.S5D6,
        icon: <BiLineChart className="text-green-200 w-14 h-14" />,
        link: `/blog/seoSolution`,
      },
    ],
  };
}
export function section6Data(data, lang) {
  return {
    data: [
      {
        id: "ecomm",
        title: data.S6L1,
        des: data.S6D1,
        imageUrl: "person-donating-goods.jpg",
        link: `/blog/ecomm`,
      },
      {
        id: "blog",
        title: data.S6L2,
        des: data.S6D2,
        imageUrl: "people-and-technology.jpg",
        link: `/blog/blog`,
      },
      {
        id: "webtype",
        title: data.S6L3,
        des: data.S6D3,
        imageUrl: "sitetype.jpg",
        link: `/blog/webtype`,
      },
      {
        id: "portofol",
        title: data.S6L4,
        des: data.S6D4,
        imageUrl: "administrator-working-on-computer.jpg",
        link: `/blog/portofol`,
      },
      {
        id: "domainAndhosting",
        title: data.S6L5,
        des: data.S6D5,
        imageUrl: "person-dealing-with-a-social-media-issue.jpg",
        link: `/blog/domainAndhosting`,
      },
      {
        id: "identity",
        title: data.S6L6,
        des: data.S6D6,
        imageUrl: "groovy-abstract-composition.jpg",
        link: `/blog/identity`,
      },
    ],
  };
}

export function section7Data(data, lang) {
  return {
    data: [
      {
        id: "seoSolution",
        title: data.S8L1,
        des: data.S8D1,
        icon: (
          <AiOutlineFileSearch
            className="text-orange-400 w-14 h-14"
            size={"50px"}
          />
        ),
        link: `/blog/seoSolution`,
      },
      {
        id: "whatsapp",
        title: data.S8L2,
        des: data.S8D2,
        icon: <AiOutlineWhatsApp className="text-green-400 w-14 h-14" />,
        link: `/blog/whatsapp`,
      },
      {
        id: "sms",
        title: data.S8L3,
        des: data.S8D3,
        icon: <MdTextsms className="text-blue-400 w-14 h-14" />,
        link: `/blog/sms`,
      },

      {
        id: "emailCampin",
        title: data.S8L4,
        des: data.S8D4,
        icon: <AiOutlineMail className="text-slate-400 w-14 h-14" />,
        link: `/blog/emailCampin`,
      },
      {
        id: "socailPost",
        title: data.S8L5,
        des: data.S8D5,
        icon: <IoShareSocialOutline className="text-red-800 w-14 h-14" />,
        link: `/blog/socailPost`,
      },
      {
        id: "backlink",
        title: data.S8L6,
        des: data.S8D6,
        icon: <FaExternalLinkSquareAlt className="text-green-900 w-14 h-14" />,
        link: `/blog/backlink`,
      },
    ],
  };
}


export function section8Data(data, lang) {
    return {
      data: [
        {
          id: "behance",
          title: data.S7L1,
          des: data.S7D1,
          imageUrl: "behance.jpg?=v1",
          link:  "https://www.behance.net/",
        },
        {
          id: "Dribbble",
          title: data.S7L2,
          des: data.S7D2,
          imageUrl: "Dribbble.jpg?=v001",
          link: "https://dribbble.com/shots/popular/web-design",
        },
        {
          id: "Pinterest",
          title: data.S7L3,
          des: data.S7D3,
          imageUrl: "Pinterest.jpg?=v1",
          link: "https://www.pinterest.com/",
        },


      ],
    };
  }