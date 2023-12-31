'use client';
import { useState, useEffect } from 'react';
import { ThemeProvider } from 'next-themes';

const Providers = ({ children, ...props }) => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <>{children}</>;
    }
    return <ThemeProvider {...props}> {children}</ThemeProvider>;
};

export default Providers;
