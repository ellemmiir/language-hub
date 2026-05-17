import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { HomePage } from "./pages/home/HomePage";
import { GrammarPage } from "./pages/grammar/GrammarPage";
import { GrammarTopicPage } from "./pages/grammar/GrammarTopicPage";
import { TextPage } from "./pages/texts/TextPage";
import { DictionaryPage } from "./pages/dictionary/DictionaryPage";
import { VersionPage } from "./pages/version/VersionPage";
import { AboutPage } from "./pages/about/AboutPage";

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
