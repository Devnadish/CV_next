import {
  AiOutlineFileSearch,
  AiOutlineWhatsApp,
  AiOutlineMail,
} from "react-icons/ai";
import { MdTextsms } from "react-icons/md";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import Title from "../shared/title/Title";

import { getDictionary } from "@/lib/dictionary";
import ShowHint from "../shared/hint/ShowHint";
export const Section7 = async ({lang}) => {
  const {
    page: {
      home: { hint },
    },
  } = await getDictionary(lang);
  return (
    <>
      <div
        id="section7"
        className="flex flex-col justify-between w-[calc(100%-15px)] gap-6 p-4 border border-gray-400 center rounded-b-md"
      >
        <Title title={hint.title} />
        <div className="flex flex-wrap gap-2 justify-evenly sm:flex-1">
          <ShowHint
            icon={<AiOutlineFileSearch className="text-orange-400 w-14 h-14" size={"50px"}  />}
            title={hint.S8L1}
            txt={hint.S8D1}
            link={"/blog/seoSolution"}
          />
          <ShowHint
            icon={<AiOutlineWhatsApp className="text-green-400 w-14 h-14" />}
            title={hint.S8L2}
            txt={hint.S8D2}
            link={"/blog/whatsapp"}
          />
          <ShowHint
            icon={<MdTextsms className="text-blue-400 w-14 h-14" />}
            title={hint.S8L3}
            txt={hint.S8D3}
            link={"/blog/sms"}
          />
          <ShowHint
            icon={<AiOutlineMail className="text-slate-400 w-14 h-14" />}
            title={hint.S8L4}
            txt={hint.S8D4}
            link={"/blog/emailCampin"}
          />
          <ShowHint
            icon={<IoShareSocialOutline className="text-red-800 w-14 h-14" />}
            titletxt={hint.S8L5}
            txt={hint.S8D5}
            link={"/blog/socailPost"}
          />
          <ShowHint
            icon={<FaExternalLinkSquareAlt className="text-green-900 w-14 h-14" />}
            title={hint.S8L6}
            txt={hint.S8D6}
            link={"/blog/backlink"}
          />
        </div>
      </div>
    </>
  );
};

