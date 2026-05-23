import type { GrammarTopic } from "./grammar";
export const pastPerfectContinuous: GrammarTopic = {
  id: "past-perfect-continuous",
  title: "Past Perfect Continuous",
  titleRu: "Прошедшее завершенное длительное время",
  conjugationTable: {
    rows: [
      {
        affirmative: "I [[had been]] work[[ing]] for an hour when he came.",
        negative: "I [[hadn't been]] work[[ing]] for an hour when he came.",
        question: "[[Had]] I [[been]] work[[ing]] for an hour when he came?",
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
            "Утверждение в {{Past Perfect Continuous}} ({{Past Perfect Progressive}}) формируется с помощью комплексного вспомогательного глагола {{had been}} (форма {{Past Perfect}} от глагола {{to be}}), которая используется для всех лиц и чисел, и {{Present Participle}} (первой формы смыслового глагола с окончанием {{-ing}}).",
        },
        {
          type: "examples",
          content: [
            {
              en: "They [[had been]] walk[[ing]] for three hours before they finally reached the village.",
              ru: "Они шли три часа, прежде чем наконец добрались до деревни.",
            },
            {
              en: "He [[had been]] learn[[ing]] Chinese for two years before he moved to Beijing.",
              ru: "Он учил китайский два года до переезда в Пекин.",
            },
            {
              en: "She had been feeling sick all day, so she decided to see a doctor.",
              ru: "Она чувствовала себя плохо весь день, поэтому решила пойти к врачу.",
            },
          ],
        },
        {
          type: "description",
          content: "Сокращения {{had been}}:",
        },
        {
          type: "examples",
          layout: "double",
          content: [
            {
              en: "I had been = I’[[d been]]",
              ru: "",
            },
            {
              en: "He had been = He’[[d been]]",
              ru: "",
            },
            {
              en: "It had been = It’[[d been]]",
              ru: "",
            },
            {
              en: "They had been = They’[[d been]]",
              ru: "",
            },
            {
              en: "You had been = You’[[d been]]",
              ru: "",
            },
            {
              en: "She had been = She’[[d been]]",
              ru: "",
            },
            {
              en: "We had been = We’[[d been]]",
              ru: "",
            },
          ],
        },
        {
          type: "examples",
          content: [
            {
              en: "I'[[d been]] wait[[ing]] for you for an hour before you showed up.",
              ru: "Я ждал тебя час, прежде чем ты появился.",
            },
            {
              en: "You'[[d been]] driv[[ing]] for too long without a break, so I offered to take over.",
              ru: "Ты вёл машину слишком долго без перерыва, поэтому я предложил подменить тебя.",
            },
            {
              en: "He'[[d been]] study[[ing]] all night, so he was exhausted in the morning.",
              ru: "Он занимался всю ночь, поэтому утром был измучен.",
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
            "В {{Past Perfect Continuous}} отрицание формируется с помощью частицы {{not}}, которая ставится после вспомогательного глагола {{had}}.",
        },
        {
          type: "examples",
          content: [
            {
              en: "I [[had not been]] sleep[[ing]] well before I started taking melatonin.",
              ru: "Я плохо спал до того, как начал принимать мелатонин.",
            },
            {
              en: "You [[had not been]] pay[[ing]] attention, so you missed the most important part.",
              ru: "Ты не слушал, поэтому пропустил самую важную часть.",
            },
          ],
        },
        {
          type: "examples",
          content: [
            {
              en: "had not = had[[n't]] (сокращение)",
              ru: "",
            },
            {
              en: "They had[[n't]] been maintaining the building for years before it collapsed.",
              ru: "Они не обслуживали здание годами до того, как оно рухнуло.",
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
            "Для того, чтобы задать общий вопрос в {{Past Perfect Continuous}}, необходимо первую часть комплексного вспомогательного глагола had вынести в начало предложения.",
        },
        {
          type: "examples",
          content: [
            {
              en: "[[Had]] you been working there long before you got promoted?",
              ru: "Ты долго там работал до повышения?",
            },
            {
              en: "[[Had]] they been living in London before they moved to Paris?",
              ru: "Они жили в Лондоне до переезда в Париж?",
            },
          ],
        },
        {
          type: "description",
          content:
            "Специальный вопрос в {{Past Perfect Continuous}} образуется с помощью вопросительного слова или фразы, которая ставится в самом начале предложения. Дальнейший порядок слов такой же, как в общем вопросе для {{Past Perfect Continuous}}.",
        },
        {
          type: "examples",
          content: [
            {
              en: "[[What had]] they been discussing before the meeting was cancelled?",
              ru: "Что они обсуждали до того, как встречу отменили?",
            },
            {
              en: "[[Where had]] you been hiding before they found you?",
              ru: "Где ты прятался до того, как тебя нашли?",
            },
            {
              en: "[[Why had]] you been crying before he came in?",
              ru: "Почему ты плакала до того, как он вошёл?",
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
            "{{Past Perfect Continuous}} используется для описания действия, которое началось в прошлом, длилось некоторое время и продолжало длиться до определённого момента в прошлом (или было прервано другим действием). Мы подчёркиваем длительность и процесс в прошлом до другого прошлого события.",
        },
        {
          type: "description",
          content:
            "Структура: {{Past Perfect Continuous}} (длительное действие до момента в прошлом) + {{for}} / {{since}}",
        },
        {
          type: "examples",
          content: [
            {
              en: "I [[had been]] wait[[ing]] for the bus [[for]] 30 minutes when it finally arrived.",
              ru: "Я ждал автобус 30 минут, когда он наконец приехал. (Начал ждать в прошлом, ждал 30 минут, и в момент прибытия автобуса ожидание всё ещё продолжалось)",
            },
            {
              en: "She [[had been]] work[[ing]] at the company [[for]] five years before she got promoted.",
              ru: "Она проработала в компании пять лет, прежде чем получила повышение.",
            },
            {
              en: "They [[had been]] liv[[ing]] in that house [[since]] 2010 when the fire broke out.",
              ru: "Они жили в том доме с 2010 года, когда начался пожар.",
            },
          ],
        },
      ],
    },

    {
      title: "Причина или объяснение состояния в прошлом",
      blocks: [
        {
          type: "description",
          content:
            "{{Past Perfect Continuous}} используется, чтобы объяснить причину состояния или ситуации в прошлом. Мы показываем, что предшествующее длительное действие привело к наблюдаемому результату.",
        },
        {
          type: "examples",
          content: [
            {
              en: "The ground was wet. It had been raining all night.",
              ru: "Земля была мокрая. Дождь шёл всю ночь. (Дождь шёл до того, как мы увидели мокрую землю)",
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
          type: "note",
          content: {
            title: "Отличие от {{Past Perfect}}:",
            content:
              "{{Past Perfect}} подчёркивает факт завершения действия до другого прошлого действия. Past Perfect Continuous подчёркивает длительность и процесс, которые привели к результату.",
            examples: [
              {
                en: "I had finished my homework by 8 p.m.",
                ru: "Я закончил домашнюю работу к 8 вечера. (Важен факт: работа сделана, результат есть)",
              },
              {
                en: "I had been doing my homework for two hours when you called.",
                ru: "Я делал домашнюю работу два часа, когда ты позвонил. (Важна длительность: два часа процесса)",
              },
            ],
          },
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
            "{{Past Perfect Continuous}} используется, чтобы показать, что длительное действие в прошлом было прервано другим (обычно коротким) действием. Длительное действие происходило до прерывания, а возможно, и продолжалось после него.",
        },
        {
          type: "examples",
          content: [
            {
              en: "I [[had been sleeping]] for two hours when the phone [[rang]].",
              ru: "Я спал два часа, когда зазвонил телефон. (Длительное действие — сон; прерывающее действие — звонок)",
            },
            {
              en: "She [[had been cooking]] dinner when she [[cut]] her finger.",
              ru: "Она готовила ужин, когда порезала палец.",
            },
            {
              en: "They [[had been driving]] for hours when they [[realized]] they were lost. ",
              ru: " Они ехали несколько часов, когда поняли, что заблудились.",
            },
            {
              en: "He [[had been talking]] on the phone when the boss [[walked]] in.",
              ru: "Он разговаривал по телефону, когда вошёл начальник.",
            },
          ],
        },
        {
          type: "note",
          content: {
            title: "Отличие от {{Past Continuous}}:",
            content:
              "{{Past Continuous}} показывает, что действие происходило в момент прерывания, но не подчёркивает, как долго оно длилось до этого. {{Past Perfect Continuous}} добавляет информацию о продолжительности.",
            examples: [
              {
                en: "I was sleeping when the phone rang.",
                ru: "Я спал, когда зазвонил телефон. (Мы знаем, что я спал в момент звонка, но не знаем, как долго)",
              },
              {
                en: "I had been sleeping for two hours when the phone rang.",
                ru: "Я спал два часа, когда зазвонил телефон. (Мы знаем, что я спал именно два часа до звонка)",
              },
            ],
          },
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
            "{{Past Perfect Continuous}} может описывать действие, которое длилось до определённого момента в прошлом и завершилось перед этим моментом, но при этом важна именно продолжительность действия.",
        },
        {
          type: "examples",
          content: [
            {
              en: "By the time he [[joined]] the company, she [[had been working]] there for ten years.",
              ru: "К тому моменту, как он пришёл в компанию, она проработала там уже десять лет. (Возможно, она всё ещё работала, а возможно, уже уволилась — акцент на продолжительности опыта)",
            },
            {
              en: "When they [[sold]] the house, they [[had been living]] in it for 20 years.",
              ru: "Когда они продали дом, они прожили в нём 20 лет.",
            },
            {
              en: "By 2015, he [[had been teaching]] at the university for 15 years. ",
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
            "Как и {{Present Perfect Continuous}} с {{always}}, {{Past Perfect Continuous}} может выражать повторяющиеся действия в прошлом, которые происходили до определённого момента, часто с оттенком раздражения или неодобрения.",
        },
        {
          type: "examples",
          content: [
            {
              en: "He [[had been]] constantly complain[[ing]] about his salary before he finally quit.",
              ru: "Он постоянно жаловался на свою зарплату, прежде чем наконец уволился.",
            },
            {
              en: "She [[had been]] always arriv[[ing]] late, so the manager fired her.",
              ru: "Она всегда опаздывала, поэтому менеджер уволил её.",
            },
            {
              en: "They [[had been]] repeatedly ask[[ing]] for help, but nobody listened.",
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
        "until – до (только в отрицательных предложениях)",
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
};
