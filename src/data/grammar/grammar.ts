//строка → таблица
export type ConjugationRow = {
  affirmative: string;
  negative: string;
  question: string;
  translationAffirmative: string;
  translationNegative: string;
  translationQuestion: string;
};

export type ConjugationTableData = {
  rows: ConjugationRow[];
};

//основной контент
export type UsageBlock = {
  type: "description" | "examples" | "note";
  content:
    | string
    | { en: string; ru: string }[]
    | {
        title: string;
        content: string;
        examples?: { en: string; ru: string }[];
      };
  layout?: "single" | "double";
};

export type UsageSection = {
  title: string;
  blocks: UsageBlock[];
};

//примеры
export type UsageExample = {
  title: string;
  description: string;
  examples: { en: string; ru: string }[];
};

//заметки
export type GrammarNote = {
  title: string;
  content: string;
  examples?: { en: string; ru: string }[];
};

//маркеры времени
export type TimeMarkerGroup = {
  markers: string[];
  spaceAfter?: boolean;
};

//страница темы
export type GrammarTopic = {
  id: string;
  title: string;
  titleRu: string;
  conjugationTable: ConjugationTableData;
  toBeTable?: ConjugationTableData;
  usage: UsageSection[];
  timeMarkers: TimeMarkerGroup[];
  notes?: GrammarNote[];
};
