import { useState } from "react";
import { NavIcon } from "./NavIcon";
import { Tooltip } from "../common/Tooltip";

type NavButtonProps = {
  onClick: () => void;
  isActive: boolean;
  isCollapsed?: boolean;
  iconName: "home" | "grammar" | "text" | "version" | "dictionary" | "about";
  children: React.ReactNode;
};

export function NavButton({
  onClick,
  isActive,
  isCollapsed,
  iconName,
  children,
}: NavButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  let baseClasses =
    "w-full cursor-pointer rounded-md transition-colors duration-200 h-10 gap-3 px-2 py-0 flex items-center";

  if (isActive) {
    baseClasses += " bg-black text-white dark:bg-grey-500 dark:text-white";
  } else if (isHovered) {
    baseClasses += " bg-grey-200 text-black dark:bg-grey-600 dark:text-white";
  } else {
    baseClasses += " bg-transparent text-black dark:text-white";
  }

  const button = (
    <button
      onClick={onClick}
      className={baseClasses}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-5 h-5">
        <NavIcon name={iconName} isActive={isActive} />
      </div>

      <span
        className={`
          transition-all duration-200 ease-out
          whitespace-nowrap overflow-hidden leading-10
          ${isCollapsed ? "max-w-0 opacity-0" : "max-w-50 opacity-100"}
        `}
      >
        {children}
      </span>
    </button>
  );

  if (isCollapsed) {
    return (
      <Tooltip text={children?.toString() || ""} position="right">
        {button}
      </Tooltip>
    );
  }

  return button;
}
