import { useMemo } from "react";
import { phrases } from "../data/phrases";

export function useDictionaryStats() {
  return useMemo(() => {
    const total = phrases.length;

    const byTag: Record<string, number> = {};
    phrases.forEach((phrase) => {
      phrase.tags.forEach((tag) => {
        byTag[tag] = (byTag[tag] || 0) + 1;
      });
    });

    const sortedTags = Object.entries(byTag)
      .sort((a, b) => b[1] - a[1])
      .map(([tag, count]) => ({ tag, count }));

    return {
      total,
      byTag,
      sortedTags,
    };
  }, []);
}
