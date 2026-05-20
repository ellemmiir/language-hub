import type { GrammarTopic } from "../grammar/grammar";
//готово
export const futurePerfect: GrammarTopic = {
  id: "future-perfect",
  title: "Future Perfect",
  titleRu: "Будущее завершенное время",
  conjugationTable: {
    rows: [
      {
        affirmative: "I shall have already worked by 8 p.m.",
        negative: "I shan't have worked by 8 p.m.",
        question: "Shall I have worked by 8 p.m?",
        translationAffirmative: "Я уже поработаю к 8 часам.",
        translationNegative: "Я не поработаю к восьми часам.",
        translationQuestion: "Поработаю ли я к восьми часам?",
      },
      {
        affirmative: "You will have already worked by eight o'clock.",
        negative: "You won't have worked by 8 p.m.",
        question: "Will you have worked by 8 p.m?",
        translationAffirmative: "Вы уже поработаете к 8 часам.",
        translationNegative: "Вы не поработаете к 8 часам.",
        translationQuestion: "Поработаете ли вы к 8 часам?",
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
            "Future Perfect образуется с помощью вспомогательного глагола will (или реже shall) и голого совершенного инфинитива Perfect Infinitive (have + смысловой глагол в третьей форме).",
        },
        {
          type: "description",
          content:
            "Если действие выражается правильным глаголом, то его третья форма образуется добавлением окончания -ed. Если используется неправильный глагол, тогда третью форму можно посмотреть в таблице неправильных глаголов. Если нужного глагола там нет – значит он правильный и к нему можно добавлять окончание -ed.",
        },
        {
          type: "description",
          content:
            "Will в современном английском используется со всеми числами и лицами. Shall используется только с первым лицом I, We (такое использование считается устаревшим).",
        },
        {
          type: "description",
          content:
            "В современном английском со всеми числами и лицами используется только will и это не является ошибкой. Но shall еще можно встретить в газетах, старых текстах или текстах при собеседовании на работу, или при поступлении в учебное учреждение, художественной литературе.",
        },
        {
          type: "examples",
          content: [
            {
              en: "will= ‘ll (сокращение)",
              ru: "",
            },
            {
              en: "shall = ‘ll",
              ru: "",
            },
          ],
        },
        {
          type: "examples",
          content: [
            {
              en: "I shall have done this work by 5 o’clock tomorrow.",
              ru: "Я сделаю эту работу завтра к пяти.",
            },
            {
              en: "She will have bought these flowers before the beginning of the party. ",
              ru: "Она купит эти цветы до начала вечеринки.",
            },
            {
              en: "They will have found the new actor by next week.",
              ru: "Они найдут нового актера к следующей неделе.​",
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
            "Отрицание в Future Perfect образуется путем добавления частицы not после вспомогательного глагола will или shall.",
        },
        {
          type: "examples",
          content: [
            {
              en: "I will not have done this work by 5 o’clock tomorrow.",
              ru: " Я не сделаю эту работу завтра к пяти.",
            },
            {
              en: "They will not have found the new actor by next week.",
              ru: " Они не найдут нового актера к следующей",
            },
          ],
        },
        {
          type: "examples",
          content: [
            {
              en: "will not = won’t (сокращение)",
              ru: "",
            },
            {
              en: "shall not = shan’t ",
              ru: " ",
            },
            {
              en: "She won’t have bought these flowers before the beginning of the party. ",
              ru: "Она не купит эти цветы до начала вечеринки. ",
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
            "Образование общего вопроса в Future Perfect происходит с помощью вынесения вспомогательного глагола will или shall в начало предложения перед подлежащим.",
        },
        {
          type: "examples",
          content: [
            {
              en: "Will I have done this work by 5 o’clock tomorrow? ",
              ru: "Я сделаю эту работу завтра к пяти часам?",
            },
            {
              en: "Will she have bought these flowers before the beginning of the party? ",
              ru: "Она купит эти цветы до начала вечеринки?",
            },
            {
              en: "Will they have found the new actor by next week? ",
              ru: "Они найдут нового актера к следующей неделе?",
            },
          ],
        },
        {
          type: "description",
          content:
            "Специальный вопрос в Future Perfect образуется с помощью вопросительного слова или фразы, которая ставится в самом начале предложения. Дальнейший порядок слов такой же, как в общем вопросе для Future Perfect.",
        },
        {
          type: "examples",
          content: [
            {
              en: "What shall I have done by 5 o’clock tomorrow?",
              ru: " Что я сделаю завтра к пяти часам?",
            },
            {
              en: "When will she have bought these flowers?",
              ru: "  Когда она купит эти цветы?",
            },
            {
              en: "Where will they have found a new actor by next week?",
              ru: "Где они найдут нового актера к следующей недели?",
            },
          ],
        },
      ],
    },
    {
      title:
        "Действие, которое будет завершено к определённому моменту в будущем",
      blocks: [
        {
          type: "description",
          content:
            "Future Perfect используется для описания действия, которое будет полностью завершено к определённому моменту в будущем. Мы смотрим из будущего назад и говорим: «К этому времени я уже сделаю это».",
        },
        {
          type: "description",
          content:
            "Ключевые маркеры: *by then, by that time, by tomorrow, by next week, by 2025, by the end of the day/month/year*",
        },
        {
          type: "examples",
          content: [
            {
              en: "By the time you arrive, I will have finished cooking. ",
              ru: "К тому времени, как ты приедешь, я уже закончу готовить.",
            },
            {
              en: "She will have completed her degree by next summer.",
              ru: "Она получит диплом к следующему лету.",
            },
            {
              en: "By 8 p.m., I will have eaten dinner.",
              ru: "К 8 часам вечера я уже поужинаю.",
            },
          ],
        },
      ],
    },
    {
      title:
        " Количество выполненного действия к определённому моменту в будущем",
      blocks: [
        {
          type: "description",
          content:
            "Future Perfect используется, чтобы указать, какой объём работы или сколько раз действие будет выполнено к определённому моменту в будущем.",
        },
        {
          type: "examples",
          content: [
            {
              en: "By the end of this year, I will have read 50 books.",
              ru: "К концу этого года я прочитаю 50 книг.",
            },
            {
              en: "She will have visited ten countries by her 30th birthday.",
              ru: "Она посетит десять стран к своему тридцатилетию.",
            },
            {
              en: "They will have played 20 matches by the end of the season.",
              ru: " Они сыграют 20 матчей к концу сезона.",
            },
          ],
        },
      ],
    },
    {
      title:
        "Предположение о том, что действие уже завершилось к настоящему моменту",
      blocks: [
        {
          type: "description",
          content:
            "В разговорной речи Future Perfect может использоваться для выражения предположения о том, что, вероятно, уже произошло к настоящему моменту. Говорящий как бы «забегает вперёд» и делает вывод о завершённости действия.",
        },
        {
          type: "examples",
          content: [
            {
              en: "Don't call him now. He will have already left the office. ",
              ru: "Не звони ему сейчас. Он, наверное, уже ушёл из офиса. (предположение, что к этому времени он уже ушёл)",
            },
            {
              en: "They will have arrived by now. The flight was on time.",
              ru: "Они, должно быть, уже прибыли. Рейс был вовремя.",
            },
            {
              en: "She will have finished her presentation by now.",
              ru: "Она, вероятно, уже закончила свою презентацию.",
            },
          ],
        },
      ],
    },
  ],
  timeMarkers: [
    {
      markers: [
        "before – до, перед тем, как",
        "till – до (только для отрицательных предложений)",
        "until – до (только для отрицательных предложений)",
      ],
      spaceAfter: true,
    },
    {
      markers: [
        "by then – к тому времени",
        "by the time – к тому времени; когда",
        "by 3 p.m. – к 3 вечера",
        "by 5 o’clock – к пяти часам",
        "by 7 a.m. – к семи утра",
        "by tomorrow – до завтра",
        "by next week – к следующей неделе",
        "by next month – к следующему месяцу",
        "by next year – к следующему году",
        "by next century – к следующему столетию",
      ],
      spaceAfter: true,
    },
  ],
  notes: [],
};
