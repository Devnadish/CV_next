import Link from "next/link";
import { GoLinkExternal } from "react-icons/go";

export function CardLink({ link = "googl.com", linkText = "test" }) {
  return (
    <div className="flex items-center justify-between flex-grow p-2 text-black rounded-lg bg-black/60 hover:bg-slate-300 hover:text-black ">
      <Link className="text-white" href={link}>
        <GoLinkExternal className="text-white hover:bg-slate-300 hover:text-black" />
      </Link>
      {/* <BiLink className="text-2xl text-blue-800" /> */}
    </div>
  );
}
