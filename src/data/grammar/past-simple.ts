import type { GrammarTopic } from "../grammar/grammar";

export const pastSimple: GrammarTopic = {
  id: "past-simple",
  title: "Past Simple",
  titleRu: "Простое прошедшее время",
  conjugationTable: {
    rows: [
      {
        affirmative: "I work[[ed]] yesterday.",
        negative: "I [[did]]n't work yesterday.",
        question: "[[Did]] I work yesterday?",
        translationAffirmative: "Я работал вчера.",
        translationNegative: "Я не работал вчера.",
        translationQuestion: "Я работал вчера?",
      },
    ],
  },
  toBeTable: {
    rows: [
      {
        affirmative: "I [[was]] a student.",
        negative: "I [[was not]] a student.",
        question: "[[Was]] I a student?",
        translationAffirmative: "Я был студентом.",
        translationNegative: "Я не был студентом.",
        translationQuestion: "Я был студентом?",
      },
      {
        affirmative: "He [[was]] a student.",
        negative: "He [[was not]] a student.",
        question: "[[Was]] he a student?",
        translationAffirmative: "Он был студентом.",
        translationNegative: "Он не был студентом.",
        translationQuestion: "Он был студентом?",
      },
      {
        affirmative: "They [[were]] students.",
        negative: "They [[were not]] students.",
        question: "[[Were]] they students?",
        translationAffirmative: "Они были студентами.",
        translationNegative: "Они не были студентами.",
        translationQuestion: "Они были студентами?",
      },
    ],
  },
  usage: [
    {
      title: "Утверждение",
      blocks: [
        {
          type: "description",
          content:
            "{{Past Simple (Past Indefinite)}} образуется с помощью преобразования смыслового глагола в форму прошедшего времени. Если используется неправильный глагол, тогда применяется вторая форма неправильного глагола из таблицы неправильных глаголов. Если нужного глагола там нет – значит он правильный и к нему можно добавлять окончание {{-ed}}. Форма прошедшего времени глагола одинакова для всех лиц единственного и множественного числа (кроме глагола {{to be}}).",
        },
        {
          type: "examples",
          content: [
            {
              en: "I [[forgot]] to call you yesterday.",
              ru: "Я забыл позвонить тебе вчера.",
            },
            {
              en: "He stay[[ed]] at a small hotel near the beach.",
              ru: "Он остановился в небольшом отеле у пляжа.",
            },
            {
              en: "They visit[[ed]] Italy last summer. ",
              ru: "Они посетили Италию прошлым летом.",
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
            "Отрицание в {{Past Simple}} образуется путем добавления вспомогательного глагола {{did}} и отрицательной частицы not после него, которые стоят после подлежащего и перед смысловым глаголом. {{Did}} – это форма прошедшего времени вспомогательного глагола {{do}}. {{Did}} используется для всех лиц и чисел существительных.",
        },
        {
          type: "description",
          content:
            "После {{did not}} смысловой глагол используется только в форме простого инфинитива без частицы {{to}}, потому что грамматическое время в английском языке указывается с помощью вспомогательного {{did}}.",
        },
        {
          type: "examples",
          content: [
            {
              en: "I [[did not]] enjoy the movie.",
              ru: "Мне не понравился фильм.",
            },
            {
              en: "You [[did not]] answer my question.",
              ru: "Ты не ответил на мой вопрос.",
            },
            {
              en: "They [[did not]] believe me.",
              ru: "Они не поверили мне.",
            },
          ],
        },
        {
          type: "description",
          content: "Сокращения:",
        },
        {
          type: "examples",
          content: [
            {
              en: "did not = did[[n't]]",
              ru: "",
            },
          ],
        },
        {
          type: "examples",
          content: [
            {
              en: "I did[[n't]] sleep well last night.",
              ru: "Я плохо спал прошлой ночью.",
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
            "Общий вопрос в {{Past Simple}} образуется путем добавления вспомогательного глагола {{did}} в начале предложения перед подлежащим. После подлежащего смысловой глагол используется только в форме простого инфинитива без окончаний и частицы {{to}}.",
        },
        {
          type: "examples",
          content: [
            {
              en: "[[Did]] I make a mistake?",
              ru: "Я сделал ошибку?",
            },
            {
              en: "[[Did]] you see the news?",
              ru: "Ты видел новости?",
            },
            {
              en: "[[Did]] they enjoy the concert?",
              ru: "Им понравился концерт?",
            },
          ],
        },
        {
          type: "description",
          content:
            "Специальный вопрос в {{Past Simple}} образуется с помощью вопросительного слова или фразы, которая ставится в самом начале предложения. Дальнейший порядок слов такой же, как в общем вопросе для {{Past Simple}}.",
        },
        {
          type: "examples",
          content: [
            {
              en: "[[Where did]] you go yesterday?",
              ru: "Куда ты ходил вчера?",
            },
            {
              en: "[[What did]] you eat for breakfast?",
              ru: "Что ты ел на завтрак?",
            },
            {
              en: "[[Why did]] they cancel the meeting?",
              ru: "Почему они отменили встречу?",
            },
          ],
        },
      ],
    },
    {
      title: "To be в Past Simple",
      blocks: [
        {
          type: "description",
          content:
            "Глагол {{to be}} (быть, существовать) – особенный и во времени {{Past Simple}} имеет две формы {{was}} и {{were}}. Выбор нужной формы зависит от подлежащего.",
        },
        {
          type: "examples",
          content: [
            {
              en: "I, he, she, it → [[was]] (существительное или местоимение в единственном числе)",
              ru: "",
            },
            {
              en: 'We, they, you → [[were]] (множественное число или вежливое "Вы")',
              ru: "",
            },
          ],
        },
        {
          type: "examples",
          content: [
            {
              en: "I [[was]] tired after work.",
              ru: "Я был уставшим после работы.",
            },
            {
              en: "He [[was]] a famous musician.",
              ru: "Он был известным музыкантом.",
            },
            {
              en: "We [[were]] good friends.",
              ru: "Мы были хорошими друзьями.",
            },
            {
              en: "You [[were]] very kind to me. ",
              ru: "Ты был очень добр ко мне. (Вы были очень добры ко мне)",
            },
          ],
        },
        {
          type: "description",
          content:
            "​Отрицание с глаголом {{to be}} в форме прошедшего времени ({{was}} или {{were}}) образуется с помощью частицы {{not}}, которая ставится после {{was}} или {{were}}. {{Was}} и {{were}} не нуждаются во вспомогательных глаголах для образования отрицательного предложения.",
        },
        {
          type: "examples",
          content: [
            {
              en: "I [[was not]] at the meeting yesterday.",
              ru: "Меня не было на встрече вчера.",
            },
            {
              en: "He [[was not]] happy with the results.",
              ru: "Он не был доволен результатами.",
            },
            {
              en: "They [[were not]] surprised by the news.",
              ru: "Они не были удивлены новостью.",
            },
          ],
        },
        {
          type: "description",
          content: "Сокращения с глаголом {{to be}}:",
        },
        {
          type: "examples",
          content: [
            {
              en: "was = was[[n't]]",
              ru: "",
            },
            { en: "were = were[[n't]]", ru: "" },
          ],
        },
        {
          type: "examples",
          content: [
            {
              en: "I was[[n't]] ready for the exam.",
              ru: "Я не был готов к экзамену.",
            },
            {
              en: "We were[[n't]] invited to the wedding.",
              ru: "Нас не пригласили на свадьбу.",
            },
          ],
        },
      ],
    },

    {
      title: "Завершённые действия в прошлом",
      blocks: [
        {
          type: "description",
          content:
            "{{Past Simple}} используется для описания действий или событий, которые произошли в определённый момент в прошлом. Время действия уже истекло, и оно не связано с настоящим моментом.",
        },
        {
          type: "examples",
          content: [
            {
              en: "I watch[[ed]] a great movie yesterday.",
              ru: "Я посмотрел отличный фильм вчера.",
            },
            {
              en: "She [[left]] the office at 6 p.m. last Friday.",
              ru: " Она ушла из офиса в 6 вечера в прошлую пятницу.",
            },
            {
              en: "They [[built]] this bridge in 1985.",
              ru: "Они построили этот мост в 1985 году.",
            },
          ],
        },
      ],
    },
    {
      title: "Непродолжительные действия в конкретный момент в прошлом",
      blocks: [
        {
          type: "description",
          content:
            "{{Past Simple}} используют для описания действий, когда известен неточный момент времени в прошлом, в который действие произошло. Даже если говорящий пропустил указание момента времени, то оно подразумевается.",
        },
        {
          type: "examples",
          content: [
            {
              en: "She work[[ed]] abroad 2 years ago.",
              ru: "Она работала за границей два года назад.",
            },
            {
              en: "Harry [[wrote]] a lot of letters in 2011. ",
              ru: "Гарри написал много писем в 2011 году.",
            },
          ],
        },
      ],
    },
    {
      title: "Последовательные действия в прошлом",
      blocks: [
        {
          type: "description",
          content:
            "{{Past Simple}} используется для описания нескольких действий, которые произошли одно за другим в прошлом. Это характерно для повествования, рассказа, пересказа событий по порядку.",
        },
        {
          type: "examples",
          content: [
            {
              en: "I [[woke up]], [[took]] a shower, [[had]] breakfast, and [[went]] to work",
              ru: "Я проснулся, принял душ, позавтракал и пошёл на работу.",
            },
            {
              en: "She enter[[ed]] the room, turn[[ed]] on the light, and [[saw]] a strange object on the floor. ",
              ru: "Она вошла в комнату, включила свет и увидела странный предмет на полу.",
            },
            {
              en: "They arriv[[ed]] at the station, [[bought]] tickets, and wait[[ed]] for the train.",
              ru: "Они прибыли на вокзал, купили билеты и стали ждать поезд.",
            },
          ],
        },
        {
          type: "note",
          content: {
            title: "Одновременные действия",
            content:
              "Для описания одновременно происходивших нескольких действий используют {{Past Continuous}}.",
            examples: [
              {
                en: "Ann was cleaning the house while Mark was washing their car. ",
                ru: "Энн убирала в доме тогда, когда Марк мыл их машину.",
              },
              {
                en: "Kate was drawing and Paul was doing his hometask.",
                ru: "Кэйт рисовала, а Пол делал свое домашнее задание.",
              },
            ],
          },
        },
      ],
    },
    {
      title: "Действия, которые не могут повториться",
      blocks: [
        {
          type: "description",
          content:
            "{{Past Simple}} используется для выражения действий, которые произошли один раз в прошлом и больше не могут повториться в связи с различными обстоятельствами.",
        },
        {
          type: "examples",
          content: [
            {
              en: "Mary [[won]] a Math medal when she was a schoolgirl.",
              ru: "Мэри выиграла медаль по математике, когда была школьницей. (Она не может больше выиграть медаль по математике, она больше не школьница)",
            },
            {
              en: "My grandmother once [[sang]] with Freddie Mercury. ",
              ru: "Однажды моя бабушка пела с Фредди Меркьюри. (Она больше не может спеть с Фредди Меркьюри, его нет в живых)",
            },
          ],
        },
      ],
    },
    {
      title: "Факты и состояния в прошлом, которые больше не верны",
      blocks: [
        {
          type: "description",
          content:
            "{{Past Simple}} используется для описания состояний, ситуаций или фактов, которые были верны в прошлом, но изменились к настоящему моменту.",
        },
        {
          type: "examples",
          content: [
            {
              en: "I liv[[ed]] in Paris when I was younger.",
              ru: "Я жил в Париже, когда был моложе (сейчас живу в другом месте).",
            },
            {
              en: "She [[had]] long hair as a teenager.",
              ru: "У неё были длинные волосы в подростковом возрасте (сейчас короткие или другая причёска).",
            },
            {
              en: "The company [[was]] much smaller ten years ago.",
              ru: "Компания была гораздо меньше десять лет назад.",
            },
          ],
        },
      ],
    },
    {
      title: "Повторяющиеся или привычные действия в прошлом",
      blocks: [
        {
          type: "description",
          content:
            "{{Past Simple}} используется для описания действий, которые регулярно происходили в прошлом, но больше не происходят в настоящем. В этом значении он близок к конструкции {{used to}}.",
        },
        {
          type: "description",
          content:
            "Ключевые маркеры: {{often}}, {{always}}, {{usually}}, {{every day}}, {{every summer}}, {{never}}, {{frequently}}.",
        },
        {
          type: "examples",
          content: [
            {
              en: "When I [[was]] a child, I play[[ed]] outside every day.",
              ru: "Когда я был ребёнком, я играл на улице каждый день.)",
            },
            {
              en: "She visit[[ed]] her grandmother every Sunday. ",
              ru: "Она навещала свою бабушку каждое воскресенье.",
            },
          ],
        },
        {
          type: "note",
          content: {
            title: "Различие с used to:",
            content:
              "{{Used to}} подчёркивает контраст между прошлым и настоящим (раньше было, сейчас нет). {{Past Simple}} просто констатирует факт в прошлом без такого контраста.",
            examples: [
              {
                en: "I used to smoke, but now I quit.",
                ru: "Я раньше курил, но сейчас бросил. (Подчёркивается, что раньше было, а сейчас нет)",
              },
              {
                en: "I smoked a cigarette yesterday.",
                ru: "Я выкурил сигарету вчера. (Просто факт. Неизвестно, курю я сейчас или нет)",
              },
            ],
          },
        },
      ],
    },
    {
      title: " Действия, прерванные другим действием",
      blocks: [
        {
          type: "description",
          content:
            "В паре с {{Past Continuous}}, {{Past Simple}} используется для обозначения короткого действия, которое прервало более длительное действие в прошлом.",
        },
        {
          type: "description",
          content:
            "{{Past Continuous}} обозначает длительное «фоновое» действие, а {{Past Simple}} — короткое прерывающее действие.",
        },
        {
          type: "examples",
          content: [
            {
              en: "I [[was watching]] TV when the phone [[rang]].",
              ru: "Я смотрел телевизор, когда зазвонил телефон.",
            },
            {
              en: "She [[was walking]] home when she [[met]] an old friend. ",
              ru: "Она шла домой, когда встретила старого друга.",
            },
            {
              en: "They [[were having]] dinner when the guests [[arrived]].",
              ru: "Они ужинали, когда пришли гости.",
            },
          ],
        },
      ],
    },
  ],
  timeMarkers: [
    {
      markers: [
        "yesterday – вчера",
        "the day before yesterday – позавчера",
        "just now – только что",
        "the other day – на днях",
      ],
      spaceAfter: true,
    },
    {
      markers: [
        "last week – на прошлой неделе",
        "last month – в прошлом месяце",
        "last year – в прошлом году",
        "last decade – в прошлом десятилетии",
        "last century – в прошлом веке",
      ],
      spaceAfter: true,
    },
    {
      markers: [
        "an hour ago – час назад",
        "two weeks ago – две недели назад",
        "in 1992 – в 1992 году",
        "at 6 o'clock – в 6 часов",
      ],
      spaceAfter: true,
    },
  ],
};
