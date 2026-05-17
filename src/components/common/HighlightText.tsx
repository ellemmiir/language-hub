type HighlightTextProps = {
  text: string;
  highlight: string;
  className?: string;
  highlightClassName?: string;
};

export function HighlightText({
  text,
  highlight,
  className = "",
  highlightClassName = "bg-yellow-300 dark:bg-yellow-500 text-black rounded-sm",
}: HighlightTextProps) {
  if (!highlight.trim()) {
    return <span className={className}>{text}</span>;
  }

  const escapedHighlight = highlight.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`(${escapedHighlight})`, "gi");
  const parts = text.split(regex);

  return (
    <span className={className}>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <mark key={i} className={highlightClassName}>
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </span>
  );
}
