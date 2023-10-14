// import { Price } from "./Price";
// import { Facility } from "./Facility";
// import { Category } from "./Category";
import { FcApproval } from "@react-icons/all-files/fc/FcApproval";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { FaShoppingBasket } from "@react-icons/all-files/fa/FaShoppingBasket";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export const Package = ({
  category = "",
  offerIcon = "",
  price = "",
  facility = "",
  cur = "",
  recommend = false,
  subtitle,
  hint = "Recommended",
}) => {
  return (
    <>
      <div className="relative   w-full font-tajawal      mt-6  bg-red-100  ">
        <Plane
          category={category}
          facility={facility}
          price={price}
          cur={cur}
          recommend={recommend}
          subtitle={subtitle}
          hint={hint}
        />
      </div>
    </>
  );
};

const Plane = ({
  category,
  facility,
  price,
  cur,
  recommend,
  subtitle,
  hint,
}) => {
  return (
    <>
      <Card className="flex flex-col  min-h-[420px] justify-between">
        <CardHeader className="p-2">
          {recommend && (
            <div className="flex  items-center justify-between gap-4 z-50 absolute top-0 left-2 -translate-y-1/2 rounded-full bg-orange-500 px-3 py-2  text-sm font-semibold tracking-wider text-white shadow-md ">
              <p>{hint}</p>
              <FcApproval className="w-6 h-6" />
            </div>
          )}
          <CardTitle className=" px-4 py-2">{category}</CardTitle>
          <CardDescription className="text-sm text-card-foreground/80 ">
            {subtitle}
          </CardDescription>
        </CardHeader>
        <Separator className="h-1" />
        <CardContent className="items-center mt-4 justify-start  text-sm font-light">
          {facility?.map((el) => {
            return (
              <div className="flex items-center w-full gap-4 px-2" key={el.id}>
                <FcApproval />
                <p>{el.title}</p>
              </div>
            );
          })}
        </CardContent>

        <CardFooter className="flex flex-col items-center w-full px-2  justify-evenly py-2 ">
          <Separator className="h-1" />

          <div className="flex items-center w-full px-2  justify-evenly py-2 ">
            <OrderNow />
            <h1 className="text-center font-extrabold text-[2rem] px-2 ">
              {price}
              <span className="px-2 text-sm ">{cur}</span>
            </h1>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};
const OrderNow = () => {
  return (
    <>
      <Button
        type="button"
        variant="secondary"
        className="flex gap-4 items-center justify-between"
      >
        <FaShoppingBasket className="text-xl" />
        <span>Order Now</span>
      </Button>
    </>
  );
};
