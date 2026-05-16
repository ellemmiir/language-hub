import { useState } from "react";
import { phrases } from "../data/phrases";
import { PhraseCard } from "../components/PhraseCard";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useDebounce } from "../hooks/useDebounce";

export function DictionaryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string>("Все");

  const debouncedSearch = useDebounce(searchQuery, 300);

  const allTags = ["Все", ...new Set(phrases.flatMap((p) => p.tags))];

  const filteredPhrases = phrases.filter((phrase) => {
    const matchesSearch =
      debouncedSearch === "" ||
      phrase.phrase.toLowerCase().includes(searchQuery.toLowerCase()) ||
      phrase.meaning.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTag =
      selectedTag === "Все" || phrase.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <div>
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
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-3 py-1.5 rounded-md text-sm transition-colors cursor-pointer ${
              selectedTag === tag
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "bg-gray-200 text-black dark:bg-grey-600 dark:text-white hover:bg-gray-300 dark:hover:bg-grey-400"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {filteredPhrases.length === 0 ? (
        <div className="text-center py-12 text-grey-500 dark:text-grey-300">
          Ничего не найдено
          <br />
          <span className="text-sm dark:text-grey-300">
            Попробуйте изменить запрос
          </span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredPhrases.map((phrase) => (
            <PhraseCard key={phrase.id} phrase={phrase} />
          ))}
        </div>
      )}
    </div>
  );
}
