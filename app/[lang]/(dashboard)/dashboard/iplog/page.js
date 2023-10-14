import React from "react";
import { getAllIp } from "@/components/pagecomponent/home/iplog/_action";
async function page() {
  const ips = await getAllIp();

  return (
    <div className="flex flex-wrap items-center justify-between w-full gap-4 p-4">
      {ips.map((ip) => {
        return (
          <div className="flex flex-col p-4 rounded-md bg-primary" key={ip.id}>
            <div className="flex items-center justify-between p-2 bg-secondary">
              <p>{ip.ip}</p>
              <p className="px-2 bg-primary-foreground py-[.5px] rounded-full items-center justify-between">
                {ip.counter}
              </p>
            </div>
            <p>{ip.city}</p>
            <p>{ip.region}</p>
            <p>{ip.country}</p>
            <p>{ip.loc}</p>
            <p>{ip.org}</p>
            <p>{ip.timezone}</p>
          </div>
        );
      })}
    </div>
  );
}

export default page;
