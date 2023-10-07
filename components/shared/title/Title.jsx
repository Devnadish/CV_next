import { Button } from "@/components/ui/button";
function Title({ title, icon, children, withBtn = false, flag }) {
  let styleTitle;
  switch (flag) {
    case "subtitle":
      styleTitle =
        "flex items-center justify-between w-full  py-2 px-4  transition-all ease duration-500  bg-accent  hover:scale-95  ";
      break;
    case "title":
      styleTitle =
        "flex items-center justify-between w-full  py-2 px-4 bg-accent border-1s  border-accent-foreground/30  rounded-md hover:border-accent-foreground";
      break;
  }
  return (
    <div className={styleTitle}>
      <h1 className=" text-accent-foreground  text-[.8rem]  md:text-[1rem] font-tajawal ">
        {title}
      </h1>
      {children}
      {/* {icon}
      {withBtn && <Button>more</Button>} */}
    </div>
  );
}
export default Title;
