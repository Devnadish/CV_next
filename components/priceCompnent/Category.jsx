import { FcApproval } from "react-icons/fc";


export function Category({ category,recommend=false }) {
  return (
    <div className="flex items-center justify-start h-8 gap-4 pt-4 pb-4 mt-2 ml-4 text-2xl text-yellow-400 uppercase border-b-8 border-yellow-400/50 w-fit ">
      <h1 className="mt-2">{category}</h1>
      {recommend ? <FcApproval size={30}/>:null}
    </div>
  );
}
