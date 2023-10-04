"use client";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { puplitIT } from "@/components/pagecomponent/dashboard/analitic/dbAction/_action";
function LangAndPublish(props) {
  const [checked, setChecked] = useState(props.published);

  const toggleChecked = async (id) => {
    // alert(checked);
    if (checked) {
      setChecked(false);
      HideBlog(id);
    } else {
      setChecked(true);
      ShowBlog(id);
    }
  };

  const handleChange = async (id, checked) => {
    await toggleChecked();
    await puplitIT(id, checked);
  };

  const ShowBlog = async (id) => {
    await puplitIT(id, true);
  };
  const HideBlog = async (id) => {
    await puplitIT(id, false);
  };

  return (
    <div className="flex items-center justify-between w-full py-2 text-card-foreground">
      <p className="text-sm font-normal">Lang : {props.lang}</p>
      <div className="flex items-center gap-2 text-sm font-normal ju">
        Pub :
        {/* <span className="px-2 bg-green-200 rounded">
          {props.published ? "Yes" : "No"}
        </span> */}
        <Switch
          checked={checked}
          // defaultChecked={checked}
          onCheckedChange={() => {
            toggleChecked(props.id);
            // handleChange(props.id, checked);
          }}
        />
      </div>
    </div>
  );
}
export default LangAndPublish;
