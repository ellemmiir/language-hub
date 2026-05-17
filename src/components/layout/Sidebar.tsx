import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRoute } from "../../hooks/useRoute";
import { MAIN_SECTIONS, SECONDARY_SECTIONS } from "../../config/sections";

import { Logo } from "../common/Logo";
import { CollapseButton } from "./CollapseButton";
import { NavButton } from "../navigation/NavButton";
import { SectionDivider } from "./SectionDivider";

export function Sidebar() {
  const navigate = useNavigate();
  const { isActive } = useRoute();

  const [isCollapsed, setIsCollapsed] = useState(() => {
    const saved = localStorage.getItem("sidebarCollapsed");
    return saved === "true";
  });

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
    localStorage.setItem("sidebarCollapsed", (!isCollapsed).toString());
  };

  const sidebarWidth = isCollapsed ? "w-[80px]" : "w-[250px]";

  return (
    <div
      className={`
        ${sidebarWidth} py-6 px-4
        min-h-screen border-r-2 border-grey-200
        bg-white text-black
        dark:border-grey-600 dark:bg-grey-800 dark:text-white 
        transition-[width] duration-300 ease-out
        flex flex-col relative
      `}
    >
      <div className="flex mb-8 justify-center md:justify-start">
        <Logo />
      </div>

      <nav className="flex-1">
        <ul className="list-none p-0 space-y-2">
          {MAIN_SECTIONS.map((section) => (
            <li key={section.path}>
              <NavButton
                onClick={() => navigate(section.path)}
                isActive={isActive(section.path)}
                isCollapsed={isCollapsed}
                iconName={section.id}
              >
                {section.label}
              </NavButton>
            </li>
          ))}
        </ul>

        <SectionDivider isCollapsed={isCollapsed} title="Другое" />

        <ul className="list-none p-0 space-y-2">
          {SECONDARY_SECTIONS.map((section) => (
            <li key={section.path}>
              <NavButton
                onClick={() => navigate(section.path)}
                isActive={isActive(section.path)}
                isCollapsed={isCollapsed}
                iconName={section.id}
              >
                {section.label}
              </NavButton>
            </li>
          ))}
        </ul>
      </nav>

      <div className="absolute -right-4 top-12 z-50">
        <CollapseButton isCollapsed={isCollapsed} onToggle={toggleCollapse} />
      </div>
    </div>
  );
}
