import type { GrammarTopic } from "../grammar/grammar";
//готово
export const presentContinuous: GrammarTopic = {
  id: "present-continuous",
  title: "Present Continuous",
  titleRu: "Настоящее длительное время",
  conjugationTable: {
    rows: [
      {
        affirmative: "I [[am]] work[[ing]] now.",
        negative: "I'[[m not]] work[[ing]] now.",
        question: "[[Am]] I work[[ing]] now?",
        translationAffirmative: "Я работаю сейчас.",
        translationNegative: "Я не работаю сейчас.",
        translationQuestion: "Я работаю сейчас?",
      },
      {
        affirmative: "He [[is]] work[[ing]] now.",
        negative: "He [[isn't]] work[[ing]] now.",
        question: "[[Is]] he work[[ing]] now?",
        translationAffirmative: "Он работает сейчас.",
        translationNegative: "Он не работает сейчас.",
        translationQuestion: "Он работает сейчас?",
      },
      {
        affirmative: "They [[are]] work[[ing]] now.",
        negative: "They [[aren't]] work[[ing]] now.",
        question: "[[Are]] they work[[ing]] now?",
        translationAffirmative: "Они работают сейчас.",
        translationNegative: "Они не работают сейчас.",
        translationQuestion: "Они работают сейчас?",
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
            "Утвердительное предложение в Present Continuous образуется с помощью вспомогательного глагола [[to be]] в формах [[am]], [[is]] или [[are]], и смыслового глагола, к которому добавляется окончание [[-ing]].",
        },
        {
          type: "description",
          content: "Выбор вспомогательного глагола зависит от подлежащего.",
        },
        {
          type: "examples",
          content: [
            {
              en: "I → [[am]]",
              ru: "(о себе)",
            },
            { en: "He, she, it → [[is]]", ru: "(единственное число)" },
            {
              en: "You, we, they → [[are]]",
              ru: "(множественное число и 2-е лицо единственного числа)",
            },
          ],
        },
        {
          type: "examples",
          content: [
            {
              en: "I [[am]] wash[[ing]] the dishes.",
              ru: "Я мою посуду.",
            },
            { en: "She [[is]] read[[ing]] a book.", ru: "Она читает книгу." },
            {
              en: "They [[are]] play[[ing]] basketball.",
              ru: "Они играют в баскетбол.",
            },
          ],
        },
        {
          type: "description",
          content: "Сокращение с глаголом to be",
        },
        {
          type: "examples",
          content: [
            {
              en: "I am = I’[[m]]",
              ru: "",
            },
            { en: "He is = He’[[s]]", ru: "" },
            {
              en: "She is = She’[[s]]",
              ru: "",
            },
            {
              en: "It is = It’[[s]]",
              ru: "",
            },
            { en: "You are= You’[[re]]", ru: "" },
            {
              en: "We are = We’[[re]]",
              ru: "",
            },
            {
              en: "They are = They’[[re]]",
              ru: "",
            },
          ],
        },
        {
          type: "description",
          content:
            "Правила добавления окончания -ing рассмотрены в другой теме.",
        },
        {
          type: "examples",
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
            "Отрицательное предложение в Present Continuous образуется с помощью отрицательной частицы [[not]], которая ставится после вспомогательного глагола [[am]], [[is]] или [[are]].",
        },
        {
          type: "examples",
          content: [
            {
              en: "I am not sleeping now because I have a lot of work",
              ru: "Я сейчас не сплю, потому что у меня много работы.",
            },
            {
              en: "She is not listening to the teacher at the moment.",
              ru: "Она не слушает учителя в данный момент.",
            },
            {
              en: "They are not playing football today; the weather is bad.",
              ru: "Они не играют в футбол сегодня — погода плохая.",
            },
          ],
        },
        {
          type: "description",
          content: "Сокращение с [[not]]:",
        },
        {
          type: "examples",
          content: [
            {
              en: "He isn’t working right now; he's on a break.",
              ru: "Он сейчас не работает — у него перерыв.",
            },
            {
              en: "We aren’t going to the party tonight.",
              ru: "Мы не идём на вечеринку сегодня вечером.",
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
            "Вопросительное предложение в Present Continuous образуется  вынесением вспомогательного глагола [[am]], [[is]] или [[are]] в начало предложения перед подлежащим.",
        },
        {
          type: "examples",
          content: [
            {
              en: "Am I speaking over the telephone?",
              ru: "Я разговариваю по телефону?",
            },
            {
              en: "Is he sleeping now?",
              ru: "Он сейчас спит?",
            },
            {
              en: "Are you listening to me?",
              ru: "Ты меня слушаешь?",
            },
          ],
        },
        {
          type: "description",
          content:
            "Специальный вопрос в Present Continuous образуется с помощью вопросительного слова, которое ставится в самом начале предложения. Дальнейший порядок слов такой же,  как в общем вопросе для Present Continuous.",
        },
        {
          type: "examples",
          content: [
            {
              en: "What am I doing now? ",
              ru: "Что я сейчас делаю?",
            },
            {
              en: "Why is she crying in the corner?",
              ru: "Почему она плачет в углу?",
            },
            {
              en: "Where are they going so early in the morning?",
              ru: "Куда они идут так рано утром?",
            },
          ],
        },
      ],
    },
    {
      title: "Действия, происходящие в данный момент речи",
      blocks: [
        {
          type: "description",
          content:
            "Present Continuous используется для описания действия, которое происходит прямо сейчас, в момент рассказа о нём.",
        },
        {
          type: "examples",
          content: [
            {
              en: "Look! It is snowing.",
              ru: "Смотри! Идёт снег.",
            },
            {
              en: "The phone is ringing.",
              ru: "Телефон звонит (прямо сейчас).",
            },
            {
              en: "I’m washing my clothes at the moment.",
              ru: "Я стираю свою одежду в данный момент.",
            },
          ],
        },
      ],
    },
    {
      title: "Временные действия (around now)",
      blocks: [
        {
          type: "description",
          content:
            "Present Continuous используется для описания временного действия, или такого действия, которое происходит не прямо сейчас, а в ближайшем временном промежутке – «around now» (примерно в это время).",
        },
        {
          type: "examples",
          content: [
            {
              en: "I am reading a very interesting book these days.",
              ru: "Я читаю очень интересную книгу. (Возможно не прямо сейчас, а в целом на этой неделе)",
            },
            {
              en: "He is staying with his friends until he finds an apartment.",
              ru: "Он живёт у друзей, пока не найдёт квартиру. (Временно)",
            },
            {
              en: "I’m waiting for the parcel coming soon.",
              ru: "Я жду посылку, которая скоро придет. (Я жду её в принципе, не прямо в данный момент)",
            },
          ],
        },
      ],
    },
    {
      title: "Планы на ближайшее будущее",
      blocks: [
        {
          type: "description",
          content:
            "С помощью Present Continuous описываются действия, которые запланированы на ближайшее будущее. Особенно если речь идет о договоренности с указанием времени, места или билетов (а не просто о желании). Обычно используются глаголы движения (go, come, leave, arrive, meet, see, have).",
        },
        {
          type: "examples",
          content: [
            {
              en: "I am meeting my dentist at 3 p.m. tomorrow.",
              ru: "Я встречаюсь со своим стоматологом завтра в 3 часа дня.",
            },
            {
              en: "We are leaving on Friday.",
              ru: "Мы уезжаем в пятницу.",
            },
            {
              en: "Kate and I are playing our new concert tonight.",
              ru: "Сегодня вечером мы с Кейт играем наш новый концерт.",
            },
          ],
        },
      ],
    },
    {
      title: "Меняющиеся обстоятельства",
      blocks: [
        {
          type: "description",
          content:
            "Present Continuous используется для описания ситуаций, которые развиваются или меняются.",
        },
        {
          type: "examples",
          content: [
            {
              en: "The weather is changing so unexpectedly these days.",
              ru: "Последнее время погода меняется так неожиданно.",
            },
            {
              en: "More men are taking paternity leave nowadays. ",
              ru: "В наши дни всё больше мужчин берут декретный отпуск.",
            },
          ],
        },
      ],
    },
    {
      title: "Негативные повторяющиеся действия",
      blocks: [
        {
          type: "description",
          content:
            "Мы можем использовать Present Continuous для описания вещей, которые происходят постоянно, или характера человека, если это вызывает гнев (anger), раздражение (irritation) или надоедливость (annoyance). Часто используется со словами: always (всегда), constantly (постоянно), continually (непрерывно).",
        },
        {
          type: "examples",
          content: [
            {
              en: "He is always losing his keys. ",
              ru: "Он вечно теряет свои ключи.",
            },
            {
              en: "You are constantly interrupting me!",
              ru: "Ты постоянно меня перебиваешь!",
            },
          ],
        },
      ],
    },
    {
      title: "Одновременные длительные действия (Simultaneous actions)",
      blocks: [
        {
          type: "description",
          content: "Также Present Continuous выражает одновременные действия.",
        },
        {
          type: "examples",
          content: [
            {
              en: "While I am cooking, my children are doing their homework. ",
              ru: "Пока я готовлю, мои дети делают домашнюю работу.",
            },
            {
              en: "I’m working and Ann is cooking now.",
              ru: "Я работаю сейчас, а Энн занимается готовкой.",
            },
          ],
        },
      ],
    },
  ],
  timeMarkers: [
    {
      markers: [
        "now – сейчас",
        "right now – прямо сейчас",
        "still – всё ещё",
        "currently – теперь",
        "at the moment – в этот момент",
        "at present – в настоящее время",
      ],
      spaceAfter: true,
    },
    {
      markers: [
        "this morning – этим утром",
        "this evening – этим вечером",
        "this afternoon – сегодня после обеда",
        "these days – в эти дни",
      ],
      spaceAfter: true,
    },
    {
      markers: [
        "today – сегодня (днём)",
        "tonight – сегодня (вечером)",
        "these days – на днях",
        "nowadays – в наши дни",
      ],
      spaceAfter: true,
    },
  ],
  notes: [
    {
      title: "Глаголы, не употребляющиеся в Continuous",
      content:
        "Глаголы чувств и восприятия (like, love, hate, know, understand) обычно не используются в Continuous.",
      examples: [
        { en: "I like coffee (NOT I am liking coffee)", ru: "Я люблю кофе" },
      ],
    },
  ],
};
