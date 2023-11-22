'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { Button } from '../ui/button';
const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div className='flex w-full items-center justify-evenly gap-4'>
            <Button
                variant='ghost'
                className='flex items-center gap-4'
                onClick={() => setTheme('light')}
            >
                <Sun className='mr-2 h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all  ' />
                <h2>Light</h2>
            </Button>
            <Button
                variant='ghost'
                className='flex items-center gap-4'
                onClick={() => setTheme('dark')}
            >
                <Moon className='mr-2 h-[1.2rem] w-[1.2rem] rotate-90 scale-100 transition-all dark:rotate-0 ' />
                <h2>Dark</h2>
            </Button>
        </div>
    );
};

export default ThemeSwitcher;
