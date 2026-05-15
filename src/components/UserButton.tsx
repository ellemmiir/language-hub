import { useState } from "react";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon as UserCircleIconSolid } from "@heroicons/react/24/solid";

export function UserButton() {
  const [isActive, setIsActive] = useState(false);

  return (
    <button
      className="p-2 rounded-lg transition-all duration-200 hover:bg-grey-200 dark:hover:bg-grey-600"
      onClick={() => setIsActive(!isActive)}
      title="Профиль"
    >
      {isActive ? (
        <UserCircleIconSolid className="w-6 h-6 text-black dark:text-white" />
      ) : (
        <UserCircleIcon className="w-6 h-6 text-black dark:text-white" />
      )}
    </button>
  );
}
