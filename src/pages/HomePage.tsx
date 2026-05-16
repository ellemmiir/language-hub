import { UpdateWidget } from "../components/UpdateWidget";
import { useDictionaryStats } from "../hooks/useDictionaryStats";

type HomePageProps = {
  onNavigate: (page: string) => void;
};

export function HomePage({ onNavigate }: HomePageProps) {
  const { total } = useDictionaryStats();

  const stats = [
    { label: "Словарь", value: total, onClick: () => onNavigate("dictionary") },
    { label: "Грамматика", value: 0, onClick: () => onNavigate("grammar") },
    { label: "Тексты", value: 0, onClick: () => onNavigate("text") },
    { label: "Упражнения", value: 0, onClick: () => onNavigate("exercises") },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight dark:text-white">
          Language Hub
        </h1>
        <p className="text-grey-400 dark:text-gray-400">
          Всё для изучения английского языка в одном месте
        </p>
      </div>

      <hr className="border-t border-gray-200 dark:border-gray-700 my-6" />

      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <div className="flex-1">Тут остальной контент</div>

        <div className="w-full md:w-80 shrink-0">
          <div className="rounded-xl p-5 bg-white dark:bg-grey-600 border border-grey-200 dark:border-grey-700">
            <h2 className="text-xl font-semibold mb-1 dark:text-white">
              Статистика по сайту
            </h2>
            <div className="space-y-4">
              {stats.map((stat) => (
                <button
                  key={stat.label}
                  onClick={stat.onClick}
                  className="w-full text-left group"
                >
                  <div className="text-xs text-gray-400 dark:text-gray-500 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-2xl font-bold text-black dark:text-white group-hover:opacity-70 transition-opacity cursor-pointer">
                    {stat.value}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <UpdateWidget onNavigate={onNavigate} />

      <div className="mt-10 pt-6 text-center border-t border-gray-200 dark:border-gray-700">
        <p className="text-sm text-gray-500 dark:text-gray-500">
          Нашли ошибку или есть предложение? Напишите мне: test@test.com
        </p>
        <p className="text-xs text-gray-400 dark:text-gray-600 mt-2">
          Language Hub постоянно развивается 🖤
        </p>
      </div>
    </div>
  );
}
