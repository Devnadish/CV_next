import Image from "next/image";
import React from "react";

const SkillBox = ({
  imgz = "/assets/about/html.png",
  txt = "99%",
  colorx = ["bg-green-600"],
}) => {
  return (
    <div className="relative w-[80px] h-[80px] ">
      <BackCircle colorx={colorx} />
      <SkillImage imgz={imgz} txt={txt} />
    </div>
  );
};
export default SkillBox;

const BackCircle = ({ colorx = "bg-green-800" }) => {
  const stylex = `{absolute w-[80px] h-[80px] top-0 left-0 ${colorx}  rounded-[50%]`;

  return <div className={stylex} />;
};
function SkillImage({ imgz, txt }) {
  return (
    <div className="flex flex-col  justify-center items-center z-100 absolute top-0 left-0 w-[80px] h-[80px]">
      <Image width={35} height={35} src={imgz} alt="skills" />
      <p className="flex items-center justify-center w-full mt-1 border-t-2 border-black/10">
        {txt}
      </p>
    </div>
  );
}
