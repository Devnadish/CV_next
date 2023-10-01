import { getDictionary } from "@/lib/dictionary";
import { WillDoData } from "@/components/pagecomponent/about/utl.js";
async function WillDo({ lang }) {
  const {
    page: {
      about: { willdo },
    },
  } = await getDictionary(lang);

  const data = WillDoData(willdo);
  return (
    <>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2  lg:grid-cols-3 w-[calc(100%-15px)] place-items-center">
        {data?.data?.map((willdo) => {
          return (
            <InfoBox
              key={willdo.id}
              icon={willdo.icon}
              titlex={willdo.title}
              subtitlex={willdo.subtitlex}
              alt={willdo.alt}
            />
          );
        })}
      </div>
    </>
  );
}
export default WillDo;

const InfoBox = ({ img, titlex, subtitlex, alt = "tst", activeLang, icon }) => {
  return (
    <>
      <div className="flex flex-col p-2 border-2 max-w-[350px]    rounded-lg hover:shadow-lg">
        <div className="flex justify-center p-4">{icon}</div>
        <div className="flex flex-col items-center justify-between gap-4 p-1 mb-1 text-white ">
          <p className="font-semibold font-tajawal"> {titlex} </p>
        </div>
        <p className="p-4 text-gray-300 font-tajawal line-clamp-2 hover:line-clamp-none ">
          {" "}
          {subtitlex}{" "}
        </p>
      </div>
    </>
  );
};
