import { Price } from "./Price";
import { Facility } from "./Facility";
import { Category } from "./Category";

export const Package = ({
  category = "",
  offerIcon = "",
  price = "",
  facility = "",
  cur = "",
  recommend=false,
}) => {
  return (
    <>

        <div className="relative flex flex-col w-full font-tajawal  justify-between items-start rounded-lg border overflow-hidden bg-red-100 min-h-[500px]"
          style={{ backgroundColor: recommend ? "blue" : "none",color: recommend ? "yellow" : "black" }}
        >
          <Category category={category} recommend={recommend} />
          <Facility facility={facility} recommend={recommend}/>
          <Price price={price} cur={cur} recommend={recommend}/>
        </div>

    </>
  );
};
