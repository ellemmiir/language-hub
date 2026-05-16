import rawPhrases from "./phrases.json";

export type Phrase = {
  id: string;
  phrase: string;
  russianEquivalent?: string;
  meaning: string;
  example: string;
  exampleTranslation?: string;
  tags: string[];
};

export const phrases: Phrase[] = rawPhrases;
