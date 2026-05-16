import { useState } from "react";
import { CollapseButton } from "./CollapseButton";
import { Logo } from "./Logo";
import { NavButton } from "./NavButton";
import { SectionDivider } from "./SectionDivider";

type SidebarProps = {
  onNavigate: (page: string) => void;
  currentPage: string;
};

export function Sidebar({ onNavigate, currentPage }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(() => {
    const saved = localStorage.getItem("sidebarCollapsed");
    return saved === "true";
  });

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
    localStorage.setItem("sidebarCollapsed", (!isCollapsed).toString());
  };

  const mainNavItems = [
    { id: "home", label: "Главная", iconName: "home" as const },
    { id: "grammar", label: "Грамматика", iconName: "grammar" as const },
    { id: "text", label: "Тексты", iconName: "text" as const },
    { id: "dictionary", label: "Словарь", iconName: "dictionary" as const },
  ];

  const secondaryNavItems = [
    { id: "version", label: "Версии", iconName: "version" as const },
  ];

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
          {mainNavItems.map((item) => (
            <li key={item.id}>
              <NavButton
                onClick={() => onNavigate(item.id)}
                isActive={currentPage === item.id}
                isCollapsed={isCollapsed}
                iconName={item.iconName}
              >
                {item.label}
              </NavButton>
            </li>
          ))}
        </ul>

        <SectionDivider isCollapsed={isCollapsed} title="Другое" />

        <ul className="list-none p-0 space-y-2">
          {secondaryNavItems.map((item) => (
            <li key={item.id}>
              <NavButton
                onClick={() => onNavigate(item.id)}
                isActive={currentPage === item.id}
                isCollapsed={isCollapsed}
                iconName={item.iconName}
              >
                {item.label}
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
