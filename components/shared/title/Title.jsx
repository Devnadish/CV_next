import { Button } from "@/components/ui/button";
function Title({ title, icon, children, withBtn = false, flag }) {
  let styleTitle =
    "flex items-center h-full center justify-between w-full  py-2 px-4  transition-all ease duration-500";
  switch (flag) {
    case "subtitle":
      styleTitle = styleTitle + "    hover:scale-95  ";
      break;
    case "title":
      styleTitle = styleTitle + " bg-popover  hover:scale-95 round-,d ";
      break;
  }
  return (
    <div className={styleTitle}>
      <h1 className=" w-fit text-accent-foreground  text-[.8rem]  md:text-[1rem] font-tajawal  capitalize">
        {title}
      </h1>
      {/* <div>{children}</div> */}
      {/* {icon}
      {withBtn && <Button>more</Button>} */}
    </div>
  );
}
export default Title;
