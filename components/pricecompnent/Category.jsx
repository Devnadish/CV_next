import { FcApproval } from "@react-icons/all-files/fc/FcApproval";


export function Category({ category,recommend=false,lang }) {
  return (
    <div
      className="flex items-center justify-center w-full h-16 gap-4 text-2xl text-yellow-400 capitalize shadow-lg font-tajawal border-yellow-400/50 bg-slate-700 "
      style={{ backgroundColor: recommend ? "yellow" : "none",color: recommend ? "blue" : "white" }}
    >
      <h1 className="font-tajawal">{category}</h1>
      {recommend ? <FcApproval className="w-8 h-8" /> : null}
    </div>
  );
}
