const { default: Link } = require("next/link");

const ShowHint = ({ icon, txt, link, title }) => {
  return (
    <>
      <Link
        className="flex flex-col  items-center justify-start  w-[300px]  gap-1 py-4 text-sm border border-border rounded-md   hover:shadow-xl "
        href={link}
      >
        <div className="h-[70px]">{icon}</div>
        <p className="font-semibold text-foreground text-md   font-tajawal">
          {title}
        </p>
        <p className="p-4   text-md font-tajawal line-clamp-4 hover:line-clamp-none">
          {txt}
        </p>
      </Link>
    </>
  );
};
export default ShowHint;
