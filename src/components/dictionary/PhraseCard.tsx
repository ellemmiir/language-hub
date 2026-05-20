import type { Phrase } from "../../data/phrases";
import { HighlightText } from "../common/HighlightText";

type PhraseCardProps = {
  phrase: Phrase;
  searchQuery?: string;
};

const tagOrder: Record<string, number> = {
  пословица: 1,
  поговорка: 2,
  фразеологизм: 3,
  идиома: 4,
  сленг: 5,
  неологизм: 6,
};

export function PhraseCard({ phrase, searchQuery = "" }: PhraseCardProps) {
  const sortedTags = [...phrase.tags].sort((a, b) => {
    const orderA = tagOrder[a] ?? 99;
    const orderB = tagOrder[b] ?? 99;
    return orderA - orderB;
  });

  return (
    <div className="border border-grey-200 dark:border-grey-700 rounded-md p-5 bg-white dark:bg-grey-600 hover:shadow-md transition-shadow mb-4">
      <div className="flex justify-between items-start gap-4 mb-4">
        <h3 className="text-xl font-bold text-black dark:text-white">
          <HighlightText text={phrase.phrase} highlight={searchQuery} />
        </h3>
        <div className="flex flex-wrap gap-1 justify-end">
          {sortedTags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-md bg-yellow-300 text-black whitespace-nowrap"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {phrase.russianEquivalent && (
        <div className="mb-3">
          <span className="text-xs font-semibold text-grey-500 dark:text-grey-200 uppercase tracking-wider">
            Аналог
          </span>
          <p className="text-md text-black dark:text-white font-medium">
            <HighlightText
              text={phrase.russianEquivalent}
              highlight={searchQuery}
            />
          </p>
        </div>
      )}

      <div className="mb-3">
        <span className="text-xs font-semibold text-grey-500 dark:text-grey-200 uppercase tracking-wider">
          Значение
        </span>
        <p className="text-sm text-grey-700 dark:text-grey-300">
          <HighlightText text={phrase.meaning} highlight={searchQuery} />
        </p>
      </div>

      <div className="pt-2 border-t border-grey-100 dark:border-grey-700">
        <span className="text-xs font-semibold text-grey-500 dark:text-grey-200 uppercase tracking-wider">
          Пример
        </span>
        <div className="mt-1 space-y-1">
          <p className="text-sm text-grey-700 dark:text-grey-300 italic">
            {phrase.example}
          </p>
          {phrase.exampleTranslation && (
            <p className="text-sm text-grey-500 dark:text-grey-300 italic">
              {phrase.exampleTranslation}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
