import { useState } from "react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

type Topic = {
  id: string;
  title: string;
  description?: string;
};

type AccordionCategoryProps = {
  category: {
    id: string;
    title: string;
    topics: Topic[];
  };
  onTopicClick: (topicId: string) => void;
};

export function AccordionCategory({
  category,
  onTopicClick,
}: AccordionCategoryProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-grey-200 dark:border-grey-700 rounded-md overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between p-4 
          transition-all duration-200 text-left
          
           ${
             isOpen
               ? "bg-black text-white dark:bg-white dark:text-black rounded-md"
               : "bg-gray-50 dark:bg-grey-600 text-gray-900 dark:text-white hover:bg-grey-200 dark:hover:bg-grey-500"
           }
          `}
      >
        <span
          className={`font-medium ${isOpen ? "text-white dark:text-black" : "text-gray-900 dark:text-white"}`}
        >
          {category.title}
        </span>
        {isOpen ? (
          <ChevronDownIcon className="w-5 h-5 text-gray-500 " />
        ) : (
          <ChevronRightIcon className="w-5 h-5 text-gray-500" />
        )}
      </button>

      {isOpen && (
        <div className="divide-y divide-gray-100 dark:divide-grey-600">
          {category.topics.map((topic) => (
            <button
              key={topic.id}
              onClick={() => onTopicClick(topic.id)}
              className="w-full text-left px-4 py-3 hover:bg-grey-200 dark:hover:bg-grey-600/50 transition-colors"
            >
              <div className="text-sm font-medium text-gray-800 dark:text-gray-200">
                {topic.title}
              </div>
              {topic.description && (
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                  {topic.description}
                </div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
