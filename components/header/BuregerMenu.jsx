'use client';
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import MenuItems from './MenuItems';

function BuregerMenu({ navigation, lang }) {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <Button
                onClick={() => {
                    setOpen(true);
                }}
                variant='menughost'
            >
                <Menu className='text-foreground' />
            </Button>
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetContent>
                    <MenuItems navigation={navigation} lang={lang} />
                </SheetContent>
            </Sheet>
        </div>
    );
}

export default BuregerMenu;
