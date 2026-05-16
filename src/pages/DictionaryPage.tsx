import React, { useState, useMemo, useRef, useCallback } from "react";
import { Virtuoso, type VirtuosoHandle } from "react-virtuoso";
import { phrases, type Phrase } from "../data/phrases";
import { PhraseCard } from "../components/PhraseCard";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useDebounce } from "../hooks/useDebounce";
import { AlphabetScroll } from "../components/AlphabetScroll";
import { useDictionaryStats } from "../hooks/useDictionaryStats";

const MemoizedPhraseCard = React.memo(
  ({ phrase, searchQuery }: { phrase: Phrase; searchQuery: string }) => (
    <PhraseCard phrase={phrase} searchQuery={searchQuery} />
  ),
);
MemoizedPhraseCard.displayName = "MemoizedPhraseCard";

export function DictionaryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string>("Все");
  const virtuosoRef = useRef<VirtuosoHandle>(null);

  const debouncedSearch = useDebounce(searchQuery, 300);

  const { total, byTag, sortedTags } = useDictionaryStats();

  // const allTags = ["Все", ...new Set(phrases.flatMap((p) => p.tags))];

  const allTagsWithCount = ["Все", ...sortedTags.map(({ tag }) => tag)];

  const filteredPhrases = useMemo(() => {
    return phrases.filter((phrase) => {
      const matchesSearch =
        debouncedSearch === "" ||
        phrase.phrase.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        phrase.meaning.toLowerCase().includes(debouncedSearch.toLowerCase());

      const matchesTag =
        selectedTag === "Все" || phrase.tags.includes(selectedTag);
      return matchesSearch && matchesTag;
    });
  }, [debouncedSearch, selectedTag]);

  const availableLetters = useMemo(() => {
    const letters = new Set<string>();
    filteredPhrases.forEach((phrase) => {
      const firstLetter = phrase.phrase.charAt(0).toUpperCase();
      if (/[A-Z]/.test(firstLetter)) {
        letters.add(firstLetter);
      }
    });
    return letters;
  }, [filteredPhrases]);

  const findFirstIndexByLetter = useCallback(
    (letter: string) => {
      const lowerLetter = letter.toLowerCase();
      return filteredPhrases.findIndex((phrase) =>
        phrase.phrase.toLowerCase().startsWith(lowerLetter),
      );
    },
    [filteredPhrases],
  );

  const handleLetterSelect = useCallback(
    (letter: string) => {
      const index = findFirstIndexByLetter(letter);
      if (index !== -1 && virtuosoRef.current) {
        virtuosoRef.current.scrollToIndex({ index, align: "start" });
      }
    },
    [findFirstIndexByLetter],
  );

  const Footer = () => <div className="h-8" />;
  const showAlphabet = filteredPhrases.length > 0;

  return (
    <div className="h-full flex flex-col">
      <div className="shrink-0">
        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight dark:text-white">
            Словарь
          </h1>
          <p className="text-grey-400 dark:text-gray-400">
            Сленг, идиомы и фразеологизмы английского языка
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-8">
          <div className="relative">
            <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-grey-300" />
            <input
              type="text"
              placeholder="Поиск по фразе или значению..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="
                w-full pl-10 pr-4 py-2 rounded-md 
                border border-grey-200 dark:border-grey-600 
                bg-gray-50 dark:bg-grey-800 
                text-black dark:text-white 
                placeholder-grey-300
                focus:ring-2 focus:ring-yellow-400 focus:outline-none
              "
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {allTagsWithCount.map((tag) => {
            const count = tag === "Все" ? total : byTag[tag];
            return (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1.5 rounded-md text-sm transition-colors cursor-pointer ${
                  selectedTag === tag
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "bg-gray-200 text-black dark:bg-grey-600 dark:text-white hover:bg-gray-300 dark:hover:bg-grey-400"
                }`}
              >
                {tag} <span className="ml-1 text-xs opacity-70">({count})</span>
              </button>
            );
          })}
        </div>
      </div>

      {filteredPhrases.length === 0 ? (
        <div className="text-center py-16 flex-1">
          <p className="text-lg text-grey-500 dark:text-grey-400 mb-2">
            🔍 Ничего не найдено
          </p>
          <p className="text-sm text-grey-400 dark:text-grey-600">
            Попробуйте изменить запрос или выбрать другой фильтр
          </p>
        </div>
      ) : (
        <div className="flex-1 min-h-0 flex gap-6">
          <AlphabetScroll
            onLetterSelect={handleLetterSelect}
            visible={showAlphabet}
            availableLetters={availableLetters}
          />
          <div className="flex-1 min-h-0">
            <Virtuoso
              ref={virtuosoRef}
              style={{ height: "100%" }}
              totalCount={filteredPhrases.length}
              increaseViewportBy={400}
              overscan={200}
              components={{ Footer }}
              itemContent={(index) => (
                <MemoizedPhraseCard
                  phrase={filteredPhrases[index]}
                  searchQuery={debouncedSearch}
                />
              )}
            />
          </div>
        </div>
      )}
    </div>
  );
}
