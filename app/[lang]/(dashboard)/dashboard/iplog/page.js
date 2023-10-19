import React from "react";
import { getAllIp } from "@/components/pagecomponent/home/iplog/_action";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronsUpDown, Plus, X } from "lucide-react";

async function page() {
  const ips = await getAllIp();

  return (
    <>
      <p className="ml-4">{`vistor Count =  ${ips.length}`}</p>
      <div className="flex flex-wrap items-center justify-between w-full gap-4 p-4">
        {ips.map((ip) => {
          return (
            <div className="flex flex-col   rounded-md bg-primary" key={ip.id}>
              <DataShow ip={ip} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default page;

const DataShow = ({ ip }) => {
  return (
    <>
      <Collapsible>
        <CollapsibleTrigger>
          <div className="flex gap-4 w-full items-center justify-between">
            <ChevronsUpDown className="h-4 w-4" />
            {ip.country}
            <p> {ip.ip}</p>
            <p className="bg-red-600 p-1 rounded-md"> {ip.counter}</p>
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <p>{ip.city}</p>
          <p>{ip.region}</p>
          <p>{ip.loc}</p>
          <p>{ip.org}</p>
          <p>{ip.timezone}</p>
        </CollapsibleContent>
      </Collapsible>
    </>
  );
};
