import { useState } from "react";
import { getLatestVersion } from "../data/versions";

type UpdateWidgetProps = {
  onNavigate: (page: string) => void;
};

export function UpdateWidget({ onNavigate }: UpdateWidgetProps) {
  const latestVersion = getLatestVersion();
  const [isHovered, setIsHovered] = useState(false);

  const getTitle = (type: keyof typeof latestVersion.changes) => {
    switch (type) {
      case "added":
        return "Новое";
      case "fixed":
        return "Исправлено";
      case "changed":
        return "Изменено";
      default:
        return "";
    }
  };

  const hasChanges = (type: keyof typeof latestVersion.changes) => {
    return latestVersion.changes[type].length > 0;
  };

  return (
    <div className="rounded-xl p-5 bg-white dark:bg-grey-600 border border-grey-200 dark:border-grey-700">
      <h2 className="text-xl font-semibold mb-1 dark:text-white">
        Последние обновления
      </h2>
      <p className="text-sm text-grey-500 dark:text-grey-400 mb-4">
        Версия {latestVersion.version} от {latestVersion.date}
      </p>

      <div className="space-y-4 max-h-75 overflow-y-auto">
        {hasChanges("added") && (
          <div>
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              {getTitle("added")}:
            </h3>
            <ul className="space-y-1 pl-4">
              {latestVersion.changes.added.map((item, idx) => (
                <li
                  key={idx}
                  className="text-sm text-gray-600 dark:text-gray-400 list-disc"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {hasChanges("fixed") && (
          <div>
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              {getTitle("fixed")}:
            </h3>
            <ul className="space-y-1 pl-4">
              {latestVersion.changes.fixed.map((item, idx) => (
                <li
                  key={idx}
                  className="text-sm text-gray-600 dark:text-gray-400 list-disc"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {hasChanges("changed") && (
          <div>
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              {getTitle("changed")}:
            </h3>
            <ul className="space-y-1 pl-4">
              {latestVersion.changes.changed.map((item, idx) => (
                <li
                  key={idx}
                  className="text-sm text-gray-600 dark:text-gray-400 list-disc"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <button
        onClick={() => onNavigate("version")}
        className={`
          mt-4 px-3 py-2 rounded-md 
          transition-colors duration-200 
          text-sm font-medium cursor-pointer
          ${
            isHovered
              ? "bg-black text-white dark:bg-grey-500 dark:text-white"
              : "bg-grey-200 text-black dark:bg-grey-600 dark:text-white"
          }
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Все версии →
      </button>
    </div>
  );
}
