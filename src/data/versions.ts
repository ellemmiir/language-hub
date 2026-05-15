export type Version = {
  version: string;
  date: string;
  changes: {
    added: string[];
    fixed: string[];
    changed: string[];
  };
};

export const versions: Version[] = [
  {
    version: "1.0.1",
    date: "15 мая 2026",
    changes: {
      added: ["Тёмная тема"],
      fixed: ["Внешний вид сайдбара"],
      changed: ["Изменён шрифт заголовков на более читаемый"],
    },
  },
  {
    version: "1.0.0",
    date: "13 мая 2026",
    changes: {
      added: ["Запуск проекта"],
      fixed: [],
      changed: [],
    },
  },
];

export const getAllVersions = (): Version[] => {
  return versions;
};

export const getRecentVersions = (count: number): Version[] => {
  return versions.slice(0, count);
};

export const getLatestVersion = (): Version => {
  return versions[0];
};
