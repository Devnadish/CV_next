import Image from "next/image";
import { CardLink } from "./CardLink";
import { Description } from "./Description";
import { Title } from "./Title";
import base64 from "@/helpers/base64";

// title,image,link,description,
export default  function CardWithImage({
  imageUrl,
  title = "",
  linkText,
  des = "test",
  link = null,
  w = "250px",
  h = "250px",
  fitType = "contain",
}) {
  return (
    <>
      <div className="flex items-center justify-start overflow-hidden border rounded-md dark:border-orange-500   flex-col w-[250px]  h-fit bg-red-500">
        <ImageCard imageUrl={imageUrl} alt={title} title={title} fitType={fitType} w={w} h={h}/>
        <TitleAndLink title={title} linkText={linkText} link={link}/>
        <Description des={des} />
      </div>
    </>
  );
}
async function ImageCard(props) {
  // const myBlurDataUrl = await base64(props.imageUrl)
  return (
    <div
      className="relative flex items-start shadow-lg hover:opacity-90 bg-slate-600"
      style={{ width:"250px"  }}
    >
      <Image
        src={props.imageUrl}
        alt={props.title}
        width={650}
        height={366}
        className="w-full h-auto mx-auto rounded-t-lg"
        // fill
        // sizes="calc(100vw - 114px)"
        // placeholder='blur'
        // blurDataURL={myBlurDataUrl}
        style={{ objectFit: props.fitType }}
      />
    </div>
  );
}


function TitleAndLink(props) {
  return (
    <div className="flex items-center w-full justify-between bg-slate-900">
      <Title title={props.title} />
      {props.link !== null ? (
        <CardLink link={props.link} linkText={props.linkText} />
      ) : null}
    </div>
  );
}
