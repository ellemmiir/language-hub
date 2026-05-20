import type { GrammarTopic } from "./grammar";
//готово
export const pastPerfectContinuous: GrammarTopic = {
  id: "past-perfect-continuous",
  title: "Past Perfect Continuous",
  titleRu: "Прошедшее завершенное длительное время",
  conjugationTable: {
    rows: [
      {
        affirmative: "I had been working for an hour when he came.",
        negative: "I hadn't been working for an hour when he came.",
        question: "Had I been working for an hour when he came?",
        translationAffirmative: "Я проработал час к моменту, когда он пришел.",
        translationNegative: "Я не проработал (целый) час, когда он пришел.",
        translationQuestion: "Я уже проработал (целый) час, когда он пришел?",
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
            "Утверждение в Past Perfect Continuous (Past Perfect Progressive) формируется с помощью комплексного вспомогательного глагола had been (форма Past Perfect от глагола to be), которая используется для всех лиц и чисел, и Present Participle (первой формы смыслового глагола с окончанием -ing).",
        },
        {
          type: "examples",
          content: [
            {
              en: "We had been searching for a room for two hours before we found a free one.",
              ru: " Мы искали комнату два часа, пока не нашли свободную.",
            },
            {
              en: "I had been waiting for them all morning, so I felt annoyed. ",
              ru: "Я ждала их все утро, так что была раздражена.",
            },
            {
              en: "She’d been driving a car for an hour before she came to the gas station.  ",
              ru: "Она вела машину час до того, как приехала на заправку.",
            },
          ],
        },
        {
          type: "description",
          content: "Сокращения had been:",
        },
        {
          type: "examples",
          layout: "double",
          content: [
            {
              en: "I had been = I’d been",
              ru: "",
            },
            {
              en: "He had been = He’d been",
              ru: "",
            },
            {
              en: "It had been = It’d been",
              ru: "",
            },
            {
              en: "They had been = They’d been",
              ru: "",
            },
            {
              en: "You had been = You’d been",
              ru: "",
            },
            {
              en: "She had been = She’d been",
              ru: "",
            },
            {
              en: "We had been = We’d been",
              ru: "",
            },
          ],
        },
        {
          type: "note",
          content: {
            title: "Важно об окончании -ing",
            content:
              "Обратите внимание, что финальная [[согласная|smt]] в [[ударных]] {{слогах}} (run → running) удваивается, а непроизносимая 'e' в конце глагола (take → taking) опускается.",
            examples: [
              { en: "begin → beginning", ru: "начинать" },
              { en: "write → writing", ru: "писать" },
            ],
          },
        },
        {
          type: "description",
          content:
            "Все правила добавления окончания -ing рассмотрены в другой статье.",
        },
        {
          type: "examples",
          layout: "double",
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
            "В Past Perfect Continuous отрицание формируется с помощью частицы not, которая ставится после вспомогательного глагола had.",
        },
        {
          type: "examples",
          content: [
            {
              en: "We had not been searching for a room for two hours before we found a free one.",
              ru: "Мы не искали комнату два часа, пока не нашли свободную.",
            },
            {
              en: "I had not been waiting for them all morning, so I didn’t feel annoyed. ",
              ru: "Я не ждала их все утро, так что я не была раздражена.",
            },
          ],
        },
        {
          type: "examples",
          content: [
            {
              en: "had not = hadn't (сокращение)",
              ru: "",
            },
            {
              en: "She hadn’t been driving a car for an hour before she came to the gas station. ",
              ru: " Она не вела машину час, до того как приехала на заправку.",
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
            "Для того, чтобы задать общий вопрос в Past Perfect Continuous, необходимо первую часть комплексного вспомогательного глагола had вынести в начало предложения.",
        },
        {
          type: "examples",
          content: [
            {
              en: "Had we been searching for a room for two hours before we found a free one? ",
              ru: " Мы искали комнату два часа, пока не нашли свободную?",
            },
            {
              en: "Had she been waiting for them all morning, so she felt annoyed?",
              ru: " Она ждала их все утро, так что была раздражена?",
            },
            {
              en: "Had she been driving a car for an hour before she came to the gas station.  ",
              ru: "Она вела машину час, до того как приехала на заправку?",
            },
          ],
        },
        {
          type: "description",
          content:
            "Специальный вопрос в Past Perfect Continuous образуется с помощью вопросительного слова или фразы, которая ставится в самом начале предложения. Дальнейший порядок слов такой же, как в общем вопросе для Past Perfect Continuous.",
        },
        {
          type: "examples",
          content: [
            {
              en: "What had we been doing for two hours before we found a free room? ",
              ru: "Что мы делали два часа, пока не нашли свободную комнату?",
            },
            {
              en: "Whom had I been waiting all morning then? ",
              ru: "Кого я тогда ждала всё утро?",
            },
            {
              en: "How long had she been driving a car before she came?",
              ru: "Как долго она вела машину, до того как приехала?",
            },
          ],
        },
      ],
    },
    {
      title:
        "Продолжительные действия, завершенные до определенного момента в прошлом",
      blocks: [
        {
          type: "description",
          content:
            "Past Perfect Continuous используется для описания действия, которое началось в прошлом, длилось некоторое время и продолжало длиться до определённого момента в прошлом (или было прервано другим действием). Мы подчёркиваем длительность и процесс в прошлом до другого прошлого события.",
        },
        {
          type: "description",
          content:
            "Структура: Past Perfect Continuous (длительное действие до момента в прошлом) + for / since",
        },
        {
          type: "examples",
          content: [
            {
              en: "I had been waiting for the bus for 30 minutes when it finally arrived.",
              ru: "Я ждал автобус 30 минут, когда он наконец приехал. (начал ждать в прошлом, ждал 30 минут, и в момент прибытия автобуса ожидание всё ещё продолжалось)",
            },
            {
              en: "She had been working at the company for five years before she got promoted.",
              ru: "Она проработала в компании пять лет, прежде чем получила повышение.",
            },
            {
              en: "They had been living in that house since 2010 when the fire broke out.",
              ru: "Они жили в том доме с 2010 года, когда начался пожар.",
            },
            {
              en: "He was tired because he had been running all morning.",
              ru: "Он устал, потому что бегал всё утро.",
            },
          ],
        },
        {
          type: "description",
          content:
            "Пояснение: Past Perfect Continuous показывает, что действие длилось до другого действия в прошлом (или до другого момента в прошлом) и, возможно, продолжалось после него или было прервано.",
        },
        {
          type: "note",
          content: {
            title: "Важно об окончании -ing",
            content:
              "Обратите внимание, что финальная [[согласная|smt]] в [[ударных]] {{слогах}} (run → running) удваивается, а непроизносимая 'e' в конце глагола (take → taking) опускается.",
            examples: [
              { en: "begin → beginning", ru: "начинать" },
              { en: "write → writing", ru: "писать" },
            ],
          },
        },
      ],
    },

    {
      title: "Причина или объяснение состояния в прошлом",
      blocks: [
        {
          type: "description",
          content:
            "Past Perfect Continuous используется, чтобы объяснить причину состояния или ситуации в прошлом. Мы показываем, что предшествующее длительное действие привело к наблюдаемому результату.",
        },
        {
          type: "examples",
          content: [
            {
              en: "The ground was wet. It had been raining all night. ",
              ru: "Земля была мокрая. Дождь шёл всю ночь. (дождь шёл до того, как мы увидели мокрую землю)",
            },
            {
              en: "She was out of breath. She had been running to catch the bus.",
              ru: "Она запыхалась. Она бежала, чтобы успеть на автобус.",
            },
            {
              en: "His eyes were red. He had been crying.",
              ru: "У него были красные глаза. Он плакал.",
            },
          ],
        },
        {
          type: "description",
          content:
            "Отличие от Past Perfect (Simple): Past Perfect (Simple) подчёркивает факт завершения действия до другого прошлого действия. Past Perfect Continuous подчёркивает длительность и процесс, которые привели к результату.",
        },
      ],
    },

    {
      title:
        "Длительное действие, которое было прервано другим действием в прошлом",
      blocks: [
        {
          type: "description",
          content:
            "Past Perfect Continuous используется, чтобы показать, что длительное действие в прошлом было прервано другим (обычно коротким) действием. Длительное действие происходило до прерывания, а возможно, и продолжалось после него.",
        },
        {
          type: "examples",
          content: [
            {
              en: "I had been sleeping for two hours when the phone rang.",
              ru: "Я спал два часа, когда зазвонил телефон. (длительное действие — сон; прерывающее действие — звонок)",
            },
            {
              en: "She had been cooking dinner when she cut her finger.",
              ru: "Она готовила ужин, когда порезала палец.",
            },
            {
              en: "They had been driving for hours when they realized they were lost. ",
              ru: " Они ехали несколько часов, когда поняли, что заблудились.",
            },
            {
              en: "He had been talking on the phone when the boss walked in.",
              ru: "Он разговаривал по телефону, когда вошёл начальник.",
            },
          ],
        },
        {
          type: "description",
          content:
            "Отличие от Past Continuous: Past Continuous (I was sleeping when the phone rang) показывает, что действие происходило в момент прерывания, но не подчёркивает, как долго оно длилось до этого. Past Perfect Continuous добавляет информацию о продолжительности (had been sleeping for two hours).",
        },
      ],
    },
    {
      title:
        "Длительное действие, которое завершилось перед другим действием в прошлом",
      blocks: [
        {
          type: "description",
          content:
            "Past Perfect Continuous может описывать действие, которое длилось до определённого момента в прошлом и завершилось перед этим моментом, но при этом важна именно продолжительность действия.",
        },
        {
          type: "examples",
          content: [
            {
              en: "By the time he joined the company, she had been working there for ten years.",
              ru: "К тому моменту, как он пришёл в компанию, она проработала там уже десять лет. (возможно, она всё ещё работала, а возможно, уже уволилась — акцент на продолжительности опыта)",
            },
            {
              en: "When they sold the house, they had been living in it for 20 years.",
              ru: "Когда они продали дом, они прожили в нём 20 лет.",
            },
            {
              en: "By 2015, he had been teaching at the university for 15 years. ",
              ru: "К 2015 году он преподавал в университете уже 15 лет.",
            },
          ],
        },
      ],
    },
    {
      title: "Повторяющиеся действия в прошлом с оттенком длительности",
      blocks: [
        {
          type: "description",
          content:
            "Как и Present Perfect Continuous с always, Past Perfect Continuous может выражать повторяющиеся действия в прошлом, которые происходили до определённого момента, часто с оттенком раздражения или неодобрения.",
        },
        {
          type: "examples",
          content: [
            {
              en: "He had been constantly complaining about his salary before he finally quit.",
              ru: "Он постоянно жаловался на свою зарплату, прежде чем наконец уволился.",
            },
            {
              en: "She had been always arriving late, so the manager fired her.",
              ru: "Она всегда опаздывала, поэтому менеджер уволил её.",
            },
            {
              en: "They had been repeatedly asking for help, but nobody listened.",
              ru: " Они неоднократно просили о помощи, но никто не слушал.",
            },
          ],
        },
      ],
    },
  ],
  timeMarkers: [
    {
      markers: [
        "before – до",
        "till – до (только в отрицательных предложениях)",
        "untill – до (только в отрицательных предложениях)",
      ],
      spaceAfter: true,
    },
    {
      markers: [
        "for an hour – на протяжении часа",
        "for 5 hours – на протяжении пяти часов",
        "for a day – на протяжении дня",
        "for a week – на протяжении недели",
        "for a month – на протяжении месяца",
      ],
      spaceAfter: true,
    },
    {
      markers: [
        "all morning / the whole morning – все утро",
        "all day (long) / the whole day – весь день",
        "all week / the whole week – всю неделю",
        "all month / the whole month – весь месяц",
        "all year (round) – весь год",
      ],
      spaceAfter: true,
    },
    {
      markers: [
        "since 5 o’clock – с пяти часов",
        "since last week – с прошлой недели",
        "since last month – с прошлого месяца",
        "since 1991 – с 1991 года",
        "since last century – с прошлого столетия",
      ],
      spaceAfter: true,
    },
  ],
  notes: [],
};
