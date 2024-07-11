"use client";
import React, {useEffect} from "react";
import { useTheme } from "next-themes";
import { Sun, Moon} from 'lucide-react';

const ToggleTheme: React.FC = () => {
    const { theme, setTheme } = useTheme();

    const [mounted, setMounted] = React.useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);
   

    const handleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    if (!mounted) return null;

    return (
        <div className="w-full flex justify-end xl:pr-64 lg:pr-48 pr-16 -mt-60 mb-32">
            <button 
                onClick={handleTheme}
                className={`relative border-3 w-16 h-8 rounded-full transition-bg-border duration-200 ease ${theme === "light" ? "bg-gray-50 border-gray-50" : "bg-black border-black"}`}
                >
                <div className={`absolute flex justify-center items-center bg-pink-700 rounded-full w-8 h-8 transition-left duration-200 ease ${theme === "light" ? "left-0" : "right-0"} top-0`}>
            { theme === "light" ?  <Moon color="white"/> : <Sun /> }
                </div>
            </button>
        </div>
    )
};

export default ToggleTheme;