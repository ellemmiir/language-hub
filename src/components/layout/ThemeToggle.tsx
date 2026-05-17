import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import {
  SunIcon as SunIconSolid,
  MoonIcon as MoonIconSolid,
} from "@heroicons/react/24/solid";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") return true;
    if (saved === "light") return false;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="p-2 transition-all cursor-pointer duration-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-5 h-5">
        <div
          className={`absolute inset-0 transition-all duration-200  ${
            isHovered ? "opacity-0 scale-75" : "opacity-100 scale-100"
          }`}
        >
          {isDark ? (
            <MoonIcon className="w-5 h-5 text-black dark:text-white" />
          ) : (
            <SunIcon className="w-5 h-5 text-black dark:text-white" />
          )}
        </div>
        <div
          className={`absolute inset-0 transition-all duration-200 ${
            isHovered ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        >
          {isDark ? (
            <MoonIconSolid className="w-5 h-5 text-black dark:text-white" />
          ) : (
            <SunIconSolid className="w-5 h-5 text-black dark:text-white" />
          )}
        </div>
      </div>
    </button>
  );
}
