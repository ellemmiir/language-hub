import { useState } from "react";
import { GrammarColumn } from "../components/grammar/GrammarColumn";
import grammarData from "../data/grammarTopics.json";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

type GrammarPageProps = {
  onNavigate: (page: string, topicId?: string) => void;
};

export function GrammarPage({ onNavigate }: GrammarPageProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const beginnerData = grammarData[0];
  const advancedData = grammarData[1];

  const handleTopicClick = (topicId: string) => {
    onNavigate("grammarTopic", topicId);
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight dark:text-white">
          Грамматика
        </h1>
        <p className="text-grey-400 dark:text-gray-400">
          Все правила английского языка в одном месте
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
                focus:ring-2 focus:ring-blue-400 focus:outline-none
              "
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <GrammarColumn
          title={beginnerData.title}
          categories={beginnerData.categories}
          onTopicClick={handleTopicClick}
        />
        <GrammarColumn
          title={advancedData.title}
          categories={advancedData.categories}
          onTopicClick={handleTopicClick}
        />
      </div>
    </div>
  );
}
