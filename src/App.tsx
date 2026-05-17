import { useState } from "react";
import { Sidebar } from "./components/layout/Sidebar";
import { TopBar } from "./components/layout/TopBar";
import { AccentBlob } from "./components/common/AccentBlob";
import { HomePage } from "./pages/home/HomePage";
import { GrammarPage } from "./pages/grammar/GrammarPage";
import { TextPage } from "./pages/texts/TextPage";
import { DictionaryPage } from "./pages/dictionary/DictionaryPage";
import { VersionPage } from "./pages/version/VersionPage";
import { AboutPage } from "./pages/about/AboutPage";

function App() {
  const [currentPage] = useState("home");

  // Определяем цвет для текущей страницы
  const getAccentColor = () => {
    switch (currentPage) {
      case "grammar":
        return "bg-blue-800";
      case "dictionary":
        return "bg-yellow-500";
      case "text":
        return "bg-green-500";
      case "version":
        return "bg-gray-400";
      default:
        return "bg-gray-400";
    }
  };

  let pageContent;
  if (currentPage === "home") {
    pageContent = <HomePage />;
  } else if (currentPage === "grammar") {
    pageContent = <GrammarPage />;
  } else if (currentPage === "text") {
    pageContent = <TextPage />;
  } else if (currentPage === "dictionary") {
    pageContent = <DictionaryPage />;
  } else if (currentPage === "version") {
    pageContent = <VersionPage />;
  } else if (currentPage === "about") {
    pageContent = <AboutPage />;
  } else {
    pageContent = <div>Страница не найдена</div>;
  }

  return (
    <div className="flex h-screen relative bg-grey-100 dark:bg-grey-900">
      <Sidebar />

      <AccentBlob color={getAccentColor()} />

      <div className="flex-1 flex flex-col relative overflow-hidden">
        <TopBar />
        <main className="flex-1 px-6 pt-6 bg-transparent  overflow-y-auto z-1">
          {pageContent}
        </main>
      </div>
    </div>
  );
}

export default App;
