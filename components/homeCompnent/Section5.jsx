import { getDictionary } from "@/lib/dictionary";
import { ImSmile2 } from "react-icons/im";
import {  MdMobileFriendly } from "react-icons/md";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import { BsImages } from "react-icons/bs";
import { IoNavigateCircleOutline } from "react-icons/io5";
import { BiLineChart } from "react-icons/bi";
import Title from "../shared/title/Title";
import ShowHint from "../shared/hint/ShowHint";

export const Section5 = async ({ lang }) => {
  const {
    page: {
      home: { section5 },
    },
  } = await getDictionary(lang);
  return (
    <>
      <section
        id="section5"
        className="flex flex-col justify-center w-[calc(100%-15px)] gap-8 px-4 pb-4 border rounded-lg border-gray-400/40"
      >
        <Title title={section5.title} />
        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <ChipsData section5={section5} />
        </div>
      </section>
    </>
  );
};


function ChipsData({ section5 }) {
  return (
    <div className="flex flex-wrap gap-2 justify-evenly sm:flex-1">
      <ShowHint
        title={section5.S5L1}
        txt={section5.S5D1}

        icon={<ImSmile2 className="text-yellow-400 w-14 h-14" />}
        link={"/blog/planYourWebsite"}
      />
      <ShowHint
        title={section5.S5L2}
        txt={section5.S5D2}

        icon={<IoNavigateCircleOutline className="text-orange-400 w-14 h-14" />}
        link={"/blog/frindly"}
      />
      <ShowHint
        title={section5.S5L3}
        txt={section5.S5D3}
        icon={<BsImages className="text-green-300 w-14 h-14" />}
        link={"/blog/captive"}
      />
      <ShowHint
        title={section5.S5L4}
        txt={section5.S5D4}
        icon={<MdMobileFriendly className="text-cyan-400 w-14 h-14" />}
        link={"/blog/responsivDesien"}
      />
      <ShowHint
        title={section5.S5L5}
        txt={section5.S5D5}
        icon={<AiOutlineDeploymentUnit className="text-blue-400 w-14 h-14" />}
        link={"/blog/compleContent"}
      />
      <ShowHint
        title={section5.S5L6}
        txt={section5.S5D6}
        icon={<BiLineChart className="text-green-200 w-14 h-14" />}
        link={"/blog/seoSolution"}
      />
    </div>
  );
}

