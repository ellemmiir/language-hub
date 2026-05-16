import {
  HomeIcon,
  AcademicCapIcon,
  BookOpenIcon,
  ClipboardDocumentListIcon,
  BookmarkIcon,
} from "@heroicons/react/24/outline";
import {
  HomeIcon as HomeIconSolid,
  BookOpenIcon as BookOpenIconSolid,
  AcademicCapIcon as AcademicCapIconSolid,
  ClipboardDocumentListIcon as ClipboardDocumentListIconSolid,
  BookmarkIcon as BookmarkIconSolid,
} from "@heroicons/react/24/solid";

type NavIconProps = {
  name: "home" | "grammar" | "text" | "version" | "dictionary";
  isActive: boolean;
  className?: string;
};

export function NavIcon({
  name,
  isActive,
  className = "w-5 h-5",
}: NavIconProps) {
  const icons = {
    home: { outline: HomeIcon, solid: HomeIconSolid },
    grammar: { outline: AcademicCapIcon, solid: AcademicCapIconSolid },
    text: { outline: BookOpenIcon, solid: BookOpenIconSolid },
    version: {
      outline: ClipboardDocumentListIcon,
      solid: ClipboardDocumentListIconSolid,
    },
    dictionary: { outline: BookmarkIcon, solid: BookmarkIconSolid },
  };

  const IconComponent = isActive ? icons[name].solid : icons[name].outline;

  return <IconComponent className={className} />;
}
