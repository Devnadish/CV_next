import { Price } from "./Price";
import { Facility } from "./Facility";
import { Category } from "./Category";




export const Package = ({
  category = "", offerIcon = "", price = "", facility = "", cur = "",recommend
}) => {
  return (
    <>
    <div className="p-4 rounded-lg bg-gradient-to-r from-gray-700 to-gray-900">
      <div className="relative flex flex-col w-full gap-1 rounded-lg bg-gradient-to-bl from-slate-900 to-slate-700">
        <Category category={category} recommend={recommend} />
        <Facility facility={facility} />
        <Price price={price} cur={cur} />
        
      </div>
      </div>
    </>
  );
};
