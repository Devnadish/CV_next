import { getDictionary } from "@/lib/dictionary";

const AdvertisingText = async ({ lang }) => {
  const {
    page: {
      about: { advTxt },
    },
  } = await getDictionary(lang);
  return (
    <>
      <div className="flex flex-col items-center justify-center w-[calc(100%-15px)] animate-pulse duration-2000 h-full gap-4 p-4 bg-orange-500 shadow-xl rounded-xl hover:bg-blue-700 hover:text-white hover:shadow-none">
        <p className="flex items-center justify-center text-4xl font-semibold text-center md:text-2xl lg:text-4xl font-tajawal">
          {advTxt.ask1}
        </p>
        <p className="flex items-center justify-center text-2xl text-center md:text-xl font-tajawal">
          {advTxt.ask2}
        </p>
      </div>
    </>
  );
};

export default AdvertisingText;
