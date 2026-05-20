import type { GrammarTopic } from "../grammar/grammar";
//готово
export const presentSimple: GrammarTopic = {
  id: "present-simple",
  title: "Present Simple",
  titleRu: "Простое настоящее время",
  conjugationTable: {
    rows: [
      {
        affirmative: "I work every day.",
        negative: "I [[do]]n't work every day.",
        question: "[[Do]] I work every day?",
        translationAffirmative: "Я работаю каждый день.",
        translationNegative: "Я не работаю каждый день.",
        translationQuestion: "Я работаю каждый день?",
      },
      {
        affirmative: "He work[[s]] every day.",
        negative: "He [[does]]n't work every day.",
        question: "[[Does]] he work every day?",
        translationAffirmative: "Он работает каждый день.",
        translationNegative: "Он не работает каждый день.",
        translationQuestion: "Он работает каждый день?",
      },
    ],
  },

  toBeTable: {
    rows: [
      {
        affirmative: "I [[am]] a student",
        negative: "I [[am not]] a student",
        question: "[[Am]] I a student?",
        translationAffirmative: "Я студент",
        translationNegative: "Я не студент",
        translationQuestion: "Я студент?",
      },
      {
        affirmative: "He [[is]] a student",
        negative: "He [[is not]] a student",
        question: "[[Is]] he a student?",
        translationAffirmative: "Он студент",
        translationNegative: "Он не студент",
        translationQuestion: "Он студент?",
      },
      {
        affirmative: "They [[are]] students",
        negative: "They [[are not]] students",
        question: "[[Are]] they students?",
        translationAffirmative: "Они студенты",
        translationNegative: "Они не студенты",
        translationQuestion: "Они студенты?",
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
            "Утвердительное предложение в Present Simple состоит из подлежащего (кто? что?) и сказуемого.",
        },
        {
          type: "examples",
          content: [
            {
              en: "I [[study]] {{French}}.",
              ru: "Я учу французский язык.",
            },
            {
              en: "You speak English.",
              ru: "Ты говоришь по-английски.",
            },
            {
              en: "Cats like milk.",
              ru: "Кошкам нравится молоко.",
            },
          ],
        },
        {
          type: "description",
          content:
            "Если подлежащее выражается третьим лицом единственного числа (he, she, it), к глаголу добавляется окончание -s или -es.",
        },
        {
          type: "examples",
          content: [
            {
              en: "She speaks English.",
              ru: "Она говорит по-английски.",
            },
            {
              en: "He plays the violin.",
              ru: "Он играет на скрипке.",
            },
            {
              en: "Simon's cat likes milk.",
              ru: "Кот Саймона любит молоко.",
            },
          ],
        },
        {
          type: "description",
          content:
            "Правила добавления окончания [[-s/-es|spelling-rules]] рассмотрены в [[другой теме|spelling-rules]].",
        },
        {
          type: "examples",
          layout: "double",
          content: [
            {
              en: "to live → lives",
              ru: "",
            },
            {
              en: "to read → reads",
              ru: "",
            },
            {
              en: "to clean → cleans",
              ru: "",
            },
            {
              en: "to buy → buys",
              ru: "",
            },
            {
              en: "to have → has",
              ru: "",
            },
            {
              en: "to rush → rushes",
              ru: "",
            },
            {
              en: "to dry → dries",
              ru: "",
            },
            {
              en: "to go → goes",
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
            "Present Simple используется для описания чего-то, не привязанного к моменту речи, того, что актуально в общем.",
        },
        {
          type: "examples",
          content: [
            {
              en: "He like[[s]] to be in the focus of attention.",
              ru: "Ему нравится быть в центре внимания.",
            },
            {
              en: "Do you prefer red wine or white wine?",
              ru: "Вы предпочитаете красное или белое вино?",
            },
            {
              en: "What do you think about online dating?",
              ru: "Что вы думаете о знакомствах в интернете?",
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
            "Present Simple используется для описания общеизвестных истин, научных фактов, явлений природы.",
        },
        {
          type: "examples",
          content: [
            {
              en: "The Earth revolves around the Sun.",
              ru: "Земля вращается вокруг Солнца.",
            },
            { en: "Snow consists of water.", ru: "Снег состоит из воды." },
            {
              en: "At what temperature does water freeze?",
              ru: "При какой температуре замерзает вода?",
            },
          ],
        },
      ],
    },
    {
      title: "Общие утверждения",
      blocks: [
        {
          type: "description",
          content:
            "Present Simple используется для описания действий или состояний, которые не привязаны к конкретному моменту речи. Это то, что верно вообще, всегда, или в широком смысле — независимо от того, происходит ли действие прямо сейчас.",
        },
        {
          type: "examples",
          content: [
            {
              en: "I live in Moscow.",
              ru: "Я живу в Москве. (это мой постоянный адрес, а не временная ситуация)",
            },
            {
              en: "She speaks three languages",
              ru: "Она говорит на трёх языках. (это её общая способность, не привязанная к моменту речи)",
            },
            {
              en: "He works as an engineer.",
              ru: "Он работает инженером. (его профессия, постоянное состояние)",
            },
          ],
        },
      ],
    },
    {
      title: "Общеизвестные факты и истины",
      blocks: [
        {
          type: "description",
          content:
            "Present Simple используется для описания фактов, законов природы и научных истин.",
        },
        {
          type: "examples",
          content: [
            {
              en: "Water boils at 100 degrees Celsius.",
              ru: "Вода кипит при 100 градусах Цельсия.",
            },
            {
              en: "The Earth goes around the Sun.",
              ru: " Земля вращается вокруг Солнца.",
            },
            {
              en: "Dogs bark, cats meow.",
              ru: "Собаки лают, кошки мяукают.",
            },
          ],
        },
      ],
    },
    {
      title: "Регулярные, повторяющиеся действия (Habits / Routines)",
      blocks: [
        {
          type: "description",
          content:
            "Present Simple используется для описания действий, которые происходят регулярно, с определённой частотой (каждый день, всегда, часто, редко, никогда). Обычно используются наречия частотности (always, usually, often, sometimes, never) или обстоятельства времени (every day, on Mondays).",
        },
        {
          type: "examples",
          content: [
            {
              en: "I get up at 7 a.m. every day.",
              ru: "Я встаю в 7 утра каждый день.",
            },
            {
              en: "She drinks coffee in the morning.",
              ru: "Она пьёт кофе по утрам.",
            },
            {
              en: "They visit their grandparents every Sunday.",
              ru: "Они навещают своих бабушку и дедушку каждое воскресенье.",
            },
          ],
        },
      ],
    },
    {
      title: "Расписания и программы (Schedules / Timetables)",
      blocks: [
        {
          type: "description",
          content:
            "Present Simple используется для описания будущих действий, которые происходят по официальному расписанию (транспорт, киносеансы, уроки, рабочие часы, телепрограммы).",
        },
        {
          type: "examples",
          content: [
            {
              en: "The train leaves at 6 p.m. tomorrow.",
              ru: "Поезд отправляется завтра в 6 вечера.",
            },
            {
              en: "The shop opens at 9 a.m. every day, including Saturday.",
              ru: "Магазин открывается в 9 утра каждый день, включая субботу.",
            },
            {
              en: "What time does the film start?",
              ru: "Во сколько начинается фильм?",
            },
          ],
        },
      ],
    },
    {
      title: "Инструкции и рецепты",
      blocks: [
        {
          type: "description",
          content:
            "Present Simple используется для описания инструкций, указаний, рецептов. В этом значениии Present Simple используется для выражения повелительного наклонения, но звучит более вежливо или нейтрально.",
        },
        {
          type: "examples",
          content: [
            {
              en: "To log in, you enter your username and password.",
              ru: "Чтобы войти в систему, вы вводите своё имя пользователя и пароль.",
            },
            {
              en: "Press the red button to turn on the device.",
              ru: "Нажите красную кнопку, чтобы включить устройство.",
            },
            {
              en: "Take one chicken breast fillet and gratinate it at 200 degrees Centigrade.",
              ru: "Возьмите одно куриное филе и запекайте до румяной корочки при 200 градусах по Цельсию.",
            },
          ],
        },
      ],
    },
    {
      title: "Комментарии (Commentaries / Live reporting)",
      blocks: [
        {
          type: "description",
          content:
            "Present Simple используется для описания событий в момент их развития, особенно когда говорящий не может предсказать, что произойдёт дальше. Самый яркий пример — спортивные репортажи в прямом эфире. Также это могут быть комментарии к церемониям, парадам, соревнованиям.",
        },
        {
          type: "examples",
          content: [
            {
              en: "Smith passes the ball to Jones, Jones shoots, and the goalkeeper saves it!",
              ru: " Смит пасует мяч Джонсу, Джонс бьёт, и вратарь отбивает его!",
            },
            {
              en: "The horse jumps over the final fence — and she wins the race!",
              ru: "Лошадь перепрыгивает последний барьер — и она выигрывает забег!",
            },
            {
              en: "The President walks to the podium and begins his speech.",
              ru: "Президент подходит к трибуне и начинает свою речь (репортаж с места события).",
            },
          ],
        },
      ],
    },
    {
      title: "Повествования (Narrations / Stories / Plot summaries)",
      blocks: [
        {
          type: "description",
          content:
            "Present Simple используется для пересказа сюжета книг, фильмов, пьес, а также в кратких устных повествованиях («историях, рассказанных друзьями»). Это придаёт рассказу живость, драматичность и эффект присутствия, даже если события происходили в прошлом.",
        },
        {
          type: "examples",
          content: [
            {
              en: "In the movie, a young wizard goes to a magic school and meets his two best friends.",
              ru: "В фильме молодой волшебник поступает в школу магии и встречает своих двух лучших друзей.",
            },
            {
              en: 'Then he says to me, "You\'re late," and I tell him, "I don\'t care."',
              ru: "Лошадь перепрыгивает последний барьер — и она выигрывает забег!",
            },
            {
              en: "The President walks to the podium and begins his speech.",
              ru: "Затем он говорит мне: «Ты опоздал», а я отвечаю ему: «Мне всё равно».",
            },
          ],
        },
      ],
    },
    {
      title: 'С "недлительными" глаголами',
      blocks: [
        {
          type: "description",
          content:
            "Present Simple используется с глаголами, которые выражают состояние, а не действие, для описания действий, происходящих прямо сейчас, в данный момент.",
        },
        {
          type: "examples",
          content: [
            {
              en: "Do you see me? ",
              ru: "Ты видишь меня?",
            },
            {
              en: "She feels sad.",
              ru: "Ей грустно.",
            },
            {
              en: "She appears confused.",
              ru: "Она кажется растерянной.",
            },
            {
              en: "They don’t need help right now.",
              ru: "Они не нуждаются в помощи прямо сейчас.",
            },
          ],
        },
      ],
    },
    {
      title: "В заголовках",
      blocks: [
        {
          type: "description",
          content:
            "Present Simple используется в заголовках новостей, статей, видео и блогов для описания событий, которые только что произошли или произойдут в ближайшем будущем. Это делается для создания эффекта свежести, актуальности и немедленности, а также для экономии места.",
        },
        {
          type: "examples",
          content: [
            {
              en: "Stock market crashes as investors panic.",
              ru: "Фондовый рынок обрушивается, поскольку инвесторы поддаются панике.",
            },
            {
              en: "Scientists discover water on distant planet.",
              ru: "Учёные обнаруживают воду на далёкой планете.",
            },
            {
              en: "Elon Musk reveals new Tesla model.",
              ru: "Илон Маск представляет новую модель Tesla.",
            },
            {
              en: "What happens when you quit smoking?",
              ru: "Что происходит, когда вы бросаете курить?",
            },
          ],
        },
      ],
    },
  ],

  timeMarkers: [
    {
      markers: [
        "always – всегда",
        "often – часто",
        "usually – обычно",
        "regularly – постоянно",
        "from time to time – время от времени",
        "sometimes – иногда",
        "seldom – изредка",
        "rarely – редко",
        "never – никогда",
      ],
      spaceAfter: true,
    },
    {
      markers: [
        "every day – каждый день",
        "every week – каждую неделю",
        "every month – каждый месяц",
        "every year – каждый год",
      ],
      spaceAfter: true,
    },
    {
      markers: [
        "at the weekend – на выходных",
        "at weekends – по выходным",
        "at 7 o'clock – в 7 часов (когда речь о расписании)",
      ],
      spaceAfter: true,
    },
    {
      markers: [
        "twice a week – два раза в неделю",
        "three times a week – три раза в неделю",
        "four times a month – четыре раза в месяц",
        "on Mondays – по понедельникам",
        "on Sundays – по воскресеньям",
      ],
      spaceAfter: true,
    },
  ],
};
