import { FaJs } from "react-icons/fa";
import { enLang } from "@/locales/en/translation";
import Title from "@/components/shared/title/Title";
import AboutImage from "@/components/shared/cardWithImage/AboutImage";
import {ProgData} from "@/helpers/aboutInfo"


function ProgSection() {
  const baseUrl = "/assets/about/";
console.log(ProgData)
  return (
    <>
      <div className="flex flex-col justify-center gap-2 p-2 border-1 border-gray-300/50 hover:border-gray-300 rounded   w-[calc(100%-15px)] ">
        <Title
          title={enLang.devlopingtitle}
          icon={<FaJs className="text-3xl text-yellow-600" />}
        />
        <div className="grid grid-cols-3 gap-6 lg:grid-cols-6 place-items-center">
          <AboutImage
            imgx={baseUrl + "html.png"}
            pres={"90%"}

            link={{ pathname: "/blog/html5" }}
          />
          <AboutImage
            imgx={baseUrl + "css.png"}
            pres={"75%"}
            link={{
              pathname: "/about/css3",
              query: { title: "CSS3" },
            }}
          />
          <AboutImage
            imgx={baseUrl + "javascript.png"}
            pres={"80%"}
            link={{
              pathname: "/about/javascript",
              query: { title: "Javascript" },
            }}
          />
          <AboutImage
            imgx={baseUrl + "react.png"}
            pres={"90%"}
            link={{
              pathname: "/about/react",
              query: { title: "Reactjs" },
            }}
          />
          <AboutImage
            imgx={baseUrl + "nextjs.jpg"}
            pres={"90%"}
            link={{
              pathname: "/about/nextjs",
              query: { title: "Nextjs" },
            }}
          />
          <AboutImage
            imgx={baseUrl + "nodejs.png"}
            pres={"75%"}
            link={{
              pathname: "/about/nodejs",
              query: { title: "Nodejs" },
            }}
          />
        </div>
      </div>
    </>
  );
}

export default ProgSection;
