import { Outlet } from "react-router-dom";

import { useRoute } from "../hooks/useRoute";
import { getSectionByPath } from "../config/sections";

import { Sidebar } from "../components/layout/Sidebar";
import { TopBar } from "../components/layout/TopBar";
import { AccentBlob } from "../components/common/AccentBlob";

export function Layout() {
  const { currentPath } = useRoute();
  const section = getSectionByPath(currentPath);
  const accentColor = section?.accentColor || "bg-grey-500";

  return (
    <div className="flex h-screen relative bg-grey-100 dark:bg-grey-900">
      <Sidebar />
      <AccentBlob color={accentColor} />
      <div className="flex-1 flex flex-col relative overflow-hidden">
        <TopBar />
        <main className="flex-1 px-6 pt-6 bg-transparent overflow-y-auto z-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
