import { useParams } from "react-router-dom";

export function GrammarTopicPage() {
  const { topicId } = useParams();

  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight dark:text-white">
        Грамматика
      </h1>
      <p className="text-grey-400 dark:text-gray-400 mb-6">
        Тема: <span className="font-mono text-blue-600">{topicId}</span>
      </p>
      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
        <p className="text-gray-600 dark:text-gray-300">
          Здесь будет содержание темы <strong>{topicId}</strong>.
        </p>
      </div>
    </div>
  );
}
