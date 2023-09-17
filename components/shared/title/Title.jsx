import Btn from "@/components/shared/btn/Btn";
function Title({title,icon,withBtn=false}) {
    return (
      <div className="flex items-center justify-between w-full h-8 p-3 overflow-hidden text-sm font-semibold text-white rounded-md shadow-lg font-tajawal bg-zinc-800 dark:bg-zinc-500 hover:opacity-90 hover:shadow-lg" >
        <h1 className="font-tajawal">{title}</h1>
        {icon}
        {withBtn && <Btn>more</Btn>}
      </div>
    );
  }
  export default Title