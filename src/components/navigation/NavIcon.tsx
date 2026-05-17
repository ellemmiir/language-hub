import type { SectionId } from "../../config/sections";

import {
  HomeIcon,
  AcademicCapIcon,
  BookOpenIcon,
  ClipboardDocumentListIcon,
  BookmarkIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import {
  HomeIcon as HomeIconSolid,
  BookOpenIcon as BookOpenIconSolid,
  AcademicCapIcon as AcademicCapIconSolid,
  ClipboardDocumentListIcon as ClipboardDocumentListIconSolid,
  BookmarkIcon as BookmarkIconSolid,
  QuestionMarkCircleIcon as QuestionMarkCircleIconSolid,
} from "@heroicons/react/24/solid";

type NavIconProps = {
  name: SectionId;
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
    texts: { outline: BookOpenIcon, solid: BookOpenIconSolid },
    versions: {
      outline: ClipboardDocumentListIcon,
      solid: ClipboardDocumentListIconSolid,
    },
    dictionary: { outline: BookmarkIcon, solid: BookmarkIconSolid },
    about: {
      outline: QuestionMarkCircleIcon,
      solid: QuestionMarkCircleIconSolid,
    },
  };

  const IconComponent = isActive ? icons[name].solid : icons[name].outline;

  return <IconComponent className={className} />;
}
