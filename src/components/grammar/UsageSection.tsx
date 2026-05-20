import type { UsageBlock } from "../../data/grammar/grammar";
import { FormattedText } from "./FormattedText";
import { GrammarNote } from "./GrammarNote";

type UsageSectionProps = {
  title: string;
  icon?: React.ElementType;
  blocks: UsageBlock[];
};

export function UsageSection({ title, icon: Icon, blocks }: UsageSectionProps) {
  return (
    <div className="mb-10">
      <div className="flex items-start gap-4 mb-5">
        {Icon && (
          <Icon className="w-5 h-5 mt-1 flex-shrink-0 text-blue-600 dark:text-blue-400" />
        )}
        <h2 className="text-2xl font-bold dark:text-white leading-tight">
          {title}
        </h2>
      </div>

      <div className="pl-[36px] space-y-4">
        {blocks.map((block, idx) => {
          if (block.type === "description") {
            return (
              <div key={idx} className="mb-5">
                <FormattedText
                  text={block.content as string}
                  className="text-gray-600 dark:text-gray-300"
                />
              </div>
            );
          }

          if (block.type === "examples") {
            const examples = block.content as { en: string; ru: string }[];
            const layout = block.layout || "single";

            if (layout === "double") {
              const midIndex = Math.ceil(examples.length / 2);
              const leftColumn = examples.slice(0, midIndex);
              const rightColumn = examples.slice(midIndex);

              return (
                <div key={idx} className="ml-6 space-y-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                    <div className="space-y-1">
                      {leftColumn.map((ex, exIdx) => (
                        <div
                          key={exIdx}
                          className="text-gray-700 dark:text-gray-300"
                        >
                          <span className="mr-1 select-none">•</span>
                          <FormattedText text={ex.en} />
                          {ex.ru && (
                            <>
                              <span className="mx-2 text-gray-400 dark:text-gray-500">
                                —
                              </span>
                              <span className="italic text-gray-500 dark:text-gray-400">
                                {ex.ru}
                              </span>
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="space-y-1">
                      {rightColumn.map((ex, exIdx) => (
                        <div
                          key={exIdx}
                          className="text-gray-700 dark:text-gray-300"
                        >
                          <span className="mr-1 select-none">•</span>
                          <FormattedText text={ex.en} />
                          {ex.ru && (
                            <>
                              <span className="mx-2 text-gray-400 dark:text-gray-500">
                                —
                              </span>
                              <span className="italic text-gray-500 dark:text-gray-400">
                                {ex.ru}
                              </span>
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div key={idx} className="ml-6 space-y-1">
                {examples.map((ex, exIdx) => (
                  <div key={exIdx} className="text-gray-700 dark:text-gray-300">
                    <span className="mr-1 select-none">•</span>
                    <FormattedText text={ex.en} />
                    {ex.ru && (
                      <>
                        <span className="mx-2 text-gray-400 dark:text-gray-500">
                          —
                        </span>
                        <span className="italic text-gray-500 dark:text-gray-400">
                          {ex.ru}
                        </span>
                      </>
                    )}
                  </div>
                ))}
              </div>
            );
          }

          if (block.type === "note") {
            const note = block.content as {
              title: string;
              content: string;
              examples?: { en: string; ru: string }[];
            };
            return (
              <div key={idx}>
                <GrammarNote
                  title={note.title}
                  content={note.content}
                  examples={note.examples}
                />
              </div>
            );
          }

          return null;
        })}
      </div>
    </div>
  );
}
