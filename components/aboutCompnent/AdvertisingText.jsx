import { enLang } from "@/locales/en/translation";
 const AdvertisingText = ({ activeLang }) => {
  return (
    <>
      <div className="flex flex-col  w-[calc(100%-15px)] gap-4 p-4 bg-orange-500 shadow-xl rounded-xl hover:bg-blue-700 hover:text-white hover:shadow-none" >
        <p className="flex items-center justify-center text-xl font-extrabold">{enLang.ask1}</p>
        <p className="flex items-center justify-center text-xl">{enLang.ask2}</p>
      </div>
    </>
  );
};


export default AdvertisingText;