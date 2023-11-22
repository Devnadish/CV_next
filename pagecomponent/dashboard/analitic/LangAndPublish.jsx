'use client';
import { useState } from 'react';
import { Switch } from '@/components/ui/switch';
import { puplitIT } from '@/pagecomponent/dashboard/analitic/dbAction/_action';
function LangAndPublish(props) {
    const [checked, setChecked] = useState(props.published);

    const toggleChecked = async (id) => {
        if (checked) {
            setChecked(false);
            await HideBlog(id);
        } else {
            setChecked(true);
            await ShowBlog(id);
        }
    };

    const ShowBlog = async (id) => {
        await puplitIT(id, true);
    };
    const HideBlog = async (id) => {
        await puplitIT(id, false);
    };

    return (
        <div className='flex w-full items-center justify-between py-2 text-card-foreground'>
            <p className='text-sm font-normal'>Lang : {props.lang}</p>
            <div className='ju flex items-center gap-2 text-sm font-normal'>
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
