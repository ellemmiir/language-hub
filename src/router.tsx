import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { HomePage } from "./pages/HomePage";
import { GrammarPage } from "./pages/GrammarPage";
import { GrammarTopicPage } from "./pages/GrammarTopicPage";
import { TextPage } from "./pages/TextPage";
import { DictionaryPage } from "./pages/DictionaryPage";
import { VersionPage } from "./pages/VersionPage";
import { AboutPage } from "./pages/AboutPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "grammar", element: <GrammarPage /> },
      { path: "grammar/:topicId", element: <GrammarTopicPage /> },
      { path: "texts", element: <TextPage /> },
      { path: "dictionary", element: <DictionaryPage /> },
      { path: "versions", element: <VersionPage /> },
      { path: "about", element: <AboutPage /> },
    ],
  },
]);
