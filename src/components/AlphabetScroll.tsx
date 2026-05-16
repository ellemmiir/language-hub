import { useState } from "react";

type AlphabetScrollProps = {
  onLetterSelect: (letter: string) => void;
  visible: boolean;
  availableLetters?: Set<string>;
};

const FULL_ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export function AlphabetScroll({
  onLetterSelect,
  visible,
  availableLetters,
}: AlphabetScrollProps) {
  const [activeLetter, setActiveLetter] = useState<string | null>(null);

  if (!visible) return null;

  const isLetterAvailable = (letter: string) => {
    return availableLetters?.has(letter) ?? true;
  };

  const handleLetterClick = (letter: string) => {
    if (!isLetterAvailable(letter)) return;
    onLetterSelect(letter);
  };

  return (
    <div className="sticky top-4 self-start z-20 ml-1 mr-1">
      <div className="flex flex-col gap-0.5">
        {FULL_ALPHABET.map((letter) => {
          const available = isLetterAvailable(letter);
          return (
            <button
              key={letter}
              onClick={() => handleLetterClick(letter)}
              onMouseEnter={() => available && setActiveLetter(letter)}
              onMouseLeave={() => setActiveLetter(null)}
              disabled={!available}
              className={`
                w-5 h-5 flex items-center justify-center
                text-[11px] font-medium rounded-sm
                transition-all duration-150
                ${available ? "cursor-pointer" : "cursor-default"}
                ${
                  activeLetter === letter && available
                    ? "bg-black text-white dark:bg-white dark:text-black scale-105"
                    : available
                      ? "text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
                      : "text-gray-300 dark:text-gray-600"
                }
              `}
            >
              {letter}
            </button>
          );
        })}
      </div>
    </div>
  );
}
