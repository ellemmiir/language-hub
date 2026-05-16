import { ThemeToggle } from "./ThemeToggle";
import { UserButton } from "./UserButton";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export function TopBar() {
  return (
    <header className="h-16 px-6 border-b-2 border-grey-200 dark:border-grey-600 dark:bg-grey-900 flex items-center justify-between sticky top-0 z-10 bg-transparent ">
      <div className="w-10"></div>

      <div className="flex items-center gap-3">
        <div className="relative">
          <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-grey-300" />
          <input
            type="text"
            placeholder="Глобальный поиск..."
            className="
              pl-10 pr-4 py-2 rounded-md 
              border border-grey-200 dark:border-grey-600 
              bg-gray-50 dark:bg-grey-800 
              text-black dark:text-white 
              placeholder-grey-300 
              w-48 md:w-64
            "
          />
        </div>

        <UserButton />

        <ThemeToggle />
      </div>
    </header>
  );
}
