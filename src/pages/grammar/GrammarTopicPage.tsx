import { useParams } from "react-router-dom";
import { ConjugationTable } from "../../components/grammar/ConjugationTable";
import { UsageSection } from "../../components/grammar/UsageSection";
import { TimeMarkers } from "../../components/grammar/TimeMarkers";
import { PageTitle } from "../../components/common/PageTitle";
import * as grammarTopics from "../../data/grammar/index";
import { PencilIcon } from "@heroicons/react/24/solid";

const topicMap: Record<string, keyof typeof grammarTopics> = {
  "present-simple": "presentSimple",
  "past-simple": "pastSimple",
  "future-simple": "futureSimple",
  "present-continuous": "presentContinuous",
  "past-continuous": "pastContinuous",
  "future-continuous": "futureContinuous",
  "present-perfect": "presentPerfect",
  "past-perfect": "pastPerfect",
  "future-perfect": "futurePerfect",
  "present-perfect-continuous": "presentPerfectContinuous",
  "past-perfect-continuous": "pastPerfectContinuous",
  "future-perfect-continuous": "futurePerfectContinuous",
};

export function GrammarTopicPage() {
  const { topicId } = useParams();

  if (!topicId) {
    return <div>Тема не найдена</div>;
  }

  const topicKey = topicMap[topicId];
  const topic = topicKey ? grammarTopics[topicKey] : null;

  if (!topic) {
    return <div>Тема не найдена</div>;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <PageTitle title={topic.title} titleRu={topic.titleRu} />

      <ConjugationTable data={topic.conjugationTable} />
      {topic.toBeTable && <ConjugationTable data={topic.toBeTable} />}

      {topic.usage.map((section, idx) => (
        <UsageSection
          key={idx}
          title={section.title}
          icon={PencilIcon}
          blocks={section.blocks}
        />
      ))}

      <TimeMarkers markers={topic.timeMarkers} />
    </div>
  );
}
