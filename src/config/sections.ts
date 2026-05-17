export type SectionId =
  | "home"
  | "grammar"
  | "texts"
  | "dictionary"
  | "versions"
  | "about";

export type Section = {
  id: SectionId;
  path: string;
  label: string;
  accentColor: string;
};

export const SECTIONS: Section[] = [
  {
    id: "home",
    path: "/",
    label: "Главная",
    accentColor: "bg-gray-400",
  },
  {
    id: "grammar",
    path: "/grammar",
    label: "Грамматика",
    accentColor: "bg-blue-500",
  },
  {
    id: "texts",
    path: "/texts",
    label: "Тексты",
    accentColor: "bg-green-500",
  },
  {
    id: "dictionary",
    path: "/dictionary",
    label: "Словарь",
    accentColor: "bg-yellow-500",
  },
  {
    id: "versions",
    path: "/versions",
    label: "Версии",
    accentColor: "bg-grey-500",
  },
  {
    id: "about",
    path: "/about",
    label: "О проекте",
    accentColor: "bg-grey-500",
  },
];

export const MAIN_SECTIONS = SECTIONS.filter(
  (s) => !["versions", "about"].includes(s.id),
);
export const SECONDARY_SECTIONS = SECTIONS.filter((s) =>
  ["versions", "about"].includes(s.id),
);

export const getSectionByPath = (path: string): Section | undefined => {
  return SECTIONS.find((s) => path === s.path || path.startsWith(`${s.path}/`));
};
