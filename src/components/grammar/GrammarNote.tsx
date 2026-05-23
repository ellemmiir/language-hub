import { FormattedText } from "./FormattedText";

type GrammarNoteProps = {
  title: string;
  content: string;
  examples?: { en: string; ru: string }[];
};

export function GrammarNote({ title, content, examples }: GrammarNoteProps) {
  return (
    <div className="p-5 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
      <h3 className="text-lg font-semibold mb-2 text-blue-800 dark:text-blue-300">
        {title}
      </h3>
      <div className="mb-3">
        <FormattedText
          text={content}
          className="text-gray-700 dark:text-gray-300 mb-3"
        />
      </div>
      {examples && (
        <ul className="space-y-1 pl-4">
          {examples.map((ex, idx) => (
            <li key={idx} className=" text-gray-600 dark:text-gray-400">
              <span className="mr-2 select-none">•</span>
              <span>{ex.en}</span> – <span className="italic">{ex.ru}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
