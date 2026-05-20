import type { GrammarTopic } from "../grammar/grammar";
//готово
export const pastPerfect: GrammarTopic = {
  id: "past-perfect",
  title: "Past Perfect",
  titleRu: "Прошедшее завершенное время",
  conjugationTable: {
    rows: [
      {
        affirmative: "I had already worked by six o'clock.",
        negative: "I hadn't worked by six o'clock.",
        question: "Had you worked by six p.m?",
        translationAffirmative: "Я уже поработал к шести часам.",
        translationNegative: "Я не поработал к шести часам.",
        translationQuestion: "Вы поработали к шести часам?",
      },
    ],
  },
  toBeTable: undefined,
  usage: [
    {
      title: "Утверждение",
      blocks: [
        {
          type: "description",
          content:
            "В Past Perfect утверждение формируется с помощью вспомогательного глагола had и Past Participle (третья форма глагола). Had – это форма прошедшего времени вспомогательного глагола have.",
        },
        {
          type: "description",
          content:
            "Past Participle для правильных глаголов образуется добавлением к ним окончания -ed. Для неправильных глаголов берется его третья форма из таблицы неправильных глаголов.",
        },
        {
          type: "description",
          content:
            "Past Perfect, в отличие от Past Simple, всегда выражается и вспомогательным глаголом had и формой Past Participle (третья форма глагола) смыслового глагола.",
        },
        {
          type: "examples",
          content: [
            {
              en: "I had booked the table.",
              ru: "Я заказала столик.",
            },
            {
              en: "She had washed her hair. ",
              ru: "Она помыла волосы.",
            },
            {
              en: "They had seen the sunset.",
              ru: "Они увидели закат.",
            },
          ],
        },
        {
          type: "description",
          content:
            "Правила добавления окончания -ed рассмотрены в другой теме.",
        },
        {
          type: "examples",
          content: [
            {
              en: "to work → worked",
              ru: "",
            },
            {
              en: "to translate → translated",
              ru: "",
            },
            {
              en: "to agree → agreed",
              ru: "",
            },
            {
              en: "to study → studied",
              ru: "",
            },
            {
              en: "to play → played",
              ru: "",
            },
            {
              en: "to stop → stopped",
              ru: "",
            },
            {
              en: "to relax → relaxed",
              ru: "",
            },
          ],
        },
      ],
    },
    {
      title: "Отрицание",
      blocks: [
        {
          type: "description",
          content:
            "Для того, чтобы сформировать отрицание в Past Perfect, необходимо после вспомогательного глагола had поставить отрицательную частицу not.",
        },
        {
          type: "examples",
          content: [
            {
              en: "I had not booked a table.",
              ru: "Я не заказала столик.",
            },
            {
              en: "She had not washed her hair.",
              ru: " Она не помыла волосы.",
            },
          ],
        },
        {
          type: "examples",
          content: [
            {
              en: "had not = hadn’t (сокращение)",
              ru: "",
            },
            {
              en: "They hadn’t seen the sunset. ",
              ru: " Они не увидели закат.",
            },
          ],
        },
      ],
    },
    {
      title: "Вопрос",
      blocks: [
        {
          type: "description",
          content:
            "Общий вопрос в Past Perfect формируется с помощью вынесения вспомогательного глагола had в начало предложения перед подлежащим.",
        },
        {
          type: "examples",
          content: [
            {
              en: "Had you booked a table? ",
              ru: " Ты заказала столик?",
            },
            {
              en: "Had she washed her hair? ",
              ru: "Она помыла волосы?",
            },
            {
              en: "Had they seen the sunset?",
              ru: " Они увидели закат?",
            },
          ],
        },
        {
          type: "description",
          content:
            "Специальный вопрос в Past Perfect образуется с помощью вопросительного слова или фразы, которые ставятся в самом начале предложения. Дальнейший порядок слов такой же, как в общем вопросе для Past Perfect.",
        },
        {
          type: "examples",
          content: [
            {
              en: "What had I done? ",
              ru: "Что я сделала?",
            },
            {
              en: "Where had she washed this cup? ",
              ru: "  Где она мыла эту чашку?",
            },
            {
              en: "Who had seen the sunset?",
              ru: "Кто увидел закат?",
            },
          ],
        },
      ],
    },
    {
      title: "Действие, завершённое до другого действия в прошлом",
      blocks: [
        {
          type: "description",
          content:
            "Past Perfect используется для описания действия, которое завершилось раньше, чем другое действие в прошлом. Это «прошлое перед прошлым». Мы как бы делаем шаг назад во времени, чтобы показать последовательность событий.",
        },
        {
          type: "examples",
          content: [
            {
              en: "They had finished their work by 6 p.m.",
              ru: "Они закончили работу к 6 вечера.",
            },
          ],
        },
        {
          type: "description",
          content:
            "Структура: Past Perfect (более раннее действие) + before / when / after + Past Simple (более позднее действие)",
        },
        {
          type: "examples",
          content: [
            {
              en: "When I arrived at the station, the train had already left.",
              ru: "Когда я прибыл на вокзал, поезд уже ушёл. (сначала поезд ушёл, потом я прибыл)",
            },
            {
              en: "She had finished her homework before she went out.",
              ru: "Она закончила домашнюю работу перед тем, как вышла гулять.",
            },
            {
              en: "He had never seen such a beautiful sunset until he visited Greece.",
              ru: "Он никогда не видел такого красивого заката, пока не посетил Грецию.",
            },
          ],
        },
        {
          type: "description",
          content:
            "Как Present Perfect может описывать действие, начавшееся в прошлом и продолжающееся до настоящего, так и Past Perfect описывает действие, которое началось в прошлом и продолжалось до другого момента в прошлом (часто с for или since)",
        },
        {
          type: "examples",
          content: [
            {
              en: "By 2010, she had lived in Paris for five years.",
              ru: " К 2010 году она прожила в Париже пять лет. (начала жить в 2005, жила до 2010, а возможно и дальше)",
            },
            {
              en: "He had worked at the company since 2005 when he got promoted.",
              ru: "Он работал в компании с 2005 года, когда получил повышение.",
            },
            {
              en: "They had been married for twenty years before they had their first child. ",
              ru: "Они были женаты двадцать лет, прежде чем у них появился первый ребёнок.",
            },
          ],
        },
      ],
    },
    {
      title: "Видимый результат в прошлом",
      blocks: [
        {
          type: "description",
          content:
            "Past Perfect используется для выражения действий, которые завершились в прошлом и чей результат был виден в прошлом.",
        },
        {
          type: "examples",
          content: [
            {
              en: "She was upset. She had torn her favorite dress.",
              ru: "Она была расстроена. Она порвала свое любимое платье.",
            },
            {
              en: "And the silence became deeper. They had dug the grave. ",
              ru: "И тишина стала еще глубже. Они выкопали могилу.",
            },
            {
              en: "All these people were happy, because Kennedy had won the elections.",
              ru: " Все эти люди были счастливы, потому что Кеннеди победил на выборах.",
            },
          ],
        },
      ],
    },
    {
      title: "Причина или объяснение события в прошлом ",
      blocks: [
        {
          type: "description",
          content:
            "Past Perfect используется, чтобы объяснить причину или предпосылку для действия, которое произошло в прошлом. Мы показываем, что одно событие сделало возможным или вызвало другое.",
        },
        {
          type: "examples",
          content: [
            {
              en: "He was late for the meeting because he had missed the bus.",
              ru: "Он опоздал на встречу, потому что пропустил автобус. (сначала пропустил автобус, потом опоздал)",
            },
            {
              en: "She was tired because she had worked all night. ",
              ru: "Она устала, потому что проработала всю ночь.",
            },
            {
              en: "The ground was wet because it had rained. ",
              ru: " Земля была мокрая, потому что прошёл дождь.",
            },
            {
              en: "They couldn't enter the house because they had lost the keys.",
              ru: "Они не могли войти в дом, потому что потеряли ключи.",
            },
          ],
        },
      ],
    },

    {
      title:
        "Опыт или состояние, которое существовало до определённого момента в прошлом",
      blocks: [
        {
          type: "description",
          content:
            "Past Perfect используется для описания опыта или состояния, которое человек имел (или не имел) до определённого момента в прошлом. Аналог Present Perfect, но перенесённый в прошлое.",
        },
        {
          type: "description",
          content:
            "Ключевые маркеры: never, ever, always, already, for, since (в прошлом контексте)",
        },
        {
          type: "examples",
          content: [
            {
              en: "By the age of 25, she had already visited 15 countries.",
              ru: "К 25 годам она уже посетила 15 стран. (опыт, накопленный к определённому моменту)",
            },
            {
              en: "He had never flown before he took that trip.",
              ru: "Он никогда раньше не летал на самолёте до той поездки.",
            },
            {
              en: "I had always wanted to learn Italian, so I took a course. ",
              ru: " Я всегда хотел выучить итальянский, поэтому я записался на курсы.",
            },
            {
              en: "They had known each other for ten years when they got married. ",
              ru: "Они знали друг друга десять лет, когда поженились.",
            },
          ],
        },
        {
          type: "description",
          content:
            "Отличие от Past Simple: Past Simple просто констатирует факт (He never flew — вообще никогда). Past Perfect привязывает отсутствие опыта к моменту в прошлом (He had never flown before that trip — к тому моменту у него не было такого опыта).",
        },
      ],
    },
    {
      title: "Косвенная речь (перевод Past Simple в Past Perfect) ",
      blocks: [
        {
          type: "description",
          content:
            "В косвенной речи, когда главный глагол стоит в Past Simple, Present Perfect и Past Simple прямой речи преобразуются в Past Perfect.",
        },
        {
          type: "examples",
          content: [
            {
              en: 'Прямая речь: She said, "I have finished my work."',
              ru: "Она сказала: «Я закончила работу».",
            },
            {
              en: "Косвенная речь: She said that she had finished her work.",
              ru: "Она сказала, что закончила работу.",
            },
          ],
        },
        {
          type: "examples",
          content: [
            {
              en: 'Прямая речь: He said, "I saw her yesterday."',
              ru: "Он сказал: «Я видел её вчера».",
            },
            {
              en: "Косвенная речь: He said that he had seen her the day before.",
              ru: "Он сказал, что видел её накануне.",
            },
          ],
        },
      ],
    },
    {
      title: "Hardly... when и No sooner...than",
      blocks: [
        {
          type: "description",
          content:
            "Past Perfect используется в конструкциях hardly... when (едва... как) и no sooner... than (как только... сразу), чтобы показать, что одно действие произошло непосредственно перед другим. Оба выражения переводятся как «едва я», «как только я», «не успел я». В этих случаях Past Perfect тоже описывает прошлое действие, которое произошло перед другим действием в прошлом. Но особенностью здесь является то, что порядок слов в той части, где употребляется Past Perfect, такой же, как в общем вопросе. Это называется инверсией. Во второй половине предложения используется время Past Simple.",
        },
        {
          type: "examples",
          content: [
            {
              en: "He had hardly entered the room when the phone rang.",
              ru: "Он едва вошёл в комнату, как зазвонил телефон.",
            },
            {
              en: "She had no sooner finished her speech than the audience started clapping. ",
              ru: "Не успела она закончить речь, как публика начала аплодировать.",
            },
            {
              en: "We had barely sat down when the waiter came.",
              ru: "Мы только сели, как подошёл официант.",
            },
          ],
        },
      ],
    },
  ],
  timeMarkers: [
    {
      markers: [
        "before – до того как",
        "before the moment – до (определенного) момента",
        "before the evening – до (определенного) вечера",
        "before the day – до (определенного) дня",
        "before the year – до (определенного) года",
      ],
      spaceAfter: true,
    },
    {
      markers: [
        "never before – никогда раньше",
        "after - после, после того, как",
        "no sooner… than – едва, как только, не успел(а)",
        "hardly… when – едва, как только, не успел(а)",
      ],
      spaceAfter: true,
    },
    {
      markers: [
        "by two o’clock – к двум часам",
        "by half past six – к половине седьмого",
        "by that time – к тому времени",
        "by that morning – к тому утру",
        "by evening – к вечеру",
        "by afternoon – к обеду",
        "by the 2nd of july – ко второму июля",
        "by that day – к тому дню",
        "by that month – к тому месяцу",
        "by that year – к тому году",
        "by that age – к тому возрасту",
      ],
      spaceAfter: true,
    },
  ],
  notes: [],
};
