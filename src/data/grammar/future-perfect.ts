import type { GrammarTopic } from "../grammar/grammar";
export const futurePerfect: GrammarTopic = {
  id: "future-perfect",
  title: "Future Perfect",
  titleRu: "Будущее завершенное время",
  conjugationTable: {
    rows: [
      {
        affirmative: "I [[shall have]] already work[[ed]] by 8 p.m.",
        negative: "I [[shan't have]] work[[ed]] by 8 p.m.",
        question: "[[Shall]] I [[have]] work[[ed]] by 8 p.m?",
        translationAffirmative: "Я уже поработаю к 8 часам.",
        translationNegative: "Я не поработаю к восьми часам.",
        translationQuestion: "Поработаю ли я к восьми часам?",
      },
      {
        affirmative: "You [[will have]] already work[[ed]] by 8 p.m.",
        negative: "You [[won't have]] work[[ed]] by 8 p.m.",
        question: "[[Will]] you [[have]] work[[ed]] by 8 p.m?",
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
            "{{Future Perfect}} образуется с помощью вспомогательного глагола {{will}} (или реже {{shall}}) и голого совершенного инфинитива {{Perfect Infinitive}} ({{have}} + смысловой глагол в третьей форме).",
        },
        {
          type: "description",
          content:
            "Если действие выражается правильным глаголом, то его третья форма образуется добавлением окончания {{-ed}}. Если используется неправильный глагол, тогда третью форму можно посмотреть в таблице неправильных глаголов. Если нужного глагола там нет – значит он правильный и к нему можно добавлять окончание {{-ed}}.",
        },
        {
          type: "description",
          content:
            "{{Will}} в современном английском используется со всеми числами и лицами. \n{{Shall}} используется только с первым лицом {{I}}, {{We}} (устаревшее употребление).",
        },
        {
          type: "description",
          content:
            "В современном английском со всеми числами и лицами используется только {{will}} и это не является ошибкой. Но {{shall}} еще можно встретить в газетах, старых текстах или текстах при собеседовании на работу, при поступлении в учебное учреждение, в художественной литературе.",
        },

        {
          type: "examples",
          content: [
            {
              en: "He [[will have]] finish[[ed]] his homework by 9 o'clock.",
              ru: "Он закончит домашнюю работу к 9 часам.",
            },
            {
              en: "You [[will have]] learn[[ed]] a lot of new words by the end of this course.",
              ru: "Ты выучишь много новых слов к концу этого курса.",
            },
            {
              en: "We [[will have]] arriv[[ed]] at the airport before midnight.",
              ru: "Мы прибудем в аэропорт до полуночи.",
            },
          ],
        },
        {
          type: "examples",
          content: [
            {
              en: "will = ‘[[ll]]",
              ru: "",
            },
            {
              en: "shall = ‘[[ll]]",
              ru: "",
            },
          ],
        },
        {
          type: "examples",
          content: [
            {
              en: "I'[[ll]] have finished the report by Friday.",
              ru: "Я закончу отчёт к пятнице.",
            },
            {
              en: "He'[[ll]] have repaired the car before we return.",
              ru: "Он починит машину до нашего возвращения.",
            },
            {
              en: "They'[[ll]] have built the new school by September.",
              ru: "Они построят новую школу к сентябрю.",
            },
          ],
        },
        {
          type: "description",
          content:
            "Правила добавления окончания {{-ed}} рассмотрены в другой теме.",
        },
        {
          type: "examples",
          layout: "double",
          content: [
            {
              en: "to work → work[[ed]]",
              ru: "",
            },
            {
              en: "to translat[[e]] → translat[[ed]]",
              ru: "",
            },
            {
              en: "to agr[[ee]] → agree[[d]]",
              ru: "",
            },
            {
              en: "to stud[[y]] → stud[[i]]ed",
              ru: "",
            },
            {
              en: "to pla[[y]] → pla[[y]]ed",
              ru: "",
            },
            {
              en: "to sto[[p]] → sto[[pp]]ed",
              ru: "",
            },
            {
              en: "to rela[[x]] → rela[[x]]ed",
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
            "Отрицание в {{Future Perfect}} образуется путем добавления частицы not после вспомогательного глагола {{will}} или {{shall}}.",
        },
        {
          type: "examples",
          content: [
            {
              en: "You [[will not]] have finished the report by Friday.",
              ru: "Ты не закончишь отчёт к пятнице.",
            },
            {
              en: "They [[will not]] have built the bridge by the end of the year.",
              ru: "Они не построят мост к концу года.",
            },
          ],
        },
        {
          type: "examples",
          content: [
            {
              en: "will not = wo[[n’t]]",
              ru: "",
            },
            {
              en: "shall not = sha[[n’t]]",
              ru: "",
            },
          ],
        },
        {
          type: "examples",
          content: [
            {
              en: "You wo[[n't]] have completed the course by summer.",
              ru: "Ты не закончишь курс к лету.",
            },
            {
              en: "He wo[[n't]] have saved enough money for the trip.",
              ru: "Он не накопит достаточно денег для поездки.",
            },
            {
              en: "It wo[[n't]] have stopped raining by sunset.",
              ru: "Дождь не перестанет к закату.",
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
            "Образование общего вопроса в {{Future Perfect}} происходит с помощью вынесения вспомогательного глагола {{will}} или {{shall}} в начало предложения перед подлежащим.",
        },
        {
          type: "examples",
          content: [
            {
              en: "[[Will]] you have finished the report by Friday?",
              ru: "Ты закончишь отчёт к пятнице?",
            },
            {
              en: "[[Will]] he have repaired the car by the time we return? ",
              ru: "Он починит машину к тому времени, как мы вернёмся?",
            },
            {
              en: "[[Shall]] we have left the house before noon?",
              ru: "Мы уйдём из дома до полудня?",
            },
          ],
        },
        {
          type: "description",
          content:
            "Специальный вопрос в {{Future Perfect}} образуется с помощью вопросительного слова или фразы, которая ставится в самом начале предложения. Дальнейший порядок слов такой же, как в общем вопросе для {{Future Perfect}}.",
        },
        {
          type: "examples",
          content: [
            {
              en: "[[What will]] we have learned by the end of this course?",
              ru: "Что мы выучим к концу этого курса?",
            },
            {
              en: "[[When will]] he have finished the construction?",
              ru: "Когда он закончит строительство?",
            },
            {
              en: "[[Where will]] she have moved by next summer?",
              ru: "Куда она переедет к следующему лету?",
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
            "{{Future Perfect}} используется для описания действия, которое будет полностью завершено к определённому моменту в будущем. Мы смотрим из будущего назад и говорим: «К этому времени я уже сделаю это».",
        },
        {
          type: "description",
          content:
            "Ключевые маркеры:{{ by then}}, {{by that time}}, {{by tomorrow}}, {{by next week}}, {{by 2025}}, {{by the end of the day/month/year}}",
        },
        {
          type: "examples",
          content: [
            {
              en: "[[By the time]] you arrive, I will have finished cooking. ",
              ru: "К тому времени, как ты приедешь, я уже закончу готовить.",
            },
            {
              en: "She will have completed her degree [[by next summer]].",
              ru: "Она получит диплом к следующему лету.",
            },
            {
              en: "[[By 8 p.m.]], I will have eaten dinner.",
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
            "{{Future Perfect}} используется, чтобы указать, какой объём работы или сколько раз действие будет выполнено к определённому моменту в будущем.",
        },
        {
          type: "examples",
          content: [
            {
              en: "By the end of this year, I [[will have read]] 50 books.",
              ru: "К концу этого года я прочитаю 50 книг.",
            },
            {
              en: "She [[will have]] visit[[ed]] ten countries by her 30th birthday.",
              ru: "Она посетит десять стран к своему тридцатилетию.",
            },
            {
              en: "They [[will have]] play[[ed]] 20 matches by the end of the season.",
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
            "В разговорной речи {{Future Perfect}} может использоваться для выражения предположения о том, что, вероятно, уже произошло к настоящему моменту. Говорящий как бы «забегает вперёд» и делает вывод о завершённости действия.",
        },
        {
          type: "examples",
          content: [
            {
              en: "Don't call him now. He [[will have]] already [[left]] the office. ",
              ru: "Не звони ему сейчас. Он, наверное, уже ушёл из офиса. (предположение, что к этому времени он уже ушёл)",
            },
            {
              en: "They [[will have]] arriv[[ed]] by now. The flight was on time.",
              ru: "Они, должно быть, уже прибыли. Рейс был вовремя.",
            },
            {
              en: "She [[will have]] finish[[ed]] her presentation by now.",
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
};
