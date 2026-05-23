import { Link } from "react-router-dom";

type FormattedTextProps = {
  text: string;
  className?: string;
  highlightClassName?: string;
  boldClassName?: string;
};

export function FormattedText({
  text,
  className = "",
  highlightClassName = "text-blue-600 dark:text-blue-400 font-medium",
  boldClassName = "font-bold text-black dark:text-white",
}: FormattedTextProps) {
  // Сначала обрабатываем ссылки [[text|target]]
  const linkRegex = /\[\[(.*?)\|(.*?)\]\]/g;
  const linkParts: Array<{ text: string; target: string | null }> = [];
  let lastIndex = 0;
  let match;

  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      linkParts.push({
        text: text.slice(lastIndex, match.index),
        target: null,
      });
    }
    linkParts.push({ text: match[1], target: match[2] });
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    linkParts.push({ text: text.slice(lastIndex), target: null });
  }

  // Функция для обработки одного куска текста (без ссылок)
  const renderPlainText = (plainText: string) => {
    // Сначала обрабатываем подсветку [[...]]
    const highlightRegex = /\[\[(.*?)\]\]/g;
    const highlightParts: Array<{
      text: string;
      type: "normal" | "highlight" | "bold";
    }> = [];
    let hLastIndex = 0;
    let hMatch;

    while ((hMatch = highlightRegex.exec(plainText)) !== null) {
      if (hMatch.index > hLastIndex) {
        highlightParts.push({
          text: plainText.slice(hLastIndex, hMatch.index),
          type: "normal",
        });
      }
      highlightParts.push({ text: hMatch[1], type: "highlight" });
      hLastIndex = hMatch.index + hMatch[0].length;
    }

    if (hLastIndex < plainText.length) {
      highlightParts.push({
        text: plainText.slice(hLastIndex),
        type: "normal",
      });
    }

    // Обрабатываем жирный текст {{...}} в каждом куске
    const result: Array<{
      text: string;
      type: "normal" | "highlight" | "bold";
    }> = [];

    for (const part of highlightParts) {
      if (part.type !== "normal") {
        result.push(part);
        continue;
      }

      const boldRegex = /\{\{(.*?)\}\}/g;
      let bLastIndex = 0;
      let bMatch;

      while ((bMatch = boldRegex.exec(part.text)) !== null) {
        if (bMatch.index > bLastIndex) {
          result.push({
            text: part.text.slice(bLastIndex, bMatch.index),
            type: "normal",
          });
        }
        result.push({ text: bMatch[1], type: "bold" });
        bLastIndex = bMatch.index + bMatch[0].length;
      }

      if (bLastIndex < part.text.length) {
        result.push({
          text: part.text.slice(bLastIndex),
          type: "normal",
        });
      }
    }

    return result.map((part, idx) => {
      if (part.type === "highlight") {
        return (
          <span key={idx} className={highlightClassName}>
            {part.text}
          </span>
        );
      }
      if (part.type === "bold") {
        return (
          <span key={idx} className={boldClassName}>
            {part.text}
          </span>
        );
      }
      return <span key={idx}>{part.text}</span>;
    });
  };

  return (
    <span className={className}>
      {linkParts.map((part, idx) =>
        part.target ? (
          <Link
            key={idx}
            to={`/grammar/${part.target}`}
            className="text-blue-600 dark:text-blue-400 hover:underline transition-all"
          >
            {part.text}
          </Link>
        ) : (
          renderPlainText(part.text)
        ),
      )}
    </span>
  );
}
