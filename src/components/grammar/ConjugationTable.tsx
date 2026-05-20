import type { ConjugationTableData } from "../../data/grammar/grammar";
import { FormattedText } from "./FormattedText";

type ConjugationTableProps = {
  data: ConjugationTableData;
};

export function ConjugationTable({ data }: ConjugationTableProps) {
  return (
    <div className="mb-10 overflow-x-auto">
      <table className="w-full border-collapse border border-gray-200 dark:border-gray-700 ">
        <thead>
          <tr className="bg-black  text-white dark:bg-grey-200 dark:text-black">
            <th className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-left">
              Утверждение
            </th>
            <th className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-left">
              Отрицание
            </th>
            <th className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-left">
              Вопрос
            </th>
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, idx) => (
            <tr
              key={idx}
              className="hover:bg-gray-50 dark:hover:bg-gray-800/50"
            >
              <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">
                <FormattedText
                  text={row.affirmative}
                  className="font-medium text-gray-700 dark:text-gray-300"
                />
                <div className="text-xs text-gray-400 dark:text-gray-500  mt-1">
                  {row.translationAffirmative}
                </div>
              </td>

              <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">
                <FormattedText
                  text={row.affirmative}
                  className="font-medium text-gray-700 dark:text-gray-300"
                />
                <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                  {row.translationNegative}
                </div>
              </td>

              <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">
                <FormattedText
                  text={row.affirmative}
                  className="font-medium text-gray-700 dark:text-gray-300"
                />
                <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                  {row.translationQuestion}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
