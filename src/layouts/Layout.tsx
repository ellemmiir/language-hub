import { Outlet, useLocation } from "react-router-dom";
import { Sidebar } from "../components/layout/Sidebar";
import { TopBar } from "../components/layout/TopBar";
import { AccentBlob } from "../components/common/AccentBlob";

export function Layout() {
  const location = useLocation();
  const currentPage = location.pathname.slice(1) || "home";

  const getAccentColor = () => {
    if (currentPage.startsWith("grammar")) return "bg-blue-800";
    if (currentPage === "dictionary") return "bg-yellow-500";
    if (currentPage === "texts") return "bg-green-500";
    if (currentPage === "versions") return "bg-gray-400";
    return "bg-gray-400";
  };

  return (
    <div className="flex h-screen relative bg-grey-100 dark:bg-grey-900">
      <Sidebar />
      <AccentBlob color={getAccentColor()} />
      <div className="flex-1 flex flex-col relative overflow-hidden">
        <TopBar />
        <main className="flex-1 px-6 pt-6 bg-transparent overflow-y-auto z-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
