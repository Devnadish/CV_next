
import { VscSymbolColor } from "react-icons/vsc";
import { FaUsers, FaHandshake } from "react-icons/fa";
import { IoSpeedometerOutline } from "react-icons/io5";
import { AiOutlineFileSearch } from "react-icons/ai";
import {BsFillEmojiHeartEyesFill} from "react-icons/bs"
import { enLang } from "@/locales/en/translation";
 
function WillDo() {
  return (
    <>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2  w-[calc(100%-15px)] place-items-start">
        <InfoBox
          titlex={enLang.Ui}
          subtitlex={enLang.UiDetail}
          alt={enLang.Ui}
          icon={<VscSymbolColor className="text-2xl text-orange-500" />}
        />
        <InfoBox
          titlex={enLang.Ux}
          subtitlex={enLang.UxDetail}
          alt={enLang.Ux}
          icon={<FaUsers className="text-2xl text-green-500" />}
        />
        <InfoBox
          titlex={enLang.perfomance}
          subtitlex={enLang.perfomanceTitle}
          alt={enLang.perfomance}
          icon={<IoSpeedometerOutline className="text-2xl text-red-500" />}
        />
        <InfoBox
          titlex={enLang.seo}
          subtitlex={enLang.seoTitle}
          alt={enLang.seo}
          icon={<AiOutlineFileSearch className="text-2xl text-blue-500" />}
        />
        <InfoBox
          titlex={enLang.help}
          subtitlex={enLang.helpTitle}
          alt={enLang.help}
          icon={<FaHandshake className="text-2xl text-brown-900" />}
        />
        <InfoBox
          titlex={enLang.freeConsultaion}
          subtitlex={enLang.freeConsultaionTitle}
          alt={enLang.help}
          icon={<BsFillEmojiHeartEyesFill className="text-2xl text-yellow-400" />}
        />
      </div>
    </>
  );
}
export default WillDo;

const InfoBox = ({ img, titlex, subtitlex, alt = "tst", activeLang, icon }) => {

  return (
    <>
      <div className="flex flex-col p-2 border-2 divide-y-2 rounded-lg hover:shadow-lg">
        <div className="flex items-center justify-between p-1 mb-1 text-white " >
          <p  > {titlex} </p>
          {icon}
        </div>
        <p className="p-2 text-gray-300"> {subtitlex} </p>
      </div>
    </>
  );
};
