import type { GrammarTopic } from "./grammar";
//готово
export const futurePerfectContinuous: GrammarTopic = {
  id: "future-perfect-continuous",
  title: "Future Perfect Continuous",
  titleRu: "Будущее совершенное длительное время",
  conjugationTable: {
    rows: [
      {
        affirmative: "I shall have been working for an hour when he comes.",
        negative: "I shall not have been working for an hour when he comes.",
        question: "Shall I have been working for an hour when he comes?",
        translationAffirmative: "Я проработаю час к моменту, когда он придёт.",
        translationNegative: "Я не проработаю час к моменту, когда он придёт.",
        translationQuestion: "Проработаю ли я час к моменту, когда он придёт?",
      },
      {
        affirmative: "You will have been working for an hour when he comes.",
        negative: "You will not have been working for an hour when he comes..",
        question: "Will you have been working for an hour when he comes?",
        translationAffirmative:
          "Вы проработаете час к моменту, когда он придёт.",
        translationNegative:
          "Вы не проработаете час к моменту, когда он придёт",
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
            "Future Perfect Continuous (Future Perfect Progressive) образуется с помощью вспомогательного глагола will (или реже shall) и совершенно-продолжительного инфинитива Perfect Continuous Infinitive без частицы to (have been + глагол в первой форме с окончанием -ing).",
        },
        {
          type: "description",
          content:
            "Will be в современном английском используется со всеми числами и лицами.Shall be используется только с первым лицом I, We (считается устаревшим).",
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
              en: "I will have been driving for 2 hours before the moment we reach New York.",
              ru: "Я буду ехать два часа к тому моменту, когда мы достигнем Нью-Йорка.",
            },
            {
              en: "By the time of her birthday she will have been teaching French for 15 years. ",
              ru: " К своему дню рождения она будет преподавать французский на протяжении 15 лет.",
            },
          ],
        },
        {
          type: "examples",
          content: [
            {
              en: "will = ‘ll (сокращение)",
              ru: "",
            },
            {
              en: "shall = ‘ll",
              ru: "",
            },
            {
              en: "By the end of autumn, they’ll have been dating for 2 years.",
              ru: "К концу осени они будут встречаться на протяжении двух лет.​",
            },
          ],
        },
        {
          type: "description",
          content:
            "Все правила добавления окончания -ing рассмотрены в другой статье.",
        },
        {
          type: "examples",
          content: [
            {
              en: "to enter → entering",
              ru: "",
            },
            {
              en: "to lie → lying",
              ru: "",
            },
            {
              en: "to take → taking",
              ru: "",
            },
            {
              en: "to agree → agreeing",
              ru: "",
            },
            {
              en: "to say → saying",
              ru: "",
            },
            {
              en: "to relax → relaxing ",
              ru: "",
            },
            {
              en: "to run → running",
              ru: "",
            },
            {
              en: "to travel → travelling / traveling",
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
            "Отрицание в Future Perfect Continuous образуется путем добавления частицы not после вспомогательного глагола will или shall.",
        },
        {
          type: "examples",
          content: [
            {
              en: "I will not have been driving for 2 hours before the moment we reach New York. ",
              ru: "Я не буду ехать два часа к тому моменту, когда мы достигнем Нью-Йорка.",
            },
            {
              en: "By the time of her birthday she will not have been teaching French for 15 years. ",
              ru: " К своему дню рождения она не будет преподавать французский на протяжении 15 лет.",
            },
          ],
        },
        {
          type: "examples",
          content: [
            {
              en: "will not = won’t(сокращение)",
              ru: "",
            },
            {
              en: "By the end of autumn, they won’t have been dating for 2 years.",
              ru: "К концу осени они не будут встречаться на протяжении двух лет.",
            },
          ],
        },
        {
          type: "examples",
          content: [
            {
              en: "shall not = shan’t",
              ru: "",
            },
            {
              en: "We shan’t have been living here for 10 years by next February.",
              ru: "К следующему февралю мы (еще) не проживем тут 10 лет.",
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
            "Образование общего вопроса в Future Perfect Continuous происходит с помощью вынесения вспомогательного глагола will или shall в начало предложения.",
        },
        {
          type: "examples",
          content: [
            {
              en: "Will I have been driving for 2 hours before the moment we reach New York? ",
              ru: "Я буду ехать два часа к моменту, когда мы достигнем Нью-Йорк?",
            },
            {
              en: "Will she have been teaching French for 15 years by the time of her birthday??",
              ru: "Будет ли она преподавать французский на протяжении 15 лет к своему дню рождения?",
            },
            {
              en: "Will they have been dating for 2 years by the end of autumn?",
              ru: " Будут ли они встречаться на протяжении двух лет к концу осени?",
            },
          ],
        },
        {
          type: "description",
          content:
            "Специальный вопрос в Future Perfect Continuous образуется с помощью вопросительного слова или фразы, которая ставится в самом начале предложения. Дальнейший порядок слов такой же, как в общем вопросе для Future Perfect Continuous.",
        },
        {
          type: "examples",
          content: [
            {
              en: "What will they have been doing for 2 year by the end of the autumn? ",
              ru: "Что они будут делать на протяжении двух лет к концу осени?",
            },
            {
              en: "How long will I have been driving before the moment we reach New York? ",
              ru: "Как долго я буду ехать к моменту, когда мы достигнем Нью-Йорка?",
            },
            {
              en: "By what time will she have been teaching French for 15 years? ",
              ru: "К какому моменту она будет преподавать французский на протяжении 15 лет?",
            },
          ],
        },
      ],
    },
    {
      title:
        "ППродолжительные действия, которые продлятся до определенного момента в будущем",
      blocks: [
        {
          type: "description",
          content:
            "Future Perfect Continuous используется для описания действия, которое начнётся в прошлом или настоящем, будет длиться без перерыва и всё ещё будет продолжаться (или только что закончится) к определённому моменту в будущем. Главный акцент — на длительности процесса к будущему моменту.",
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
              en: "By the time you arrive, I will have been waiting for you for two hours.",
              ru: "К тому времени, как ты приедешь, я буду ждать тебя уже два часа. (ожидание начнётся в прошлом или настоящем, будет длиться, и к моменту твоего приезда его продолжительность составит два часа)",
            },
            {
              en: "Next July, she will have been working at this company for ten years.",
              ru: " В следующем июле исполнится десять лет, как она работает в этой компании.",
            },
            {
              en: "By 2026, they will have been living in this house for 20 years.",
              ru: "К 2026 году они будут жить в этом доме уже 20 лет.",
            },
            {
              en: "When he turns 40, he will have been playing the piano for 30 years. ",
              ru: "Когда ему исполнится 40, он будет играть на пианино уже 30 лет..",
            },
          ],
        },
        {
          type: "description",
          content:
            "Пояснение: Future Perfect Continuous показывает, как долго действие будет длиться к определённому моменту в будущем. Действие может продолжаться и после этого момента, но нас интересует его продолжительность именно до этого момента.",
        },
      ],
    },
    {
      title: "Причина или объяснение состояния в будущем",
      blocks: [
        {
          type: "description",
          content:
            "Future Perfect Continuous может использоваться, чтобы объяснить причину состояния или ситуации, которая будет наблюдаться в будущем. Длительное действие, которое происходило до этого момента, приведёт к предсказуемому результату.",
        },
        {
          type: "examples",
          content: [
            {
              en: "He will be exhausted tomorrow because he will have been working all night. ",
              ru: "Завтра он будет измождён, потому что проработает всю ночь.",
            },
            {
              en: "She will be very good at French by the end of the course. She will have been studying it for two years.",
              ru: "Она будет очень хорошо знать французский к концу курса. Она будет изучать его уже два года.",
            },
            {
              en: "The ground will be wet in the morning. It will have been raining all night.",
              ru: "Утром земля будет мокрой. Дождь будет идти всю ночь.",
            },
            {
              en: "They will be tired after the match. They will have been running for three hours. ",
              ru: "Они будут уставшими после матча. Они будут бегать три часа.",
            },
          ],
        },
        {
          type: "description",
          content:
            "Пояснение: Как Past Perfect Continuous объяснял причины состояний в прошлом, так Future Perfect Continuous объясняет причины состояний в будущем.",
        },
      ],
    },
    {
      title: "Подчёркивание длительности действия до другого будущего действия",
      blocks: [
        {
          type: "description",
          content:
            "Future Perfect Continuous часто используется, чтобы подчеркнуть, как долго одно действие будет происходить до того, как начнётся другое действие в будущем.",
        },
        {
          type: "description",
          content:
            "Структура: Future Perfect Continuous + by the time / before + Present Simple (придаточное времени)",
        },
        {
          type: "examples",
          content: [
            {
              en: "I will have been teaching for 20 years by the time I retire.",
              ru: "Я проработаю учителем 20 лет к тому моменту, как выйду на пенсию.",
            },
            {
              en: "She will have been practicing for six months before she takes the exam.",
              ru: "Она будет заниматься шесть месяцев перед тем, как сдавать экзамен.",
            },
            {
              en: "They will have been building this road for three years by the time they finish it. ",
              ru: " Они будут строить эту дорогу три года к тому моменту, как закончат её.",
            },
          ],
        },
      ],
    },
    {
      title:
        "Предположение о длительности действия, которое происходит сейчас ",
      blocks: [
        {
          type: "description",
          content:
            "Как и другие перфектные времена, Future Perfect Continuous может использоваться для выражения предположения о том, как долго действие продолжается в настоящий момент. Говорящий делает вывод о продолжительности текущего действия.",
        },
        {
          type: "examples",
          content: [
            {
              en: "Don't disturb him. He will have been working for hours without a break.",
              ru: "Не беспокой его. Он, наверное, работает уже несколько часов без перерыва.",
            },
            {
              en: "She looks tired. She will have been running for a long time.",
              ru: "Она выглядит уставшей. Она, должно быть, давно бегает.",
            },
            {
              en: "They are late. They will have been waiting for us for ages.",
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
  notes: [],
};
