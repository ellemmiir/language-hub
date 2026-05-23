import type { GrammarTopic } from "../grammar/grammar";
export const pastContinuous: GrammarTopic = {
  id: "past-continuous",
  title: "Past Continuous",
  titleRu: "Прошедшее длительное время",
  conjugationTable: {
    rows: [
      {
        affirmative: "I [[was]] working at 5pm yesterday.",
        negative: "I [[was not]] working at 5pm yesterday.",
        question: "[[Was]] I working at 5pm yesterday?",
        translationAffirmative: "Я работал вчера в 5 вечера.",
        translationNegative: "Я не работал вчера в 5 вечера.",
        translationQuestion: "Я работал вчера в 5 вечера?",
      },
      {
        affirmative: "They [[were]] working at 5pm yesterday.",
        negative: "They [[were not]] working at 5pm yesterday.",
        question: "[[Were]] they working at 5pm yesterday?",
        translationAffirmative: "Они работали вчера в 5 вечера.",
        translationNegative: "Они не работали вчера в 5 вечера.",
        translationQuestion: "Они работали вчера в 5 вечера?",
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
            "{{Past Continuous (Past Progressive)}} образуется с помощью вспомогательного глагола {{was}} или {{were}} и простого причастия настоящего времени (первая форма глагола с окончанием {{-ing}}). {{Was}} и {{were}} – это формы прошедшего времени вспомогательного глагола {{to be}}.",
        },
        {
          type: "description",
          content: "Выбор нужной формы зависит от подлежащего.",
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
              en: "It [[was]] gett[[ing]] darker outside.",
              ru: "На улице темнело.",
            },
            {
              en: "The children [[were]] runn[[ing]] around the garden.",
              ru: "Дети бегали по саду.",
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
            "Отрицание в {{Past Continuous}} образуется путем добавления частицы {{not}} после вспомогательного глагола {{was}} или {{were}}.",
        },
        {
          type: "examples",
          content: [
            {
              en: "He [[was not]] sleep[[ing]] when you called.",
              ru: "Он не спал, когда ты позвонил.",
            },
            {
              en: "The cat [[was not]] hid[[ing]] under the bed.",
              ru: "Кот не прятался под кроватью.",
            },
            {
              en: "We [[were not]] argu[[ing]] about that.",
              ru: "Мы не спорили об этом.",
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
              en: "He was[[n't]] listening to the teacher.",
              ru: "Он не слушал учителя.",
            },
            {
              en: "You were[[n't]] working when we came.",
              ru: "Ты не работал, когда мы пришли.",
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
            "Общий вопрос в {{Past Continuous}} образуется путем вынесения вспомогательного глагола was или were в начало предложения перед подлежащим.",
        },
        {
          type: "examples",
          content: [
            {
              en: "[[Were]] we talk[[ing]] too loudly?",
              ru: "Мы говорили слишком громко?",
            },
            {
              en: "[[Was]] your mother cook[[ing]] dinner?",
              ru: "Твоя мама готовила ужин?",
            },
            {
              en: "[[Were]] they wait[[ing]] for the bus?",
              ru: "Они ждали автобус?",
            },
          ],
        },
        {
          type: "description",
          content:
            "Специальный вопрос в {{Past Continuous}} образуется с помощью вопросительного слова или фразы, которая ставится в самом начале предложения. Дальнейший порядок слов такой же, как в общем вопросе для {{Past Continuous}}.",
        },
        {
          type: "examples",
          content: [
            {
              en: "[[What]] was he saying when I interrupted him?",
              ru: "Что он говорил, когда я прервал его?",
            },
            {
              en: "[[Where]] was she going so early in the morning?",
              ru: "Куда она шла так рано утром?",
            },
            {
              en: "[[When]] were you planning to tell me the truth?",
              ru: "Когда ты планировал сказать мне правду?",
            },
          ],
        },
      ],
    },
    {
      title: "Продолжительные действия в конкретный момент времени в прошлом",
      blocks: [
        {
          type: "description",
          content:
            "{{Past Continuous}} используется для описания действия, которое длилось (находилось в процессе) в определённый момент в прошлом. Мы не знаем, когда действие началось и когда закончилось. Важно, что в этот конкретный момент оно происходило.",
        },
        {
          type: "examples",
          content: [
            {
              en: "At 8 p.m. last night, I [[was]] watch[[ing]] TV.",
              ru: " В 8 часов вечера вчера я смотрел телевизор. (Действие было в процессе именно в этот момент)",
            },
            {
              en: "Yesterday at this time, she [[was]] fly[[ing]] to Paris.",
              ru: "Вчера в это же время она летела в Париж.",
            },
            {
              en: "What [[were]] you do[[ing]] at 3 p.m. on Monday?",
              ru: "Что ты делал в 3 часа дня в понедельник?",
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
            "Длительное действие (в {{Past Continuous}}) было прервано коротким действием (в {{Past Simple}}). Короткое действие как бы «врывается» в процесс.",
        },
        {
          type: "description",
          content:
            "Структура: {{Past Continuous}} (длительное) + {{when}} + {{Past Simple}} (короткое)",
        },
        {
          type: "examples",
          content: [
            {
              en: "I [[was]] walk[[ing]] home when I [[met]] an old friend.",
              ru: " Я шёл домой, когда встретил старого друга.",
            },
            {
              en: "She [[was]] hav[[ing]] breakfast when the phone [[rang]].",
              ru: "Она завтракала, когда зазвонил телефон.",
            },
            {
              en: "They [[were]] play[[ing]] football when it [[started]] to rain.",
              ru: "Они играли в футбол, когда начался дождь.",
            },
            {
              en: "He [[was]] driv[[ing]] to work when he [[saw]] the accident. ",
              ru: "Он ехал на работу, когда увидел аварию.",
            },
          ],
        },
        {
          type: "description",
          content:
            "Слова {{while}} («в то время, как», «пока») и {{when}} («когда»)  подчеркивают разные части предложения. Как правило, после слова {{while}} следует {{Past Continuous}}, а за словом when следует {{Past Simple}}.",
        },
        {
          type: "examples",
          content: [
            {
              en: "[[While]] I [[was]] read[[ing]], my brother was playing video games.",
              ru: "Пока я читал, мой брат играл в видеоигры. (оба действия длились одновременно)",
            },
            {
              en: "[[When]] Dana [[broke]] the cup I was making some cakes.",
              ru: "Когда Дана разбила чашку, я готовила пирожные.",
            },
            {
              en: "[[While]] I [[was]] eat[[ing]] my soup, he came home. ",
              ru: "В то время, когда я ел суп, он пришел домой.",
            },
          ],
        },
      ],
    },
    {
      title:
        "Описание атмосферы, обстановки и фоновых действий в повествовании ",
      blocks: [
        {
          type: "description",
          content:
            "В рассказах, историях, анекдотах {{Past Continuous}} используется для описания фоновой обстановки — того, что происходило вокруг, когда началось основное событие (которое часто передаётся {{Past Simple}}).",
        },
        {
          type: "examples",
          content: [
            {
              en: "It was getting dark. The wind was blowing. Rain was falling heavily. Suddenly, I heard a strange noise.",
              ru: "Темнело. Ветер дул. Дождь сильно шёл. Внезапно я услышал странный шум.",
            },
            {
              en: "The sun was shining, the birds were singing, and we were walking through the park when we saw her.",
              ru: "Солнце светило, птицы пели, и мы гуляли по парку, когда увидели её.",
            },
            {
              en: "When I walked into the room, everyone was sitting quietly and waiting for me.",
              ru: "Когда я вошёл в комнату, все тихо сидели и ждали меня.",
            },
          ],
        },
      ],
    },
    {
      title: "Выражение неодобрения ",
      blocks: [
        {
          type: "description",
          content:
            "{{Past Continuous}} может выражать повторяющиеся действия в прошлом, которые вызывали раздражение, неодобрение или удивление у говорящего. В этом смысле {{Past Continuous}} обычно используется со словами {{always}} (всегда, постоянно), {{often}} (часто), {{constantly}} (постоянно). Эти слова ставятся между вспомогательным глаголом {{was}} или {{were}} и смысловым глаголом с окончанием {{-ing}}.",
        },
        {
          type: "examples",
          content: [
            {
              en: "He was [[always]] losing his keys when he was young. ",
              ru: "Он вечно терял свои ключи, когда был молодым.",
            },
            {
              en: "She was [[constantly]] complaining about everything.",
              ru: "Она постоянно жаловалась на всё подряд.",
            },
            {
              en: "They were [[constantly]] making noise late at night.",
              ru: "Они вечно шумели поздно ночью.",
            },
          ],
        },
      ],
    },
    {
      title: " Незавершённое или прерванное действие",
      blocks: [
        {
          type: "description",
          content:
            "{{Past Continuous}} показывает, что действие не было завершено. Оно началось, длилось какое-то время, но было прервано или просто не доведено до конца (в отличие от {{Past Simple}}, где действие завершено).",
        },
        {
          type: "examples",
          content: [
            {
              en: "I was reading the book yesterday. ",
              ru: "Я читал книгу вчера. (Не факт, что дочитал; процесс)",
            },
            {
              en: "I read the book yesterday.",
              ru: " Я прочитал книгу вчера. (Закончил, результат)",
            },
            {
              en: "They were building a new house last year.",
              ru: "Они строили новый дом в прошлом году. (Возможно, не достроили)",
            },
            {
              en: "They built a new house last year.",
              ru: "Они построили новый дом в прошлом году. (Завершили строительство)",
            },
          ],
        },
      ],
    },
    {
      title: "Запланированные действия, которые не произошли",
      blocks: [
        {
          type: "description",
          content:
            "{{Past Continuous}} используется для описания запланированных действий в прошлом, которые не произошли. Обычно в таких предложениях используются глаголы {{mean}} (собираться, намереваться), {{intend}} (намереваться), {{hope}} (надеяться), {{expect}} (ожидать), {{think}} (думать), {{plan}} (планировать).",
        },
        {
          type: "examples",
          content: [
            {
              en: "I was [[hoping]] to meet her at the bookstore but she didn’t come. ",
              ru: "Я надеялся встретить её в книжном магазине, но она не пришла.",
            },
            {
              en: "My mother was [[thinking]] of cooking a pie but we wanted some pizza.",
              ru: "Моя мама думала приготовить пирог, но мы хотели пиццы.",
            },
            {
              en: "Tom was [[planning]] to buy these tickets for the concert but forgot his wallet at home.",
              ru: "Том собирался купить эти билеты на концерт, но забыл свой кошелек дома.",
            },
          ],
        },
      ],
    },
    {
      title: "Вежливые вопросы и выражения",
      blocks: [
        {
          type: "description",
          content:
            "{{Past Continuous}} может использоваться в вопросах, чтобы сделать их более вежливыми, менее прямыми и менее навязчивыми, особенно когда мы интересуемся планами или намерениями собеседника.",
        },
        {
          type: "examples",
          content: [
            {
              en: "What were you thinking about?",
              ru: "О чём ты думал? (Более мягко, чем What did you think?)",
            },
            {
              en: "I was wondering if you could help me. ",
              ru: "Мне было интересно, не могли бы вы мне помочь. (Очень вежливая форма)",
            },
            {
              en: "Were you hoping to see him yesterday?",
              ru: " Ты надеялся увидеть его вчера? (Более деликатно, чем Did you hope?)",
            },
          ],
        },
      ],
    },
  ],
  timeMarkers: [
    {
      markers: [
        "at that moment – в тот момент",
        "at the same time – в это же время",
        "while – во время того, как",
        "when – когда",
        "as – так как",
      ],
      spaceAfter: true,
    },
    {
      markers: [
        "all morning / the whole morning – всё утро",
        "all night (long) / the whole night – всю ночь",
        "all evening / the whole evening – весь вечер",
        "all day (long) / the whole day – весь день",
      ],
      spaceAfter: true,
    },
    {
      markers: [
        "last Monday – в прошлый понедельник",
        "last week – на прошлой неделе",
        "last year – в прошлом году",
      ],
      spaceAfter: true,
    },
  ],
  notes: [],
};
