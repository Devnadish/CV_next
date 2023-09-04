import Image from "next/image";
import {CardLink} from "./CardLink"
import {Description} from "./Description"

 function AboutImage({ imgx, pres, link="dd",linkText="dd" }) {
  return (
    <div className="relative justify-between w-full max-w-xs min-w-0 bg-white rounded-lg shadow-xl sm:flex sm:flex-col">
    <div className="relative h-10 m-2">
        <Image
          src={imgx}
          alt={imgx}

          fill
          style={{objectFit:"contain"}}
          priority
        />
      </div>
      {/* <div>
      <Title title={pres}/>
      </div> */}

<div className="flex items-center justify-between w-full">
       <CardLink link={link} linkText={linkText} />
       <Description des={pres} />
       </div>
    </div>
  );
}

export default AboutImage

