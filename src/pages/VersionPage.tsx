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
      <h1 className="text-2xl md:text-3xl font-bold mb-2">История версий</h1>
      <p className="text-[#666666] dark:text-[#aaaaaa] mb-6">
        Все изменения Language Hub
      </p>

      {allVersions.map((version) => (
        <div
          key={version.version}
          className="border border-[#cccccc] dark:border-[#444444] rounded-xl p-5 mb-5 bg-[#fafafa] dark:bg-[#252525]"
        >
          <div className="flex items-center gap-2.5 mb-4">
            <h2 className="text-xl md:text-2xl font-semibold m-0">
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
