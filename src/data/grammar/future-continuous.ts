import type { GrammarTopic } from "../grammar/grammar";
//готово
export const futureContinuous: GrammarTopic = {
  id: "future-continuous",
  title: "Future Continuous",
  titleRu: "Будущее длительное время",
  conjugationTable: {
    rows: [
      {
        affirmative: "I shall be working at eight o'clock.",
        negative: "I shan't be working at eight o'clock.",
        question: "Will I be working at eight o'clock?",
        translationAffirmative: "Я буду работать в 8 часов.",
        translationNegative: "Я не буду работать в 8 часов.",
        translationQuestion: "Я буду работать в 8 часов?",
      },
      {
        affirmative: "He [[was]] working at 5pm yesterday.",
        negative: "He [[was not]] working at 5pm yesterday.",
        question: "[[Was]] he working at 5pm yesterday?",
        translationAffirmative: "Вы будете работать в 8 часов.",
        translationNegative: "Вы не будете работать в 8 часов.",
        translationQuestion: "Вы будете работать в 8 часов?",
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
            "Future Continuous (Future Progressive) образуется с помощью вспомогательного глагола will (реже shall для I и We) и формы продолжительного инфинитива (be + глагол с окончанием -ing).",
        },
        {
          type: "description",
          content:
            "Will в современном английском используется со всеми числами и лицами. Shall используется только с первым лицом I, We, но такое использование считается устаревшим.",
        },
        {
          type: "description",
          content:
            "В современном английском со всеми числами и лицами используется только will и это не является ошибкой. Но shall еще можно встретить в газетах, старых текстах или текстах при собеседовании на работу, при поступлении в учебное учреждение, художественной литературе.",
        },
        {
          type: "examples",
          content: [
            {
              en: "I shall be working here. ",
              ru: " Я буду здесь работать.",
            },
            {
              en: "He will be drinking tea with us.",
              ru: "Он будет пить с нами чай.",
            },
            {
              en: "We will be dancing all night.  ",
              ru: "Мы будем танцевать всю ночь.",
            },
          ],
        },
        {
          type: "examples",
          content: [
            {
              en: "shall = ‘ll (сокращение) ",
              ru: "",
            },
            {
              en: "I’ll be sitting there. ",
              ru: " Я буду сидеть там.",
            },
          ],
        },
        {
          type: "examples",
          content: [
            {
              en: "will = ‘ll",
              ru: "",
            },
            {
              en: "She’ll be sending some letters. ",
              ru: "Она будет отправлять какие–то письма.",
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
            "Отрицание в Future Continuous образуется путем добавления частицы not после глагола will или shall.",
        },
        {
          type: "examples",
          content: [
            {
              en: "I will not be working here. ",
              ru: "Я не буду работать здесь.",
            },
            {
              en: "He will not be drinking tea with us. ",
              ru: " Он не будет пить с нами чай.",
            },
            {
              en: "We will not be dancing all night. ",
              ru: " Мы не будем танцевать всю ночь.",
            },
          ],
        },
        {
          type: "examples",
          content: [
            {
              en: "will not = won’t (сокращение) ",
              ru: "",
            },
            {
              en: "I won’t be working here. ",
              ru: " Я не буду работать здесь.",
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
              en: "We shan’t be dancing all night.",
              ru: "Мы не будем танцевать всю ночь.",
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
            "Образование общего вопроса в Future Continuous происходит с помощью вынесения вспомогательного глагола will (или shall) в начало предложения перед подлежащим.",
        },
        {
          type: "examples",
          content: [
            {
              en: "Will I be working here? ",
              ru: "Я буду здесь работать?",
            },
            {
              en: "Will he be drinking tea with us? ",
              ru: "Он будет пить с нами чай?",
            },
            {
              en: "Will we be dancing all night?  ",
              ru: "Мы будем танцевать всю ночь?",
            },
          ],
        },
        {
          type: "description",
          content:
            "Специальный вопрос в Future Continuous образуется с помощью вопросительного слова или фразы, которая ставится в самом начале предложения. Дальнейший порядок слов такой же, как в общем вопросе для Future Continuous.",
        },
        {
          type: "examples",
          content: [
            {
              en: "What will I be doing here?",
              ru: "Что я буду здесь делать?",
            },
            {
              en: "Whom will he be drinking tea with? ",
              ru: "С кем он будет пить чай?",
            },
            {
              en: "How long will we be dancing?",
              ru: " Как долго мы будем танцевать?",
            },
          ],
        },
      ],
    },
    {
      title: "Продолжительные действия в конкретный момент времени в будущем",
      blocks: [
        {
          type: "description",
          content:
            "Future Continuous используется для описания действия, которое будет длиться (находиться в процессе) в определённый момент в будущем. Мы указываем, что именно в этот момент действие уже начнётся, но ещё не закончится.",
        },
        {
          type: "examples",
          content: [
            {
              en: "At 8 p.m. tomorrow, I will be watching my favourite series. ",
              ru: "Завтра в 8 часов вечера я буду смотреть свой любимый сериал.",
            },
            {
              en: "This time next week, she will be flying to Japan.  ",
              ru: " В это время на следующей неделе она будет лететь в Японию.",
            },
            {
              en: "What will you be doing at 3 p.m. on Monday? ",
              ru: "Что ты будешь делать в 3 часа дня в понедельник?",
            },
          ],
        },
      ],
    },
    {
      title: "Длительное действие, прерванное другим действием",
      blocks: [
        {
          type: "description",
          content:
            "Future Continuous используется для описания длительного действия в будущем, которое будет прервано другим (обычно более коротким) действием. Короткое действие часто выражается Present Simple",
        },
        {
          type: "examples",
          content: [
            {
              en: "I will be walking home when you call me.",
              ru: " Я буду идти домой, когда ты мне позвонишь.",
            },
            {
              en: "She will be having breakfast when the delivery arrives. ",
              ru: "Она будет завтракать, когда приедет доставка.",
            },
            {
              en: "He will be driving to work when he hears the news.",
              ru: "Он будет ехать на работу, когда услышит новость.",
            },
          ],
        },
      ],
    },
    {
      title: "Два или более одновременных длительных действия в будущем",
      blocks: [
        {
          type: "description",
          content:
            "Future Continuous используется для описания двух или более действий, которые будут происходить одновременно в будущем. Часто используется союз while (в то время как).",
        },
        {
          type: "examples",
          content: [
            {
              en: "While I will be cooking dinner, my husband will be cleaning the garage.",
              ru: " Пока я буду готовить ужин, мой муж будет убирать в гараже.",
            },
            {
              en: "Tomorrow at 10 a.m., the children will be playing outside while their parents will be talking inside. ",
              ru: " Завтра в 10 утра дети будут играть на улице, пока их родители будут разговаривать внутри.",
            },
            {
              en: "She will be listening to music and will be doing her homework at the same time.",
              ru: "Она будет слушать музыку и делать домашнее задание одновременно.",
            },
          ],
        },
      ],
    },
    {
      title: "События, которые непременно произойдут",
      blocks: [
        {
          type: "description",
          content:
            "Future Continuous используется для описания события, которое непременно произойдет в ближайшем будущем вследствии предварительной договоренности или неизбежности.",
        },
        {
          type: "examples",
          content: [
            {
              en: "The sun will be setting at 6:15 p.m. tomorrow. ",
              ru: "Солнце будет заходить завтра в 6:15 вечера.",
            },
            {
              en: "I saw the news. It will be raining tomorrow. ",
              ru: " Я смотрел новости: завтра будет дождь.",
            },
            {
              en: "I will be seeing John at the meeting tomorrow. ",
              ru: " Я увижу Джона на встрече завтра. (естественно, потому что мы оба будем на встрече)",
            },
          ],
        },
        {
          type: "description",
          content:
            "Future Continuous описывает действия, которые произойдут сами собой, без специальных усилий, как часть нормального течения жизни или работы. В рамках обычного распорядка или плана, без специального намерения говорящего. ",
        },
        {
          type: "examples",
          content: [
            {
              en: "Don't worry about the report. I will be finishing it tomorrow anyway.",
              ru: "Не волнуйся о отчёте. Я всё равно закончу его завтра.",
            },
            {
              en: "The manager will be reviewing all applications next week. ",
              ru: "Менеджер будет просматривать все заявки на следующей неделе. (это часть его работы)",
            },
            {
              en: "We will be sending you updates regularly.",
              ru: "Мы будем регулярно отправлять вам обновления. (обычная практика)",
            },
          ],
        },
      ],
    },
    {
      title: "Запланированные действия",
      blocks: [
        {
          type: "description",
          content:
            "Future Continuous может использоваться, чтобы сообщить о запланированных действиях, которые произойдут в ближайшем будущем, однако в настоящее время чаще используется Present Continuous ",
        },
        {
          type: "examples",
          content: [
            {
              en: "She will be meeting Jake’s parents this evening. ",
              ru: " Она встречается с родителями Джейка сегодня вечером.",
            },
            {
              en: "She is meeting Jake’s parents this evening. ",
              ru: "Она встречается с родителями Джейка сегодня вечером.",
            },
            {
              en: "Lara will be flying to New York next morning.",
              ru: "Лара летит в Нью-Йорк следующим утром.",
            },
            {
              en: "Lara is flying to New York next morning.",
              ru: "Лара летит в Нью-Йорк следующим утром.",
            },
          ],
        },
      ],
    },
    {
      title: "Вежливый вопрос о планах",
      blocks: [
        {
          type: "description",
          content:
            "Future Continuous часто используется в вопросах, чтобы вежливо поинтересоваться планами собеседника, не оказывая давления и не звуча как просьба или приказ. Это нейтральный, ненавязчивый способ спросить о будущем.",
        },
        {
          type: "examples",
          content: [
            {
              en: "Will you be coming to the party tomorrow? ",
              ru: "Ты будешь приходить на вечеринку завтра? (просто интерес, без давления)",
            },
            {
              en: "Will you be using the printer later? ",
              ru: "Ты будешь пользоваться принтером позже? (вежливый вопрос, чтобы самому им воспользоваться)",
            },
            {
              en: "Will she be needing help with the project?",
              ru: "Ей понадобится помощь с проектом? (нейтральный вопрос).",
            },
            {
              en: "Will you be using this book for long?",
              ru: "Ты долго будешь пользоваться этой книгой?",
            },
          ],
        },
      ],
    },
    {
      title: "Предположение о том, что происходит сейчас",
      blocks: [
        {
          type: "description",
          content:
            "В разговорной речи Future Continuous может использоваться для выражения предположения о том, что, вероятно, происходит в настоящий момент. Говорящий как бы «переносит себя в будущее» и делает вывод о текущем действии.",
        },
        {
          type: "examples",
          content: [
            {
              en: "Don't call her now. She will be having dinner. ",
              ru: "Не звони ей сейчас. Она, наверное, ужинает. (предположение о том, что происходит прямо сейчас)",
            },
            {
              en: "He's late. He will be sitting in traffic.",
              ru: "Он опаздывает. Он, наверное, стоит в пробках.",
            },
            {
              en: "They're not answering the phone. They will be sleeping. ",
              ru: "Они не отвечают на телефон. Они, вероятно, спят.",
            },
          ],
        },
      ],
    },
  ],
  timeMarkers: [
    {
      markers: [
        "at 5 o'clock – в 5 часов",
        "at that moment – в тот момент",
        "this time tomorrow – в это время завтра",
        "at the same time – в это же время",
      ],
      spaceAfter: true,
    },
    {
      markers: [
        "while – во время того, как",
        "meanwhile – тем временем, между тем",
        "meantime – тем временем, между тем",
        "in the meantime –  между тем, тем временем",
      ],
      spaceAfter: true,
    },
    {
      markers: [
        "from two till three –  с двух до трех",
        "from Monday till Friday – с понедельника по пятницу",
        "from 10 a.m. to 11 a.m. tomorrow – с 10 до 11 утра завтра",
        "from 6 p.m. to 9 p.m. the day after tomorrow – с 6 до 9 вечера послезавтра",
      ],
      spaceAfter: true,
    },
    {
      markers: [
        "during this time – в течение этого времени",
        "during the morning – в течение утра",
        "during the day – в течении дня",
        "during the evening – в течении вечера",
        "during the afternoon – в течении обеда",
      ],
      spaceAfter: true,
    },

    {
      markers: [
        "for 2 hours – на протяжении двух часов",
        "for a week – за неделю, на протяжении недели",
        "for months – месяцами, в течение нескольких месяцев",
      ],
      spaceAfter: true,
    },
    {
      markers: [
        "all day long – целый день",
        "all night – всю ночь",
        "all the time – все время",
      ],
      spaceAfter: true,
    },
    {
      markers: ["the whole evening – весь вечер", "the whole year – весь год"],
      spaceAfter: true,
    },
  ],
  notes: [],
};
