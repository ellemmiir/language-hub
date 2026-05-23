import type { GrammarTopic } from "../grammar/grammar";
//готово
export const futureContinuous: GrammarTopic = {
  id: "future-continuous",
  title: "Future Continuous",
  titleRu: "Будущее длительное время",
  conjugationTable: {
    rows: [
      {
        affirmative: "I [[shall be]] work[[ing]] at eight o'clock.",
        negative: "I [[shan't be]] work[[ing]] at eight o'clock.",
        question: "[[Will]] I [[be]] work[[ing]] at eight o'clock?",
        translationAffirmative: "Я буду работать в 8 часов.",
        translationNegative: "Я не буду работать в 8 часов.",
        translationQuestion: "Я буду работать в 8 часов?",
      },
      {
        affirmative: "You [[will be]] work[[ing]] at eight o'clock.",
        negative: "You [[won't be]] work[[ing]] at eight o'clock.",
        question: "[[Will]] you [[be]] work[[ing]] at eight o'clock?",
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
            "{{Future Continuous}} ({{Future Progressive}}) образуется с помощью вспомогательного глагола {{will}} (реже {{shall}} для {{I}} и {{We}}) и формы продолжительного инфинитива ({{be}} + глагол с окончанием {{-ing}}).",
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
              en: "I [[will be]] wait[[ing]] for you at the station at 6 p.m.",
              ru: "Я буду ждать тебя на вокзале в 6 вечера.",
            },
            {
              en: "It [[will be]] gett[[ing]] darker by 5 p.m.",
              ru: "К 5 вечера будет темнеть.",
            },
            {
              en: "They [[will be]] discuss[[ing]] the project during the meeting.",
              ru: "Они будут обсуждать проект во время встречи.",
            },
          ],
        },
        {
          type: "examples",
          content: [
            {
              en: "shall = ‘[[ll]]",
              ru: "",
            },
            {
              en: "will = ‘[[ll]]",
              ru: "",
            },
          ],
        },
        {
          type: "examples",
          content: [
            {
              en: "I'[[ll]] be working from home tomorrow.",
              ru: "Я буду работать из дома завтра.",
            },
            {
              en: "She'[[ll]] be giving a presentation at the conference.",
              ru: "Она будет делать презентацию на конференции.",
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
            "Отрицание в {{Future Continuous}} образуется путем добавления частицы not после глагола {{will}} или {{shall}}.",
        },
        {
          type: "examples",
          content: [
            {
              en: "I [[will not]] be sleeping at midnight.",
              ru: "Я не буду спать в полночь.",
            },
            {
              en: "He [[will not]] be repairing the car at 10 a.m.",
              ru: "Он не будет чинить машину в 10 утра.",
            },
            {
              en: "The manager [[will not]] be attending the meeting.",
              ru: "Менеджер не будет присутствовать на встрече..",
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
              en: "Shall not = sha[[n’t]]",
              ru: "",
            },
          ],
        },
        {
          type: "examples",
          content: [
            {
              en: "She [[won't]] be singing at the concert.",
              ru: "Она не будет петь на концерте.",
            },
            {
              en: "It [[won't]] be shining brightly in the morning.",
              ru: "Утром не будет ярко светить солнце.",
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
            "Образование общего вопроса в {{Future Continuous}} происходит с помощью вынесения вспомогательного глагола {{will}} (или {{shall}}) в начало предложения перед подлежащим.",
        },
        {
          type: "examples",
          content: [
            {
              en: "[[Will]] you be waiting for me at the station?",
              ru: "Ты будешь ждать меня на вокзале?",
            },
            {
              en: "[[Will]] she be cooking dinner when I come home?",
              ru: "Она будет готовить ужин, когда я приду домой?",
            },
            {
              en: "[[Will]] they be discussing the project during the meeting?",
              ru: "Они будут обсуждать проект во время встречи?",
            },
          ],
        },
        {
          type: "description",
          content:
            "Специальный вопрос в {{Future Continuous}} образуется с помощью вопросительного слова или фразы, которая ставится в самом начале предложения. Дальнейший порядок слов такой же, как в общем вопросе для {{Future Continuous}}.",
        },
        {
          type: "examples",
          content: [
            {
              en: "[[What will]] you be doing at this time tomorrow?",
              ru: "Что ты будешь делать в это время завтра??",
            },
            {
              en: "[[Where will]] you be waiting for me?",
              ru: "Где ты будешь ждать меня?",
            },
            {
              en: "[[When will]] you be coming back home?",
              ru: "Когда ты вернёшься домой?",
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
            "{{Future Continuous}} используется для описания действия, которое будет длиться (находиться в процессе) в определённый момент в будущем. Мы указываем, что именно в этот момент действие уже начнётся, но ещё не закончится.",
        },
        {
          type: "examples",
          content: [
            {
              en: "At 8 p.m. tomorrow, I [[will be]] watch[[ing]] my favourite series. ",
              ru: "Завтра в 8 часов вечера я буду смотреть свой любимый сериал.",
            },
            {
              en: "This time next week, she [[will be]] fly[[ing]] to Japan.  ",
              ru: " В это время на следующей неделе она будет лететь в Японию.",
            },
            {
              en: "What [[will]] you [[be]] do[[ing]] at 3 p.m. on Monday? ",
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
            "{{Future Continuous}} используется для описания длительного действия в будущем, которое будет прервано другим (обычно более коротким) действием. Короткое действие часто выражается {{Present Simple}}.",
        },
        {
          type: "examples",
          content: [
            {
              en: "I [[will be]] walk[[ing]] home when you call me.",
              ru: "Я буду идти домой, когда ты мне позвонишь.",
            },
            {
              en: "She [[will be]] hav[[ing]] breakfast when the delivery arrives. ",
              ru: "Она будет завтракать, когда приедет доставка.",
            },
            {
              en: "He [[will be]] driv[[ing]] to work when he hears the news.",
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
            "{{Future Continuous}} используется для описания двух или более действий, которые будут происходить одновременно в будущем. Часто используется союз {{while}} (в то время как).",
        },
        {
          type: "examples",
          content: [
            {
              en: "[[While]] I will be cooking dinner, my husband will be cleaning the garage.",
              ru: " Пока я буду готовить ужин, мой муж будет убирать в гараже.",
            },
            {
              en: "Tomorrow at 10 a.m., the children will be playing outside [[while]] their parents will be talking inside. ",
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
            "{{Future Continuous}} используется для описания события, которое непременно произойдет в ближайшем будущем вследствии предварительной договоренности или неизбежности.",
        },
        {
          type: "examples",
          content: [
            {
              en: "The sun [[will be]] sett[[ing]] at 6:15 p.m. tomorrow. ",
              ru: "Солнце будет заходить завтра в 6:15 вечера.",
            },
            {
              en: "I saw the news. It [[will be]] rain[[ing]] tomorrow. ",
              ru: "Я смотрел новости: завтра будет дождь.",
            },
            {
              en: "I [[will be]] see[[ing]] John at the meeting tomorrow. ",
              ru: " Я увижу Джона на встрече завтра. (Естественно, потому что мы оба будем на встрече)",
            },
          ],
        },
        {
          type: "description",
          content:
            "{{Future Continuous}} описывает действия, которые произойдут сами собой, без специальных усилий, как часть нормального течения жизни или работы. В рамках обычного распорядка или плана, без специального намерения говорящего. ",
        },
        {
          type: "examples",
          content: [
            {
              en: "Don't worry about the report. I [[will be]] finish[[ing]] it tomorrow anyway.",
              ru: "Не волнуйся о отчёте. Я всё равно закончу его завтра.",
            },
            {
              en: "The manager [[will be]] review[[ing]] all applications next week. ",
              ru: "Менеджер будет просматривать все заявки на следующей неделе. (Это часть его работы)",
            },
            {
              en: "We [[will be]] send[[ing]] you updates regularly.",
              ru: "Мы будем регулярно отправлять вам обновления. (Обычная практика)",
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
            "{{Future Continuous}} может использоваться, чтобы сообщить о запланированных действиях, которые произойдут в ближайшем будущем, однако в настоящее время чаще используется {{Present Continuous}}.",
        },
        {
          type: "examples",
          content: [
            {
              en: "She [[will be]] meet[[ing]] Jake’s parents this evening. ",
              ru: " Она встречается с родителями Джейка сегодня вечером.",
            },
            {
              en: "She [[is]] meet[[ing]] Jake’s parents this evening. ",
              ru: "Она встречается с родителями Джейка сегодня вечером.",
            },
            {
              en: "Lara [[will be]] fly[[ing]] to New York next morning.",
              ru: "Лара летит в Нью-Йорк следующим утром.",
            },
            {
              en: "Lara [[is]] fly[[ing]] to New York next morning.",
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
            "{{Future Continuous}} часто используется в вопросах, чтобы вежливо поинтересоваться планами собеседника, не оказывая давления и не звуча как просьба или приказ. Это нейтральный, ненавязчивый способ спросить о будущем.",
        },
        {
          type: "examples",
          content: [
            {
              en: "Will you be coming to the party tomorrow? ",
              ru: "Ты будешь приходить на вечеринку завтра? (Просто интерес, без давления)",
            },
            {
              en: "Will you be using the printer later? ",
              ru: "Ты будешь пользоваться принтером позже? (Вежливый вопрос, чтобы самому им воспользоваться)",
            },
            {
              en: "Will she be needing help with the project?",
              ru: "Ей понадобится помощь с проектом? (Нейтральный вопрос).",
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
            "В разговорной речи {{Future Continuous}} может использоваться для выражения предположения о том, что, вероятно, происходит в настоящий момент. Говорящий как бы «переносит себя в будущее» и делает вывод о текущем действии.",
        },
        {
          type: "examples",
          content: [
            {
              en: "Don't call her now. She [[will be]] hav[[ing]] dinner. ",
              ru: "Не звони ей сейчас. Она, наверное, ужинает. (Предположение о том, что происходит прямо сейчас)",
            },
            {
              en: "He's late. He [[will be]] sitt[[ing]] in traffic.",
              ru: "Он опаздывает. Он, наверное, стоит в пробках.",
            },
            {
              en: "They're not answering the phone. They [[will be]] sleep[[ing]]. ",
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
};
