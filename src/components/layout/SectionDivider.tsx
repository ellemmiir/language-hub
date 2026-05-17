type SectionDividerProps = {
  isCollapsed: boolean;
  title?: string;
};

export function SectionDivider({
  isCollapsed,
  title = "Другое",
}: SectionDividerProps) {
  return (
    <div className="mb-2 mt-4 h-5">
      {isCollapsed ? (
        <div className="flex items-center justify-center h-full">
          <div className="border-t-2 border-grey-200 dark:border-grey-600 w-8" />
        </div>
      ) : (
        <div className="px-2 h-full flex items-center">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-grey-300 ">
            {title}
          </span>
        </div>
      )}
    </div>
  );
}
