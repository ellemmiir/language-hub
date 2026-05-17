import { AccordionCategory } from "./AccordionCategory";

type Category = {
  id: string;
  title: string;
  topics: { id: string; title: string; description?: string }[];
};

type GrammarColumnProps = {
  title: string;
  categories: Category[];
  onTopicClick: (topicId: string) => void;
  isCollapsed?: boolean;
};

export function GrammarColumn({
  title,
  categories,
  onTopicClick,
}: GrammarColumnProps) {
  return (
    <div className="rounded-md">
      <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-black dark:text-white">
        {title}
      </h2>
      <div className="space-y-3">
        {categories.map((category) => (
          <AccordionCategory
            key={category.id}
            category={category}
            onTopicClick={onTopicClick}
          />
        ))}
      </div>
    </div>
  );
}
