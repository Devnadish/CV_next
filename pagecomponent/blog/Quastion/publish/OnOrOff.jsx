'use client';
import React, { useState, useEffect } from 'react';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { publishQuastionTrueOrFalse } from '@/pagecomponent/blog/Quastion/backend/quastion_action';

export default function OnOrOff({ published, Qid, postID }) {
    const [isChecked, setIsChecked] = useState(published);

    const handleToggle = async (id) => {
        setIsChecked(!isChecked);
        await publishQuastionTrueOrFalse(id, !isChecked, postID);
    };

    useEffect(() => {
        // Add any necessary side effects here
    }, [isChecked]);

    return (
        <div className='flex items-center justify-center space-x-2 p-1'>
            <Switch
                id='airplane-mode'
                checked={isChecked}
                onCheckedChange={() => handleToggle(Qid, postID)}
            />
            <Label htmlFor='airplane-mode'>
                {isChecked ? 'online' : 'offline'}
            </Label>
        </div>
    );
}
