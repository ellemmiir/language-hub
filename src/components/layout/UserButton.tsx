import { useState, useRef, useEffect } from "react";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon as UserCircleIconSolid } from "@heroicons/react/24/solid";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";

export function UserButton() {
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setIsActive(!isActive);
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setIsActive(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block">
      <button
        ref={buttonRef}
        className="p-2 rounded-lg transition-all duration-200 hover:bg-grey-200 dark:hover:bg-grey-600"
        onClick={handleClick}
        title="Профиль"
      >
        {isActive ? (
          <UserCircleIconSolid className="w-6 h-6 text-black dark:text-white" />
        ) : (
          <UserCircleIcon className="w-6 h-6 text-black dark:text-white" />
        )}
      </button>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute -right-2 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700"
        >
          <div className="absolute -top-2 right-3 w-3 h-3 bg-white dark:bg-gray-800 border-l border-t border-gray-200 dark:border-gray-700 rotate-45" />
          <div className="p-4 text-center space-y-3">
            <div className="flex justify-center">
              <Cog6ToothIcon className="w-12 h-12 text-gray-400 dark:text-gray-500 animate-spin-slow" />
            </div>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
              🚧 В процессе разработки 🚧
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Здесь будет личный кабинет, статистика прогресса и многое другое
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
