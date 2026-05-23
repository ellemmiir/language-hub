import type { TimeMarkerGroup } from "../../data/grammar/grammar";
import { FormattedText } from "./FormattedText";
import { PencilIcon } from "@heroicons/react/24/solid";

type TimeMarkersProps = {
  markers: TimeMarkerGroup[];
};

export function TimeMarkers({ markers }: TimeMarkersProps) {
  return (
    <div className="mb-10">
      <div className="flex items-start gap-4 mb-5">
        <PencilIcon className="w-5 h-5 mt-1 flex-shrink-0" />
        <h2 className="text-2xl font-bold dark:text-white leading-tight">
          Маркеры времени
        </h2>
      </div>
      <div className=" pl-15 space-y-4">
        {markers.map((group, groupIdx) => (
          <div key={groupIdx} className={group.spaceAfter ? "mb-4" : ""}>
            {group.markers.map((marker, markerIdx) => (
              <div key={markerIdx} className="text-gray-700 dark:text-gray-300">
                <span className=" mr-2 select-none">•</span>
                <FormattedText text={marker} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
