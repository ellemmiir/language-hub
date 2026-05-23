import type { GrammarTopic } from "./grammar";
export const futurePerfectContinuous: GrammarTopic = {
  id: "future-perfect-continuous",
  title: "Future Perfect Continuous",
  titleRu: "Будущее совершенное длительное время",
  conjugationTable: {
    rows: [
      {
        affirmative:
          "I [[shall have been]] work[[ing]] for an hour when he comes.",
        negative:
          "I [[shall not have been]] work[[ing]] for an hour when he comes.",
        question:
          "[[Shall]] I [[have been]] work[[ing]] for an hour when he comes?",
        translationAffirmative: "Я проработаю час к моменту, когда он придёт.",
        translationNegative: "Я не проработаю час к моменту, когда он придёт.",
        translationQuestion: "Проработаю ли я час к моменту, когда он придёт?",
      },
      {
        affirmative:
          "You [[will have been]] work[[ing]] for an hour when he comes.",
        negative:
          "You [[will not have been]] work[[ing]] for an hour when he comes.",
        question:
          "[[Will]] you [[have been]] work[[ing]] for an hour when he comes?",
        translationAffirmative:
          "Вы проработаете час к моменту, когда он придёт.",
        translationNegative:
          "Вы не проработаете час к моменту, когда он придёт.",
        translationQuestion:
          "Проработаете ли вы час к моменту, когда он придёт?",
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
            "{{Future Perfect Continuous}} ({{Future Perfect Progressive}}) образуется с помощью вспомогательного глагола {{will}} (или реже {{shall}}) и совершенно-продолжительного инфинитива {{Perfect Continuous Infinitive}} без частицы {{to}} ({{have been}} + глагол в первой форме с окончанием {{-ing}}).",
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
              en: "By next month, I [[will have been]] work[[ing]] at this company for ten years.",
              ru: "К следующему месяцу я буду работать в этой компании десять лет.",
            },
            {
              en: "She [[will have been]] study[[ing]] English for five years by the time she takes the exam.",
              ru: "Она будет учить английский пять лет к тому времени, как сдаст экзамен.",
            },
            {
              en: "They [[will have been]] build[[ing]] this bridge for three years by next summer.",
              ru: "К следующему лету они будут строить этот мост три года.",
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
              en: "I'[[ll have been]] driv[[ing]] for 2 hours before the moment we reach New York.",
              ru: "Я буду ехать два часа к тому моменту, когда мы достигнем Нью-Йорка.",
            },
            {
              en: "She'[[ll have been]] teach[[ing]] French for 15 years by her birthday.",
              ru: "К своему дню рождения она будет преподавать французский на протяжении 15 лет.",
            },
          ],
        },
        {
          type: "description",
          content:
            "Правила добавления окончания {{-ing}} рассмотрены в другой теме.",
        },
        {
          type: "examples",
          layout: "double",
          content: [
            {
              en: "to enter → enter[[ing]]",
              ru: "",
            },
            { en: "to li[[e]] → l[[y]]ing", ru: "" },
            {
              en: "to tak[[e]] → tak[[i]]ng",
              ru: "",
            },
            {
              en: "to agr[[ee]] → agr[[ee]]ing",
              ru: "",
            },
            { en: "to sa[[y]] → sa[[y]]ing", ru: "" },
            {
              en: "to rela[[x]] → rela[[x]]ing",
              ru: "",
            },
            {
              en: "to ru[[n]] → ru[[nn]]ing",
              ru: "",
            },
            {
              en: "to trave[[l]] → trave[[ll]]ing / trave[[l]]ing",
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
            "Отрицание в {{Future Perfect Continuous}} образуется путем добавления частицы not после вспомогательного глагола {{will}} или {{shall}}.",
        },
        {
          type: "examples",
          content: [
            {
              en: "I [[will not]] have been waiting for you for an hour by the time you arrive.",
              ru: "Я не буду ждать тебя час к тому времени, как ты приедешь.",
            },
            {
              en: "It [[will not]] have been snowing for 24 hours by midnight.",
              ru: "К полуночи снег не будет идти 24 часа.",
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
              en: "You [[won't]] have been sleeping for eight hours by the time I wake you up.",
              ru: "Ты не проспишь восемь часов к тому времени, как я разбужу тебя.",
            },
            {
              en: "I [[shan't]] have been working on this project for a year by the deadline.",
              ru: "К дедлайну я не буду работать над этим проектом год.",
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
            "Образование общего вопроса в {{Future Perfect Continuous}} происходит с помощью вынесения вспомогательного глагола {{will}} или {{shall}} в начало предложения.",
        },
        {
          type: "examples",
          content: [
            {
              en: "Will you have been working here for ten years by next month?",
              ru: "Ты будешь работать здесь десять лет к следующему месяцу?",
            },
            {
              en: "Will they have been building this bridge for three years by next summer?",
              ru: "Они будут строить этот мост три года к следующему лету?",
            },
            {
              en: "Shall I have been waiting for you for an hour by the time you arrive?",
              ru: "Я буду ждать тебя час к тому времени, как ты приедешь?",
            },
          ],
        },
        {
          type: "description",
          content:
            "Специальный вопрос в {{Future Perfect Continuous}} образуется с помощью вопросительного слова или фразы, которая ставится в самом начале предложения. Дальнейший порядок слов такой же, как в общем вопросе для {{Future Perfect Continuous}}.",
        },
        {
          type: "examples",
          content: [
            {
              en: "[[What will]] you have been working on for the last five years by the time you retire?",
              ru: "Над чем ты будешь работать последние пять лет к моменту выхода на пенсию?",
            },
            {
              en: "[[How long will]] she have been living in Paris by 2030?",
              ru: "Как долго она будет жить в Париже к 2030 году?",
            },
            {
              en: "[[Where will]] you have been living for ten years by next summer?",
              ru: "Где ты будешь жить десять лет к следующему лету?",
            },
          ],
        },
      ],
    },
    {
      title:
        "Продолжительные действия, которые продлятся до определенного момента в будущем",
      blocks: [
        {
          type: "description",
          content:
            "{{Future Perfect Continuous}} используется для описания действия, которое начнётся в прошлом или настоящем, будет длиться без перерыва и всё ещё будет продолжаться (или только что закончится) к определённому моменту в будущем. Главный акцент — на длительности процесса к будущему моменту.",
        },
        {
          type: "description",
          content:
            "Ключевые маркеры: *by then, by that time, by tomorrow, by next week, by 2025, for + период времени (к моменту в будущем)*",
        },
        {
          type: "examples",
          content: [
            {
              en: "By the time you arrive, I [[will have been]] wait[[ing]] for you for two hours.",
              ru: "К тому времени, как ты приедешь, я буду ждать тебя уже два часа. (ожидание начнётся в прошлом или настоящем, будет длиться, и к моменту твоего приезда его продолжительность составит два часа)",
            },
            {
              en: "Next July, she [[will have been]] work[[ing]] at this company for ten years.",
              ru: " В следующем июле исполнится десять лет, как она работает в этой компании.",
            },
            {
              en: "By 2026, they [[will have been]] liv[[ing]] in this house for 20 years.",
              ru: "К 2026 году они будут жить в этом доме уже 20 лет.",
            },
            {
              en: "When he turns 40, he [[will have been]] play[[ing]] the piano for 30 years. ",
              ru: "Когда ему исполнится 40, он будет играть на пианино уже 30 лет.",
            },
          ],
        },
        {
          type: "note",
          content: {
            title: "Пояснение:",
            content:
              "{{Future Perfect Continuous}} показывает, как долго действие будет длиться к определённому моменту в будущем. Действие может продолжаться и после этого момента, но нас интересует его продолжительность именно до этого момента.",
          },
        },
      ],
    },
    {
      title: "Причина или объяснение состояния в будущем",
      blocks: [
        {
          type: "description",
          content:
            "{{Future Perfect Continuous}} может использоваться, чтобы объяснить причину состояния или ситуации, которая будет наблюдаться в будущем. Длительное действие, которое происходило до этого момента, приведёт к предсказуемому результату.",
        },
        {
          type: "examples",
          content: [
            {
              en: "He will be exhausted tomorrow because he [[will have been]] work[[ing]] all night.",
              ru: "Завтра он будет измождён, потому что проработает всю ночь.",
            },
            {
              en: "She will be very good at French by the end of the course. She [[will have been]] study[[ing]] it for two years.",
              ru: "Она будет очень хорошо знать французский к концу курса. Она будет изучать его уже два года.",
            },
            {
              en: "The ground will be wet in the morning. It [[will have been]] rain[[ing]] all night.",
              ru: "Утром земля будет мокрой. Дождь будет идти всю ночь.",
            },
            {
              en: "They will be tired after the match. They [[will have been]] runn[[ing]] for three hours. ",
              ru: "Они будут уставшими после матча. Они будут бегать три часа.",
            },
          ],
        },
        {
          type: "note",
          content: {
            title: "Пояснение:",
            content:
              "Как {{Past Perfect Continuous}} объяснял причины состояний в прошлом, так {{Future Perfect Continuous}} объясняет причины состояний в будущем.",
            examples: [
              {
                en: "He was exhausted because he had been working all night.",
                ru: "Он был уставшим, потому что проработал всю ночь.",
              },
              {
                en: "He will be exhausted tomorrow because he will have been working all night.",
                ru: "Он будет уставшим завтра, потому что проработает всю ночь.",
              },
            ],
          },
        },
        {
          type: "description",
          content: " ",
        },
      ],
    },
    {
      title: "Подчёркивание длительности действия до другого будущего действия",
      blocks: [
        {
          type: "description",
          content:
            "{{Future Perfect Continuous}} часто используется, чтобы подчеркнуть, как долго одно действие будет происходить до того, как начнётся другое действие в будущем.",
        },
        {
          type: "description",
          content:
            "Структура: {{Future Perfect Continuous}} + {{by the time}} / {{before}} + {{Present Simple}} (придаточное времени)",
        },
        {
          type: "examples",
          content: [
            {
              en: "I [[will have been]] teach[[ing]] for 20 years by the time I retire.",
              ru: "Я проработаю учителем 20 лет к тому моменту, как выйду на пенсию.",
            },
            {
              en: "She [[will have been]] practic[[ing]] for six months before she takes the exam.",
              ru: "Она будет заниматься шесть месяцев перед тем, как сдавать экзамен.",
            },
            {
              en: "They [[will have been]] build[[ing]] this road for three years by the time they finish it. ",
              ru: " Они будут строить эту дорогу три года к тому моменту, как закончат её.",
            },
          ],
        },
      ],
    },
    {
      title: "Предположение о длительности действия, которое происходит сейчас",
      blocks: [
        {
          type: "description",
          content:
            "Как и другие перфектные времена, {{Future Perfect Continuous}} может использоваться для выражения предположения о том, как долго действие продолжается в настоящий момент. Говорящий делает вывод о продолжительности текущего действия.",
        },
        {
          type: "examples",
          content: [
            {
              en: "Don't disturb him. He [[will have been]] work[[ing]] for hours without a break.",
              ru: "Не беспокой его. Он, наверное, работает уже несколько часов без перерыва.",
            },
            {
              en: "She looks tired. She [[will have been]] runn[[ing]] for a long time.",
              ru: "Она выглядит уставшей. Она, должно быть, давно бегает.",
            },
            {
              en: "They are late. They [[will have been]] wait[[ing]] for us for ages.",
              ru: " Они опаздывают. Они, наверное, уже целую вечность нас ждут.",
            },
          ],
        },
      ],
    },
  ],
  timeMarkers: [
    {
      markers: [
        "till – до того как (только в отрицательных предложениях)",
        "until – до того как (только в отрицательных предложениях)",
      ],
      spaceAfter: true,
    },
    {
      markers: [
        "for 2 hours – на протяжении двух часов",
        "for 3 weeks – на протяжении трех недель",
        "for 1 year – на протяжении одного года",
      ],
      spaceAfter: true,
    },
    {
      markers: [
        "by the end of the hour – к концу часа",
        "by the end of the morning – к концу утра",
        "by the end of the day – к концу дня",
        "by the end of the month – к концу месяца",
        "by the end of the year – к концу года",
      ],
      spaceAfter: true,
    },
  ],
};
