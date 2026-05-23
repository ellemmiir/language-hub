import type { GrammarTopic } from "../grammar/grammar";
export const presentPerfectContinuous: GrammarTopic = {
  id: "present-perfect-continuous",
  title: "Present Perfect Continuous",
  titleRu: "Настоящее совершенное длительное время",
  conjugationTable: {
    rows: [
      {
        affirmative: "I [[have been]] work[[ing]] for an hour.",
        negative: "I [[haven't been]] work[[ing]] for an hour.",
        question: "[[Have]] I [[been]] work[[ing]] for an hour?",
        translationAffirmative: "Я работаю в течение часа.",
        translationNegative: "Я не работаю в течение часа.",
        translationQuestion: "Я уже час работаю?",
      },
      {
        affirmative: "She [[has been]] work[[ing]] for an hour.",
        negative: "She [[hasn't been]] work[[ing]] for an hour.",
        question: "[[Has]] she [[been]] work[[ing]] for an hour?",
        translationAffirmative: "Она работает в течение часа.",
        translationNegative: "Она не работает в течение часа.",
        translationQuestion: "Она работает в течение часа?",
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
            "Утвердительное предложение в {{Present Perfect Continuous}} ({{Present Perfect Progressive}}) образуется с помощью комплексного вспомогательного глагола {{have been}} или {{has been}} (формы {{Present Perfect}} от глагола {{to be}}) и формы {{Present Participle}} (первой формы смыслового глагола с окончанием {{-ing}}).",
        },
        {
          type: "description",
          content:
            "В зависимости от лица и числа, в котором стоит подлежащее в предложении, используется та или иная форма вспомогательного глагола.",
        },
        {
          type: "examples",
          content: [
            {
              en: "I, We, You, They → [[have been]] (для 1-го, 2-го лица и форм множественного числа)",
              ru: "",
            },
            {
              en: "He, She, It → [[has been]] (для 3-го лица единственного числа)",
              ru: "",
            },
          ],
        },
        {
          type: "examples",
          content: [
            {
              en: "I [[have been]] think[[ing]] about your proposal all day.",
              ru: "Я думал о твоём предложении весь день.",
            },
            {
              en: "He [[has been]] learn[[ing]] Chinese for three years.",
              ru: "Он учит китайский уже три года.",
            },
            {
              en: "We [[have been]] look[[ing]] for a new apartment for months.",
              ru: "Мы ищем новую квартиру уже несколько месяцев.",
            },
          ],
        },
        {
          type: "description",
          content: "Сокращения с {{have been}} и {{has been}}:",
        },
        {
          type: "examples",
          layout: "double",
          content: [
            {
              en: "I have been = I’[[ve been]]",
              ru: "",
            },
            {
              en: "We have been = We’[[ve been]]",
              ru: "",
            },
            {
              en: "You have been = You’[[ve been]]",
              ru: "",
            },
            {
              en: "They have been = They’[[ve been]]",
              ru: "",
            },
            {
              en: "He has been = He’[[s been]]",
              ru: "",
            },
            {
              en: "She has been = She’[[s been]]",
              ru: "",
            },
            {
              en: "It has been = It’[[s been]]",
              ru: "",
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
            "В {{Present Perfect Continuous}} отрицание формируется с помощью отрицательной частицы {{not}}, которая ставится после {{have}} или {{has}}.",
        },
        {
          type: "examples",
          content: [
            {
              en: "I [[have not been]] sleep[[ing]] well lately.",
              ru: "Я плохо спал в последнее время.",
            },
            {
              en: "You [[have not been]] listen[[ing]] to a word I said.",
              ru: "Ты не слушал ни слова из того, что я сказал.",
            },
            {
              en: "She [[has not been]] answer[[ing]] my calls.",
              ru: "Она не отвечала на мои звонки.",
            },
          ],
        },
        {
          type: "description",
          content: "Сокращения с [[not]]:",
        },
        {
          type: "examples",
          content: [
            {
              en: "have not = have[[n’t]]",
              ru: "",
            },
            {
              en: "has not = has[[n’t]]",
              ru: "",
            },
          ],
        },
        {
          type: "examples",
          content: [
            {
              en: "You [[haven't been]] pay[[ing]] attention in class.",
              ru: "Ты не слушал на занятиях.",
            },
            {
              en: "She [[hasn't been]] com[[ing]] to practice.",
              ru: "Она не приходила на тренировки.",
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
            "Общий вопрос в {{Present Perfect Continuous}} формируется с помощью вынесения вспомогательного глагола {{have}} или {{has}} в начало предложения перед подлежащим.",
        },
        {
          type: "examples",
          content: [
            {
              en: "[[Have]] you [[been]] work[[ing]] out lately?",
              ru: "Ты тренировался в последнее время?",
            },
            {
              en: "[[Have]] they [[been]] liv[[ing]] here long?",
              ru: "Они живут здесь давно?",
            },
            {
              en: "[[Has]] he [[been]] study[[ing]] for the exam?",
              ru: "Он готовился к экзамену?",
            },
          ],
        },
        {
          type: "description",
          content:
            "{{Специальный вопрос}} в {{Present Perfect Continuous}} образуется с помощью вопросительного слова или фразы, которая ставится в самом начале предложения. Дальнейший порядок слов такой же, как в общем вопросе для {{Present Perfect Continuous}}.",
        },
        {
          type: "examples",
          content: [
            {
              en: "[[What has]] she been cooking all morning?",
              ru: "Что она готовила всё утро?",
            },
            {
              en: "[[How long has]] it been raining?",
              ru: "Как долго идёт дождь?",
            },
            {
              en: "[[Why have]] you been ignoring my calls?",
              ru: "Почему ты игнорировал мои звонки?",
            },
          ],
        },
        {
          type: "note",
          content: {
            title:
              "Глаголы live, work, teach, feel — Present Perfect vs Present Perfect Continuous",
            content:
              "С глаголами {{live}} (жить), {{work}} (работать), {{teach}} (преподавать), {{feel}} (испытывать эмоцию/состояние) можно использовать как {{Present Perfect}}, так и {{Present Perfect Continuous}} без разницы в значении. Оба времени подчёркивают, что действие началось в прошлом и продолжается в настоящем.",
            examples: [
              {
                en: "I have lived in Moscow for ten years.",
                ru: "Я живу в Москве десять лет.",
              },
              {
                en: "I have been living in Moscow for ten years.",
                ru: "Я живу в Москве десять лет.",
              },
            ],
          },
        },
      ],
    },
    {
      title:
        "Действие, которое началось в прошлом и продолжается до настоящего момента",
      blocks: [
        {
          type: "description",
          content:
            "{{Present Perfect Continuous}} используется для описания действия, которое началось в прошлом, длилось без перерыва и всё ещё продолжается в настоящий момент. Мы подчёркиваем длительность, процесс, а не результат.",
        },
        {
          type: "description",
          content:
            "Ключевые маркеры: {{for}} + период времени (в течение), {{since}} + конкретный момент (с какого-то момента), {{all day/week/year}} (весь день/неделю/год)",
        },
        {
          type: "examples",
          content: [
            {
              en: "I have been waiting for you [[for two hours]]. ",
              ru: "Я жду тебя уже два часа. (Начал ждать в прошлом, всё ещё жду)",
            },
            {
              en: "She has been working here [[since 2018]].",
              ru: "Она работает здесь с 2018 года. (Начала в 2018, всё ещё работает)",
            },
            {
              en: "They have been building this house [[for six months]]. ",
              ru: "Они строят этот дом уже шесть месяцев. (Начали в прошлом, строительство всё ещё идёт)",
            },
            {
              en: "He has been sleeping [[all morning]].",
              ru: "Он спит всё утро. (Начал спать утром, всё ещё спит)",
            },
          ],
        },
        {
          type: "note",
          content: {
            title: "Отличие от Present Perfect:",
            content:
              "{{Present Perfect}} подчёркивает результат, а {{Present Perfect Continuous}} подчёркивает процесс и длительность.",
            examples: [
              {
                en: "I have finished my work.",
                ru: "Я закончил свою работу. (Есть результат)",
              },
              {
                en: "I have been working for 3 hours.",
                ru: "Я работаю уже 3 часа. (Важно, что я потратил 3 часа на процесс)",
              },
            ],
          },
        },
      ],
    },
    {
      title:
        "Действие, которое только что закончилось, но результат виден сейчас",
      blocks: [
        {
          type: "description",
          content:
            "{{Present Perfect Continuous}} используется, когда действие недавно закончилось, но его результат заметен в настоящем. Мы делаем вывод о том, что происходило, основываясь на видимых признаках.",
        },
        {
          type: "examples",
          content: [
            {
              en: "You look tired. [[Have]] you [[been]] runn[[ing]]?",
              ru: "Ты выглядишь уставшим. Ты бегал? (Видимый результат: усталость, пот)",
            },
            {
              en: "Her eyes are red. She [[has been]] cry[[ing]].",
              ru: "У неё красные глаза. Она плакала.",
            },
            {
              en: "The ground is wet. It [[has been]] rain[[ing]]. ",
              ru: "Земля мокрая. Шёл дождь.",
            },
          ],
        },
        {
          type: "note",
          content: {
            title: "Отличие от Past Continuous:",
            content:
              "{{Past Continuous}} описывает процесс в конкретный момент в прошлом, а {{Present Perfect Continuous}} связывает длительное действие с настоящим моментом (результат или только что закончившееся действие).",
            examples: [
              {
                en: "I was cleaning the apartment at 10 a.m. yesterday.",
                ru: "Я убирал квартиру вчера в 10 утра. (В 10 утра процесс уборки был в разгаре. Что происходило после 10 утра — неизвестно. Связи с настоящим нет)",
              },
              {
                en: "I have been cleaning the apartment all morning.",
                ru: "Я убирал квартиру всё утро. (Уборка началась утром и либо только что закончилась, либо всё ещё продолжается. Сейчас, возможно, чисто, или я устал — результат важен сейчас)",
              },
            ],
          },
        },
      ],
    },
    {
      title: "Подчёркивание длительности, даже если действие закончилось",
      blocks: [
        {
          type: "description",
          content:
            "{{Present Perfect Continuous}} может использоваться, чтобы подчеркнуть, как долго продолжалось действие, даже если оно уже закончилось к моменту речи. Говорящего интересует продолжительность, а не точный результат.",
        },
        {
          type: "examples",
          content: [
            {
              en: "I [[have been]] walk[[ing]] in the rain for an hour. Now I'm completely wet.",
              ru: "Я гулял под дождём час. Теперь я совершенно мокрый.",
            },
            {
              en: "We [[have been]] driv[[ing]] for six hours. Let's take a break. ",
              ru: "Мы ехали шесть часов. Давайте сделаем перерыв.",
            },
            {
              en: "She [[has been]] study[[ing]] for her exam all day. She deserves a good grade.",
              ru: "Она занималась к экзамену весь день. Она заслуживает хорошую оценку.",
            },
          ],
        },
      ],
    },
    {
      title: "Действие, которое повторялось в течение длительного периода",
      blocks: [
        {
          type: "description",
          content:
            "{{Present Perfect Continuous}} может описывать действия, которые многократно повторялись в течение длительного периода времени, особенно с глаголами, обозначающими повторяющиеся действия.",
        },
        {
          type: "examples",
          content: [
            {
              en: "I have been taking French lessons [[for two years]]. ",
              ru: "Я беру уроки французского уже два года. (Регулярные занятия)",
            },
            {
              en: "She has been going to the gym [[regularly since January]].",
              ru: "Она регулярно ходит в спортзал с января.",
            },
            {
              en: "They have been meeting [[every week]] to discuss the project.",
              ru: "Они встречаются каждую неделю, чтобы обсудить проект.",
            },
          ],
        },
      ],
    },
    {
      title: "Выражение раздражения или недовольства",
      blocks: [
        {
          type: "description",
          content:
            "Как и {{Present Continuous}} с {{always}}, {{Present Perfect Continuous}} может выражать раздражение по поводу действия, которое повторялось слишком часто в течение длительного периода.",
        },
        {
          type: "examples",
          content: [
            {
              en: "He has been [[constantly]] complaining about his job lately. ",
              ru: "Он постоянно жалуется на свою работу в последнее время.",
            },
            {
              en: "She has been [[always]] asking for money. ",
              ru: "Она вечно просит деньги.",
            },
            {
              en: "Somebody [[has been using]] my computer without permission!",
              ru: "Кто-то пользуется моим компьютером без разрешения!",
            },
          ],
        },
      ],
    },
  ],
  timeMarkers: [
    {
      markers: [
        "since 10 o’clock – с десяти часов",
        "since yesterday – со вчера",
        "since last month – с прошлого месяца",
        "since 1991 – с 1991 года",
        "since...  action in past simple – с... действие, выраженное в past simple",
      ],
      spaceAfter: true,
    },
    {
      markers: [
        "all day (long) – весь день",
        "all morning / the whole morning – все утро",
        "all evening / the whole evening – весь вечер",
        "all night long – всю ночь",
      ],
      spaceAfter: true,
    },

    {
      markers: [
        "for half an hour – на протяжении получаса",
        "for 2 hours – на протяжении двух часов",
        "for 3 days – на протяжении трёх дней",
      ],
      spaceAfter: true,
    },
    {
      markers: ["lately – в последнее время", "recently – недавно"],
      spaceAfter: true,
    },
  ],
  notes: [],
};
