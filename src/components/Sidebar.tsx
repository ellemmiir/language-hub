import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { CollapseButton } from "./CollapseButton";
import { Logo } from "./Logo";
import { NavButton } from "./NavButton";
import { SectionDivider } from "./SectionDivider";

export function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(() => {
    const saved = localStorage.getItem("sidebarCollapsed");
    return saved === "true";
  });

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
    localStorage.setItem("sidebarCollapsed", (!isCollapsed).toString());
  };

  const currentPath = location.pathname;

  const mainNavItems = [
    { id: "", label: "Главная", iconName: "home" as const, path: "/" },
    {
      id: "grammar",
      label: "Грамматика",
      iconName: "grammar" as const,
      path: "/grammar",
    },
    { id: "text", label: "Тексты", iconName: "text" as const, path: "/texts" },
    {
      id: "dictionary",
      label: "Словарь",
      iconName: "dictionary" as const,
      path: "/dictionary",
    },
  ];

  const secondaryNavItems = [
    {
      id: "version",
      label: "Версии",
      iconName: "version" as const,
      path: "/versions",
    },
    {
      id: "about",
      label: "О проекте",
      iconName: "about" as const,
      path: "/about",
    },
  ];

  const sidebarWidth = isCollapsed ? "w-[80px]" : "w-[250px]";

  const isActive = (path: string) => {
    if (path === "/") return currentPath === "/";
    return currentPath.startsWith(path);
  };

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
                onClick={() => navigate(item.path)}
                isActive={isActive(item.path)}
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
                onClick={() => navigate(item.path)}
                isActive={isActive(item.path)}
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
