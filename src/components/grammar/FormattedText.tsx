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

  const renderPart = (partText: string) => {
    const highlightRegex = /\[\[(.*?)\]\]/g;
    const boldRegex = /\{\{(.*?)\}\}/g;
    const subParts: Array<{
      text: string;
      type: "normal" | "highlight" | "bold";
    }> = [];
    let subLastIndex = 0;
    let subMatch;

    while ((subMatch = highlightRegex.exec(partText)) !== null) {
      if (subMatch.index > subLastIndex) {
        subParts.push({
          text: partText.slice(subLastIndex, subMatch.index),
          type: "normal",
        });
      }
      subParts.push({ text: subMatch[1], type: "highlight" });
      subLastIndex = subMatch.index + subMatch[0].length;
    }

    if (subLastIndex < partText.length) {
      const remaining = partText.slice(subLastIndex);
      let boldLastIndex = 0;
      let boldMatch;

      while ((boldMatch = boldRegex.exec(remaining)) !== null) {
        if (boldMatch.index > boldLastIndex) {
          subParts.push({
            text: remaining.slice(boldLastIndex, boldMatch.index),
            type: "normal",
          });
        }
        subParts.push({ text: boldMatch[1], type: "bold" });
        boldLastIndex = boldMatch.index + boldMatch[0].length;
      }

      if (boldLastIndex < remaining.length) {
        subParts.push({ text: remaining.slice(boldLastIndex), type: "normal" });
      }
    }

    return subParts.map((part, idx) => {
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
          renderPart(part.text)
        ),
      )}
    </span>
  );
}
