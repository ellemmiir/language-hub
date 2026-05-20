import type { TimeMarkerGroup } from "../../data/grammar/grammar";
import { FormattedText } from "./FormattedText";

type TimeMarkersProps = {
  markers: TimeMarkerGroup[];
};

export function TimeMarkers({ markers }: TimeMarkersProps) {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold mb-4 dark:text-white">
        Маркеры времени
      </h2>
      <div className="space-y-2">
        {markers.map((group, groupIdx) => (
          <div key={groupIdx} className={group.spaceAfter ? "mb-4" : ""}>
            {group.markers.map((marker, markerIdx) => (
              <div key={markerIdx} className="text-gray-700 dark:text-gray-300">
                <span className=" mr-1 select-none">•</span>
                <FormattedText text={marker} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
