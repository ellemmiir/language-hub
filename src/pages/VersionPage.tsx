import { getAllVersions } from "../data/versions";

export function VersionPage() {
  const allVersions = getAllVersions();

  const getTitle = (type: keyof (typeof allVersions)[0]["changes"]) => {
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

  const hasChanges = (
    version: (typeof allVersions)[0],
    type: keyof (typeof version)["changes"],
  ) => {
    return version.changes[type].length > 0;
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight dark:text-white">
          История версий
        </h1>
        <p className="text-grey-400 dark:text-gray-400">
          Все изменения Language Hub
        </p>
      </div>

      {allVersions.map((version) => (
        <div
          key={version.version}
          className="border border-grey-200 dark:border-grey-700 rounded-md p-5 bg-white dark:bg-grey-600 hover:shadow-md transition-shadow mb-4"
        >
          <div className="flex items-center gap-2.5 mb-4">
            <h2 className="text-xl md:text-2xl font-semibold m-0 dark:text-white">
              Версия {version.version}
            </h2>
            <span className="text-sm text-[#666666] dark:text-[#aaaaaa]">
              {version.date}
            </span>
          </div>

          <div className="space-y-4">
            {hasChanges(version, "added") && (
              <div>
                <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  {getTitle("added")}:
                </h3>
                <ul className="space-y-1 pl-4">
                  {version.changes.added.map((item, idx) => (
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

            {hasChanges(version, "fixed") && (
              <div>
                <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  {getTitle("fixed")}:
                </h3>
                <ul className="space-y-1 pl-4">
                  {version.changes.fixed.map((item, idx) => (
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

            {hasChanges(version, "changed") && (
              <div>
                <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  {getTitle("changed")}:
                </h3>
                <ul className="space-y-1 pl-4">
                  {version.changes.changed.map((item, idx) => (
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
        </div>
      ))}
    </div>
  );
}
