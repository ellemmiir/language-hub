import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

type CollapseButtonProps = {
  isCollapsed: boolean;
  onToggle: () => void;
};

export function CollapseButton({ isCollapsed, onToggle }: CollapseButtonProps) {
  return (
    <button
      onClick={onToggle}
      className="
        p-1.5 rounded-full 
        bg-white dark:bg-grey-500 
        border border-grey-200 dark:border-grey-600
        shadow-md hover:shadow-lg
        transition-[transform,box-shadow] duration-200
        hover:scale-105
        cursor-pointer
      "
    >
      {isCollapsed ? (
        <ChevronRightIcon className="w-4 h-4 text-grey-400 dark:text-white" />
      ) : (
        <ChevronLeftIcon className="w-4 h-4 text-grey-400 dark:text-white" />
      )}
    </button>
  );
}
