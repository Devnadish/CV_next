const { default: Link } = require("next/link");

const ShowHint = ({ icon, txt, link,title }) => {
    return (
      <>
        <Link
          className="flex flex-col  items-center justify-start  w-[170px]  gap-1 py-4 text-sm border border-gray-400 rounded-md   hover:shadow-xl "
          href={link}
        >


            <div className="h-[70px]">{icon}</div>
            <p className=" text-md text-white font-tajawal font-semibold ">{title}</p>
            <p className="p-4 text-md text-white font-tajawal line-clamp-4 hover:line-clamp-none">{txt}</p>
        </Link>
      </>
    );
  };
export default ShowHint