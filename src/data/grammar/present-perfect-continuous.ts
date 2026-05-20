import type { GrammarTopic } from "../grammar/grammar";
//готово
export const presentPerfectContinuous: GrammarTopic = {
  id: "present-perfect-continuous",
  title: "Present Perfect Continuous",
  titleRu: "Настоящее совершенное длительное время",
  conjugationTable: {
    rows: [
      {
        affirmative: "I have been working for an hour.",
        negative: "I haven't been working for an hour.",
        question: "Have I been working for an hour?",
        translationAffirmative: "Я работаю в течение часа",
        translationNegative: "Я не работаю в течение часа.",
        translationQuestion: "Я уже час работаю?",
      },
      {
        affirmative: "She has been working for an hour.",
        negative: "She hasn't been working for an hour.",
        question: "Has she been working for an hour?",
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
            "Утвердительное предложение в Present Perfect Continuous (Present Perfect Progressive) образуется с помощью комплексного вспомогательного глагола have been или has been (формы Present Perfect от глагола to be) и формы Present Participle (первой формы смыслового глагола с окончанием -ing).",
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
              en: "I, We, You, They → have been (для 1-го, 2-го лица и форм множественного числа)",
              ru: "",
            },
            {
              en: "He, She, It → has been (для 3-го лица единственного числа)",
              ru: "",
            },
          ],
        },
        {
          type: "examples",
          content: [
            {
              en: "I have been watching this trick all this time",
              ru: " Я смотрела на этот фокус всё это время.",
            },
            {
              en: "She has been waiting for you for half an hour.  ",
              ru: "Она ждала тебя на протяжении получаса.",
            },
            {
              en: "We’ve been talking about our wedding.",
              ru: "Мы разговаривали о нашей свадьбе.​",
            },
          ],
        },
        {
          type: "description",
          content: "Сокращения с have been и has been:",
        },
        {
          type: "examples",
          content: [
            {
              en: "I have been = I’ve been",
              ru: "",
            },
            {
              en: "We have been = We’ve been",
              ru: "",
            },
            {
              en: "You have been = You’ve been",
              ru: "",
            },
            {
              en: "They have been = They’ve been",
              ru: "",
            },
            {
              en: "He has been = He’s been",
              ru: "",
            },
            {
              en: "She has been = She’s been",
              ru: "It has been = It’s been",
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
            "В Present Perfect Continuous отрицание формируется с помощью отрицательной частицы not, которая ставится после have или has.",
        },
        {
          type: "examples",
          content: [
            {
              en: "I have not been watching this trick all this time.",
              ru: "Я не смотрела на этот фокус всё это время.",
            },
            {
              en: "She has not been waiting for you for half an hour.",
              ru: "Она не ждала тебя на протяжении получаса.",
            },
          ],
        },
        {
          type: "examples",
          content: [
            {
              en: "have not been = haven’t been (сокращение)",
              ru: "",
            },
            {
              en: "We haven’t been talking about our wedding. ",
              ru: " Мы не разговаривали о нашей свадьбе.",
            },
          ],
        },
        {
          type: "examples",
          content: [
            {
              en: "has not been = hasn’t been",
              ru: "",
            },
            {
              en: "Ann hasn’t been living in this house for 10 years.",
              ru: " Энн не прожила (не живет) в этом доме 10 лет.",
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
            "Общий вопрос в Present Perfect Continuous формируется с помощью вынесения вспомогательного глагола have или has в начало предложения перед подлежащим.",
        },
        {
          type: "examples",
          content: [
            {
              en: "Have you been watching this trick all this time?",
              ru: "Ты смотрела на этот фокус всё это время?",
            },
            {
              en: "Has she been waiting for you for half an hour? ",
              ru: "Она ждала тебя на протяжении получаса?",
            },
            {
              en: "Have they been talking about our wedding?  ",
              ru: "Они разговаривали о нашей свадьбе?",
            },
          ],
        },
        {
          type: "description",
          content:
            "Специальный вопрос в Present Perfect Continuous образуется с помощью вопросительного слова или фразы, которая ставится в самом начале предложения. Дальнейший порядок слов такой же, как в общем вопросе для Present Perfect Continuous.",
        },
        {
          type: "examples",
          content: [
            {
              en: "What have I been doing all this time?",
              ru: "Что я делала все это время?",
            },
            {
              en: "How long has she been waiting for you? ",
              ru: "Как долго она тебя ждала?",
            },
            {
              en: "Why have we been talking about our wedding? ",
              ru: "Почему мы разговаривали о нашей свадьбе?",
            },
          ],
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
            "Present Perfect Continuous используется для описания действия, которое началось в прошлом, длилось без перерыва и всё ещё продолжается в настоящий момент. Мы подчёркиваем длительность, процесс, а не результат.",
        },
        {
          type: "description",
          content:
            "Ключевые маркеры: for + период времени (в течение), since + конкретный момент (с какого-то момента), all day/week/year (весь день/неделю/год)",
        },
        {
          type: "examples",
          content: [
            {
              en: "I have been waiting for you for two hours. ",
              ru: " Я жду тебя уже два часа. (начал ждать в прошлом, всё ещё жду)",
            },
            {
              en: "She has been working here since 2018.",
              ru: "Она работает здесь с 2018 года. (начала в 2018, всё ещё работает)",
            },
            {
              en: "They have been building this house for six months. ",
              ru: "Они строят этот дом уже шесть месяцев. (начали в прошлом, строительство всё ещё идёт)",
            },
            {
              en: "He has been sleeping all morning.",
              ru: "Он спит всё утро. (начал спать утром, всё ещё спит)",
            },
          ],
        },
        {
          type: "description",
          content:
            "Отличие от Present Perfect: Present Perfect подчёркивает результат (I have finished my work — результат есть). Present Perfect Continuous подчёркивает процесс и длительность (I have been working for 3 hours — важно, что я потратил 3 часа на процесс).",
        },
      ],
    },
    {
      title:
        " Действие, которое только что закончилось, но результат виден сейчас",
      blocks: [
        {
          type: "description",
          content:
            "Present Perfect Continuous используется, когда действие недавно закончилось, но его результат заметен в настоящем. Мы делаем вывод о том, что происходило, основываясь на видимых признаках.",
        },
        {
          type: "examples",
          content: [
            {
              en: "You look tired. Have you been running? ",
              ru: "Ты выглядишь уставшим. Ты бегал? (видимый результат: усталость, пот)",
            },
            {
              en: "Her eyes are red. She has been crying.",
              ru: "У неё красные глаза. Она плакала.",
            },
            {
              en: "The ground is wet. It has been raining. ",
              ru: " Земля мокрая. Шёл дождь.",
            },
          ],
        },
      ],
    },
    {
      title: "Подчёркивание длительности, даже если действие закончилось",
      blocks: [
        {
          type: "description",
          content:
            "Present Perfect Continuous может использоваться, чтобы подчеркнуть, как долго продолжалось действие, даже если оно уже закончилось к моменту речи. Говорящего интересует продолжительность, а не точный результат.",
        },
        {
          type: "examples",
          content: [
            {
              en: "I have been cleaning the house all morning. Now I finally need a rest.",
              ru: "Я убирала дом всё утро. Теперь мне наконец нужен отдых. (действие закончилось, но важна длительность)",
            },
            {
              en: "We have been driving for six hours. Let's take a break. ",
              ru: "Мы ехали шесть часов. Давайте сделаем перерыв.",
            },
            {
              en: "She has been studying for her exam all day. She deserves a good grade.",
              ru: " Она занималась к экзамену весь день. Она заслуживает хорошую оценку.",
            },
          ],
        },
        {
          type: "description",
          content:
            "Отличие от Past Continuous: Past Continuous описывает процесс в конкретный момент в прошлом (I was cleaning at 10 a.m.). Present Perfect Continuous связывает длительное действие с настоящим моментом (результат или только что закончившееся действие).",
        },
      ],
    },
    {
      title: "Действие, которое повторялось в течение длительного периода",
      blocks: [
        {
          type: "description",
          content:
            "Present Perfect Continuous может описывать действия, которые многократно повторялись в течение длительного периода времени, особенно с глаголами, обозначающими повторяющиеся действия..",
        },
        {
          type: "examples",
          content: [
            {
              en: "I have been taking French lessons for two years. ",
              ru: "Я беру уроки французского уже два года. (регулярные занятия)",
            },
            {
              en: "She has been going to the gym regularly since January.",
              ru: "Она регулярно ходит в спортзал с января.",
            },
            {
              en: "They have been meeting every week to discuss the project.",
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
            "Как и Present Continuous с always, Present Perfect Continuous может выражать раздражение по поводу действия, которое повторялось слишком часто в течение длительного периода.",
        },
        {
          type: "examples",
          content: [
            {
              en: "He has been constantly complaining about his job lately. ",
              ru: "Он постоянно жалуется на свою работу в последнее время.",
            },
            {
              en: "She has been always asking for money. ",
              ru: "Она вечно просит деньги.",
            },
            {
              en: "Somebody has been using my computer without permission!",
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
