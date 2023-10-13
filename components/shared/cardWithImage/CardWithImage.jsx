import Image from "next/image";
import { CardLink } from "./CardLink";
import Description from "@/components/shared/description/Description";
import Title from "@/components/shared/title/Title";
import base64 from "@/lib/base64";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
const CardWithImage = ({
  imageUrl,
  title = "",
  linkText,
  des = "test",
  link = null,
  w = "250px",
  h = "250px",
  fitType = "contain",
  lang = "ar",
}) => {
  return (
    <>
      <Card className="flex flex-col items-cener justify-between bg-card  min-h-[200px]   min-w-[250px] overflow-hidden">
        <CardHeader className="p-2">
          <CardTitle className="flex items-center justify-between w-full ">
            <Title title={title} flag="subtitle" />
            {link !== null ? (
              // <CardLink link={link} linkText={linkText} lang={lang} />
              <CardLink
                searchPath={title}
                // link={link}
                // linkText={linkText}
                lang={lang}
              />
            ) : null}
          </CardTitle>
        </CardHeader>

        <CardContent className="p-0">
          <Image
            src={imageUrl}
            alt={title}
            width={1200}
            height={550}
            style={{ maxWidth: "100%", height: "auto", margin: "auto" }}
            // className="w-full h-auto mx-auto "
            // fill
            sizes="calc(100vw - 114px)"
            // placeholder="blur"
            // blurDataURL={myBlurDataUrl}
            // style={{ objectFit: props.fitType }}
          />
        </CardContent>
        <Separator />
        <CardFooter className="py-2">
          <Description des={des} />
        </CardFooter>
      </Card>
    </>
  );
};
export default CardWithImage;
