import type { GrammarTopic } from "../grammar/grammar";
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
        affirmative: "I [[am]] a student.",
        negative: "I [[am not]] a student.",
        question: "[[Am]] I a student?",
        translationAffirmative: "Я студент.",
        translationNegative: "Я не студент.",
        translationQuestion: "Я студент?",
      },
      {
        affirmative: "He [[is]] a student.",
        negative: "He [[is not]] a student.",
        question: "[[Is]] he a student?",
        translationAffirmative: "Он студент.",
        translationNegative: "Он не студент.",
        translationQuestion: "Он студент?",
      },
      {
        affirmative: "They [[are]] students.",
        negative: "They [[are not]] students.",
        question: "[[Are]] they students?",
        translationAffirmative: "Они студенты.",
        translationNegative: "Они не студенты.",
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
            "Утвердительное предложение в {{Present Simple}} состоит из подлежащего (кто? что?) и сказуемого.",
        },
        {
          type: "examples",
          content: [
            {
              en: "I [[study]] French.",
              ru: "Я учу французский язык.",
            },
            {
              en: "You [[speak]] English.",
              ru: "Ты говоришь по-английски.",
            },
            {
              en: "Cats [[like]] milk.",
              ru: "Кошкам нравится молоко.",
            },
          ],
        },
        {
          type: "description",
          content:
            "Если подлежащее выражается третьим лицом единственного числа ({{he}}, {{she}}, {{it}}), к глаголу добавляется окончание {{-s}} или {{-es}}.",
        },
        {
          type: "examples",
          content: [
            {
              en: "She speak[[s]] English.",
              ru: "Она говорит по-английски.",
            },
            {
              en: "He play[[s]] the violin.",
              ru: "Он играет на скрипке.",
            },
            {
              en: "Simon's cat like[[s]] milk.",
              ru: "Кот Саймона любит молоко.",
            },
          ],
        },
        {
          type: "description",
          content:
            "Правила добавления окончания {{-s/-es}} рассмотрены в другой теме.",
        },
        {
          type: "examples",
          layout: "double",
          content: [
            {
              en: "to live → live[[s]]",
              ru: "",
            },
            {
              en: "to read → read[[s]]",
              ru: "",
            },
            {
              en: "to clean → clean[[s]]",
              ru: "",
            },
            {
              en: "to buy → buy[[s]]",
              ru: "",
            },
            {
              en: "to have → ha[[s]]",
              ru: "",
            },
            {
              en: "to rush → rushe[[s]]",
              ru: "",
            },
            {
              en: "to dry → drie[[s]]",
              ru: "",
            },
            {
              en: "to go → goe[[s]]",
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
            "Отрицательное предложение в {{Present Simple}} образуется с помощью вспомогательного глагола {{do}} с отрицательной частицей {{not}}, который ставится после подлежащего (кто? что?) и перед смысловым глаголом в первой форме (форма инфинитива без частицы to).",
        },
        {
          type: "examples",
          content: [
            {
              en: "I [[do not]] like coffee.",
              ru: "Я не люблю кофе.",
            },
            {
              en: "They [[do not]] live in London.",
              ru: "Они не живут в Лондоне.",
            },
          ],
        },
        {
          type: "description",
          content: "Сокращение с {{not}}:",
        },
        {
          type: "examples",
          content: [
            {
              en: "do not = do[[n't]]",
              ru: "",
            },
            {
              en: "You [[don't]] need to hurry.",
              ru: "Тебе не нужно спешить.",
            },
          ],
        },
        {
          type: "description",
          content:
            "Глагол {{do}} с подлежащими в третьем лице единственного числа ({{he}}, {{she}}, {{it}}) забирает окончание {{-s}} или {{-es}} у смыслового глагола и используется в форме {{does}}. После {{does}} смысловой глагол используется в форме простого инфинитива без частицы to (первая форма глагола).",
        },
        {
          type: "examples",
          content: [
            {
              en: "She [[does not]] read newspapers.",
              ru: "Она не читает газеты.",
            },
            {
              en: "He [[does not]] wear glasses.",
              ru: "Он не носит очки.",
            },
            {
              en: "It [[does not]] belong to me.",
              ru: "Это не принадлежит мне.",
            },
          ],
        },
        {
          type: "description",
          content: "Сокращение с {{not}}:",
        },
        {
          type: "examples",
          content: [
            {
              en: "does not = does[[n't]]",
              ru: "",
            },
            {
              en: "He does[[n't]] remember my name.",
              ru: "Он не помнит моё имя.",
            },
            {
              en: "The store does[[n't]] open on Sundays.",
              ru: "Магазин не открывается по воскресеньям.",
            },
          ],
        },
        {
          type: "description",
          content:
            "Отрицание в {{Present Simple}} также можно выражать с помощью отрицательных местоимений и наречий. После них используется смысловой глагол в утвердительной форме, так как двойное отрицание не характерно для английского языка.",
        },
        {
          type: "examples",
          content: [
            {
              en: "[[None of]] the answers [[is]] correct.",
              ru: "Ни один из ответов не верен.",
            },
            {
              en: "[[Nobody is]] perfect.",
              ru: "Никто не идеален.",
            },
            {
              en: "[[Nothing]] help[[s]].",
              ru: "Ничего не помогает.",
            },
            {
              en: "This road lead[[s nowhere]].",
              ru: "Эта дорога никуда не ведёт.",
            },
            {
              en: "She never eat[[s fish]].",
              ru: "Она никогда не ест рыбу.",
            },
            {
              en: "[[Nobody]] know[[s nothing]].",
              ru: "Никто ничего не знает.",
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
            "Вопрос в {{Present Simple}} начинается со вспомогательного глагола {{do}} или {{does}}, если подлежащее выражено третьим лицом в единственном числе ({{he}}, {{she}}, {{it}}).",
        },
        {
          type: "examples",
          content: [
            {
              en: "[[Do]] you like coffee?",
              ru: "Ты любишь кофе?",
            },
            {
              en: "[[Do]] they live in London?",
              ru: "Они живут в Лондоне?",
            },
          ],
        },
        {
          type: "examples",
          content: [
            {
              en: "[[Does]] he work here?",
              ru: "Он работает здесь?",
            },
            {
              en: "[[Does]] she speak French?",
              ru: "Она говорит по-французски?",
            },
          ],
        },
        {
          type: "description",
          content:
            "Специальный вопрос в {{Present Simple}} образуется с помощью вопросительного слова или фразы, которая ставится в самом начале предложения. Дальнейший порядок слов такой же, как в общем вопросе для {{Present Simple}}.",
        },
        {
          type: "examples",
          content: [
            {
              en: "[[What do]] you want?",
              ru: "Что ты хочешь?",
            },
            {
              en: "[[Where does]] she work?",
              ru: "Где она работает?",
            },
            {
              en: "[[When does]] the train leave?",
              ru: "Когда отправляется поезд?",
            },
            {
              en: "[[Why do]] you cry?",
              ru: "Почему ты плачешь?",
            },
            {
              en: "[[How often does]] she visit her grandmother?",
              ru: "Как часто она навещает бабушку?",
            },
          ],
        },
      ],
    },
    {
      title: "To be в Present Simple",
      blocks: [
        {
          type: "description",
          content:
            "Глагол {{to be}} (быть, существовать) – особенный и во времени {{Present Simple}} имеет три формы {{am}}, {{is}}, {{are}}. Выбор нужной формы зависит от действующего лица (подлежащего).",
        },
        {
          type: "examples",
          content: [
            {
              en: "I → [[am]] ( для 1-го лица единственного числа: я)",
              ru: "",
            },
            {
              en: "He, She, It → [[is]] ( для 3-го лица единственного числа)",
              ru: "",
            },
            {
              en: "We, You, They → [[are]] ( для 1-го, 2-го и 3-го лица множественного числа)",
              ru: "",
            },
          ],
        },
        {
          type: "examples",
          content: [
            {
              en: "I [[am]] responsible for the project.",
              ru: "Я отвечаю за проект.",
            },
            {
              en: "She [[is]] always the first to arrive.",
              ru: " Она всегда приезжает первой.",
            },
            {
              en: "This information [[is]] strictly confidential.",
              ru: "Эта информация строго конфиденциальна.",
            },
            {
              en: "You [[are]] right.",
              ru: "Ты прав.",
            },
          ],
        },

        {
          type: "description",
          content: "Сокращения с глаголом {{to be}}:",
        },
        {
          type: "examples",
          layout: "double",
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
            { en: "You are = You’[[re]]", ru: "" },
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
          type: "examples",
          content: [
            {
              en: "It'[[s]] a beautiful day outside.",
              ru: "На улице прекрасный день.",
            },
            {
              en: "She'[[s]] the one who called you.",
              ru: "Она та, кто тебе звонила.",
            },
            {
              en: "You'[[re]] the best teacher ever.",
              ru: "Ты лучший учитель в мире.",
            },
          ],
        },
        {
          type: "description",
          content:
            "​Отрицание с глаголом {{to be}} в форме настоящего времени ({{am}}, {{is}} или {{are}}) образуется с помощью частицы {{not}}, которая ставится после {{am}}, {{is}} или {{are}}. {{Am}}, {{is}} или {{are}} не нуждаются во вспомогательных глаголах для образования отрицательного предложения.",
        },
        {
          type: "examples",
          content: [
            {
              en: "I [[am not]] ready to talk about it.",
              ru: "Я не готов говорить об этом.",
            },
            {
              en: "He [[is not]] at home right now.",
              ru: "Его нет дома прямо сейчас.",
            },
            {
              en: "These shoes [[are not]] comfortable at all.",
              ru: "Эти туфли совсем не удобные.",
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
              en: "is = isn'[[t]]",
              ru: "",
            },
            { en: "are = aren’[[t]]", ru: "" },
          ],
        },
        {
          type: "examples",
          content: [
            {
              en: "She is[[n't]] ready.",
              ru: "Она не готова.",
            },
            {
              en: "They are[[n't]] coming.",
              ru: "Они не идут.",
            },
            {
              en: "I'[[m not]] sure about it.",
              ru: "Я не уверен в этом.",
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
            "{{Present Simple}} используется для описания действий или состояний, которые не привязаны к конкретному моменту речи. Это то, что верно вообще, всегда, или в широком смысле — независимо от того, происходит ли действие прямо сейчас.",
        },
        {
          type: "examples",
          content: [
            {
              en: "I live in Moscow.",
              ru: "Я живу в Москве. (Это мой постоянный адрес, а не временная ситуация)",
            },
            {
              en: "She speak[[s]] three languages",
              ru: "Она говорит на трёх языках. (Это её общая способность, не привязанная к моменту речи)",
            },
            {
              en: "He work[[s]] as an engineer.",
              ru: "Он работает инженером. (Его профессия, постоянное состояние)",
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
            "{{Present Simple}} используется для описания фактов, законов природы и научных истин.",
        },
        {
          type: "examples",
          content: [
            {
              en: "Water boil[[s]] at 100 degrees Celsius.",
              ru: "Вода кипит при 100 градусах Цельсия.",
            },
            {
              en: "The Earth goe[[s]] around the Sun.",
              ru: "Земля вращается вокруг Солнца.",
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
            "{{Present Simple}} используется для описания действий, которые происходят регулярно, с определённой частотой (каждый день, всегда, часто, редко, никогда). Обычно используются {{наречия частотности}} (always, usually, often, sometimes, never) или {{обстоятельства времени}} (every day, on Mondays).",
        },
        {
          type: "examples",
          content: [
            {
              en: "I get up [[at 7 a.m. every day]].",
              ru: "Я встаю в 7 утра каждый день.",
            },
            {
              en: "She drinks coffee [[in the morning]].",
              ru: "Она пьёт кофе по утрам.",
            },
            {
              en: "They visit their grandparents [[every Sunday]].",
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
            "{{Present Simple}} используется для описания будущих действий, которые происходят по официальному расписанию (транспорт, киносеансы, уроки, рабочие часы, телепрограммы).",
        },
        {
          type: "examples",
          content: [
            {
              en: "The train leave[[s]] at 6 p.m. tomorrow.",
              ru: "Поезд отправляется завтра в 6 вечера.",
            },
            {
              en: "The shop open[[s]] at 9 a.m. every day, including Saturday.",
              ru: "Магазин открывается в 9 утра каждый день, включая субботу.",
            },
            {
              en: "What time [[does]] the film start?",
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
            "{{Present Simple}} используется для описания инструкций, указаний, рецептов. В этом значениии {{Present Simple}} используется для выражения повелительного наклонения, но звучит более вежливо или нейтрально.",
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
              ru: "Нажмите красную кнопку, чтобы включить устройство.",
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
            "{{Present Simple}} используется для описания событий в момент их развития, особенно когда говорящий не может предсказать, что произойдёт дальше. Самый яркий пример — спортивные репортажи в прямом эфире. Также это могут быть комментарии к церемониям, парадам, соревнованиям.",
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
              ru: "Президент подходит к трибуне и начинает свою речь. (Репортаж с места события).",
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
            "{{Present Simple}} используется для пересказа сюжета книг, фильмов, пьес, а также в кратких устных повествованиях («историях, рассказанных друзьями»). Это придаёт рассказу живость, драматичность и эффект присутствия, даже если события происходили в прошлом.",
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
              ru: 'А потом он говорит мне: "Ты опоздал." А я отвечаю ему: "Мне всё равно."',
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
            "{{Present Simple}} используется в заголовках новостей, статей, видео и блогов для описания событий, которые только что произошли или произойдут в ближайшем будущем. Это делается для создания эффекта свежести, актуальности и немедленности, а также для экономии места.",
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
    {
      title: 'С "недлительными" глаголами',
      blocks: [
        {
          type: "description",
          content:
            "{{Present Simple}} используется с глаголами, которые выражают состояние, а не действие, для описания действий, происходящих прямо сейчас, в данный момент.",
        },
        {
          type: "examples",
          content: [
            {
              en: "Do you see me?",
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
      ],
      spaceAfter: true,
    },
    {
      markers: [
        "on Mondays – по понедельникам",
        "on Sundays – по воскресеньям",
      ],
      spaceAfter: true,
    },
  ],
};
