import React from "react";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

function ThemeSwitch({ theme, action, className }) {
    return (
        <div
            className={`md:w-14 md:h-7 w-12 h-6 flex items-center dark:bg-white-1 bg-purple-1  rounded-full p-1 cursor-pointer`}
            onClick={action}
        >
            {/* Switch */}
            <div
                className={`md:w-6 md:h-6 h-5 dark:bg-purple-1 bg-white-1  w-5 rounded-full shadow-md transform flex justify-center items-center ${className}`}
            >
                {theme === "dark" ? (
                    <MdOutlineLightMode className="font-black text-white-1" />
                ) : (
                    <MdOutlineDarkMode className="font-black" />
                )}
            </div>
        </div>
    );
}

export default ThemeSwitch;
