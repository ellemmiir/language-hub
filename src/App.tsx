import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { TopBar } from "./components/TopBar";
import { HomePage } from "./pages/HomePage";
import { GrammarPage } from "./pages/GrammarPage";
import { TextPage } from "./pages/TextPage";
import { VersionPage } from "./pages/VersionPage";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  let pageContent;
  if (currentPage === "home") {
    pageContent = <HomePage onNavigate={setCurrentPage} />;
  } else if (currentPage === "grammar") {
    pageContent = <GrammarPage />;
  } else if (currentPage === "text") {
    pageContent = <TextPage />;
  } else if (currentPage === "version") {
    pageContent = <VersionPage />;
  } else {
    pageContent = <div>Страница не найдена</div>;
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar onNavigate={setCurrentPage} currentPage={currentPage} />

      <div className="flex-1 flex flex-col">
        <TopBar />
        <main className="flex-1 p-6 bg-grey-100 dark:bg-grey-900">
          {pageContent}
        </main>
      </div>
    </div>
  );
}

export default App;
