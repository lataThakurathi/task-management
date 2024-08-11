"use client";

import clsx from "clsx";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IoIosMoon, IoIosSunny } from "react-icons/io";

const ThemeToggler = (props) => {
    const { className, ...otherProps } = props;

    const [mounted, setMounted] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();
    const [checked, setChecked] = useState(resolvedTheme === "dark");

    const handleCheckboxChange = () => {
        setTheme(resolvedTheme == "dark" ? "light" : "dark");
    };

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        setChecked(resolvedTheme === "dark");
    }, [resolvedTheme]);

    if (!mounted) {
        return null;
    }

    return (
        <label
            htmlFor="theme-toggle-checkbox"
            className={clsx(
                "relative block w-3 cursor-pointer select-none rounded-full shadow",
                className
            )}
            {...otherProps}>
            <input
                type="checkbox"
                id="theme-toggle-checkbox"
                className="peer/themeToggler absolute h-0 w-0 opacity-0"
                checked={checked}
                onChange={handleCheckboxChange}
            />

            <div className="flex transition-all h-1.5 w-3 items-center justify-between rounded-full bg-primary p-0.25 peer-checked/themeToggler:bg-gray-100">
                <SunMoonIcons icon={IoIosSunny} />
                <SunMoonIcons icon={IoIosMoon} />
            </div>
            <div className="absolute right-0.125 top-0.125 h-1.25 w-1.25 rounded-full bg-white transition-all peer-checked/themeToggler:right-1.625 peer-checked/themeToggler:bg-gray-900"></div>
        </label>
    );
};

const SunMoonIcons = (props) => {
    const { icon: Icon, className, ...otherProps } = props;

    return (
        <Icon
            className={clsx(
                "text-1 text-white peer-checked/themeToggler:text-gray-900 dark:text-gray-900",
                className
            )}
            {...otherProps}></Icon>
    );
};

export default ThemeToggler;
