import { UpdateWidget } from "../components/UpdateWidget";

type HomePageProps = {
  onNavigate: (page: string) => void;
};

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight">
          Language Hub
        </h1>
        <p className="text-grey-400 dark:text-gray-400">
          Всё для изучения английского языка в одном месте
        </p>
      </div>

      <hr className="border-t border-gray-200 dark:border-gray-700 my-6" />

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
