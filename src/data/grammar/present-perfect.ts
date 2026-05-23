import type { GrammarTopic } from "../grammar/grammar";
export const presentPerfect: GrammarTopic = {
  id: "present-perfect",
  title: "Present Perfect",
  titleRu: "Настоящее совершенное время",
  conjugationTable: {
    rows: [
      {
        affirmative: "I [[have]] work[[ed]].",
        negative: "I [[haven't]] work[[ed]].",
        question: "[[Have]] I work[[ed]]?",
        translationAffirmative: "Я (уже) поработал.",
        translationNegative: "Я не работал.",
        translationQuestion: "Работал ли я?",
      },
      {
        affirmative: "She [[has]] work[[ed]].",
        negative: "She [[hasn't]] work[[ed]].",
        question: "[[Has]] she work[[ed]]?",
        translationAffirmative: "Она поработала.",
        translationNegative: "Она не работала.",
        translationQuestion: "Работала ли она?",
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
            "Утвердительное предложение в {{Present Perfect}} образуется с помощью вспомогательного глагола {{have}} или {{has}} и формы {{Past Participle}} (третьей формы смыслового глагола).",
        },
        {
          type: "description",
          content:
            "{{Past Participle}} для правильных глаголов образуется добавлением к их первой форме окончания {{-ed}}. Для неправильных глаголов берется его {{третья форма}} из таблицы неправильных глаголов.",
        },
        {
          type: "description",
          content:
            "В зависимости от лица и числа, в котором стоит подлежащее, используется та или иная форма вспомогательного глагола.",
        },
        {
          type: "description",
          content:
            "I, We, You, They → {{have}} (для 1-го, 2-го лица и форм множественного числа. \nHe, She, It → {{has}} (для 3-го лица единственного числа)",
        },
        {
          type: "examples",
          content: [
            {
              en: "I [[have]] already [[sent]] the documents to your email.",
              ru: "Я уже отправил документы на твою почту.",
            },
            {
              en: "He [[has]] promis[[ed]] to call me as soon as he arrives.",
              ru: "Он пообещал позвонить мне, как только приедет.",
            },
            {
              en: "You [[have made]] a very good impression on my parents.",
              ru: "Ты произвёл очень хорошее впечатление на моих родителей.",
            },
          ],
        },
        {
          type: "description",
          content: "В {{Present Perfect}} используются следующие сокращения:",
        },
        {
          type: "examples",
          layout: "double",
          content: [
            {
              en: "I have = I’[[ve]]",
              ru: "",
            },
            {
              en: "You have = You’[[ve]]",
              ru: "",
            },
            {
              en: "We have = We’[[ve]]",
              ru: "",
            },
            {
              en: "They have = They’[[ve]]",
              ru: "",
            },
            {
              en: "He has = He’[[s]]",
              ru: "",
            },
            {
              en: "She has = She’[[s]]",
              ru: "",
            },
            {
              en: "It has = It’[[s]]",
              ru: "",
            },
          ],
        },
        {
          type: "description",
          content:
            "Правила добавления окончания {{-ed}} рассмотрены в другой теме.",
        },
        {
          type: "examples",
          layout: "double",
          content: [
            {
              en: "to work → work[[ed]]",
              ru: "",
            },
            {
              en: "to translat[[e]] → translat[[ed]]",
              ru: "",
            },
            {
              en: "to agr[[ee]] → agree[[d]]",
              ru: "",
            },
            {
              en: "to stud[[y]] → stud[[i]]ed",
              ru: "",
            },
            {
              en: "to pla[[y]] → pla[[y]]ed",
              ru: "",
            },
            {
              en: "to sto[[p]] → sto[[pp]]ed",
              ru: "",
            },
            {
              en: "to rela[[x]] → rela[[x]]ed",
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
            "В отрицательном предложении в {{Present Perfect}} после вспомогательного глагола {{have}} или {{has}} добавляется отрицательная частица {{not}}.",
        },
        {
          type: "examples",
          content: [
            {
              en: "I [[have not]] receiv[[ed]] any confirmation from them yet.",
              ru: "Я не получил никакого подтверждения от них.",
            },
            {
              en: "He [[has not]] repli[[ed]] to my last three messages.",
              ru: "Он не ответил на мои три последних сообщения.",
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
              en: "I [[haven't heard]] this song before.",
              ru: "Я не слышал эту песню раньше.",
            },
            {
              en: "He [[hasn't called]] his mother for weeks.",
              ru: "Он не звонил своей матери несколько недель.",
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
            "Общий вопрос в {{Present Perfect}} образуется вынесением вспомогательного глагола {{have}} или {{has}} в начало предложения перед подлежащим.",
        },
        {
          type: "examples",
          content: [
            {
              en: "[[Have]] I [[made]] myself clear?",
              ru: "Я понятно выразился?",
            },
            {
              en: "[[Have]] they receiv[[ed]] the package yet?",
              ru: "Они уже получили посылку?",
            },
            {
              en: "[[Has]] he call[[ed]] you back?",
              ru: "Он перезвонил тебе?",
            },
          ],
        },
        {
          type: "description",
          content:
            "{{Специальный вопрос}} в {{Present Perfect}} образуется с помощью вопросительного слова или фразы, которая ставится в самом начале предложения. Дальнейший порядок слов такой же, как в обычном вопросе для {{Present Perfect}}.",
        },
        {
          type: "examples",
          content: [
            {
              en: "[[What have]] you done with my phone?",
              ru: "Что ты сделал с моим телефоном?",
            },
            {
              en: "[[Where has]] he been all this time?",
              ru: "Где он был всё это время?",
            },
            {
              en: "[[Why have]] you changed your mind?",
              ru: "Почему ты передумал?",
            },
          ],
        },
      ],
    },
    {
      title: "Завершенные действия с акцентом на результат",
      blocks: [
        {
          type: "description",
          content:
            "{{Present Perfect}} используется для описания действия, которое произошло в прошлом, но результат этого действия важен или виден в настоящем моменте. Нам не важно, когда именно произошло действие — важен его результат сейчас.",
        },
        {
          type: "examples",
          content: [
            {
              en: "I [[have lost]] my keys.",
              ru: "Я потерял свои ключи. (Результат: сейчас я не могу открыть дверь)",
            },
            {
              en: "She [[has]] finish[[ed]] her homework.",
              ru: "Она закончила домашнюю работу. (Результат: сейчас она свободна)",
            },
            {
              en: "They [[have bought]] a new car.",
              ru: "Они купили новую машину. (Результат: сейчас у них есть новая машина)",
            },
          ],
        },
      ],
    },
    {
      title: "Незавершенные действия",
      blocks: [
        {
          type: "description",
          content:
            "{{Present Perfect}} используется для описания действий или состояний, которые начались в прошлом и всё ещё продолжаются в настоящем (не завершились). В этом значении часто используются предлоги {{for}} (в течение) и {{since}} (с какого-то момента).",
        },
        {
          type: "examples",
          content: [
            {
              en: "I have lived in this city [[for]] ten years.",
              ru: "Я живу в этом городе уже десять лет. (начал 10 лет назад и всё ещё живу)",
            },
            {
              en: "She has worked at the company [[since]] 2015.",
              ru: "Она работает в компании с 2015 года. (начала в 2015 и всё ещё работает)",
            },
            {
              en: "We have known each other [[since]] childhood. ",
              ru: "Мы знаем друг друга с детства.",
            },
          ],
        },
      ],
    },
    {
      title: "Жизненный опыт",
      blocks: [
        {
          type: "description",
          content:
            "{{Present Perfect}} используется для описания опыта, который человек приобрёл (или не приобрёл) в своей жизни за какой-то период. Важен сам факт наличия или отсутствия опыта, а не точное время.",
        },
        {
          type: "examples",
          content: [
            {
              en: "I [[have been]] to Paris.",
              ru: "Я был в Париже. (важен опыт, а не когда именно)",
            },
            {
              en: "She [[has]] never tri[[ed]] sushi.",
              ru: "Она никогда не пробовала суши.",
            },
            {
              en: "[[Have]] you ever [[seen]] a ghost?",
              ru: "Ты когда-нибудь видел привидение?",
            },
          ],
        },
      ],
    },

    {
      title: "Изменение или развитие ситуации с течением времени",
      blocks: [
        {
          type: "description",
          content:
            "{{Present Perfect}} используется для описания изменений, которые произошли в течение некоторого периода времени. Мы смотрим на ситуацию в прошлом и в настоящем и видим разницу.",
        },
        {
          type: "examples",
          content: [
            {
              en: "You [[have grown]] since the last time I saw you.",
              ru: "Ты вырос с тех пор, как я видел тебя в последний раз.",
            },
            {
              en: "The city [[has]] chang[[ed]] a lot in the last ten years.",
              ru: "Город сильно изменился за последние десять лет.",
            },
            {
              en: "My English [[has]] improv[[ed]] significantly.",
              ru: "Мой английский значительно улучшился.",
            },
          ],
        },
      ],
    },
    {
      title: "Недавние события с just, already, yet",
      blocks: [
        {
          type: "description",
          content:
            "{{Present Perfect}} используется с наречиями {{just}} (только что), {{already}} (уже) и {{yet}} (ещё / уже — в вопросах и отрицаниях) для описания действий, которые произошли недавно или раньше ожидаемого.",
        },
        {
          type: "examples",
          content: [
            {
              en: "I have [[just]] finished my work.",
              ru: "Я только что закончил свою работу.",
            },
            {
              en: "She has [[already]] eaten lunch.",
              ru: "Она уже пообедала.",
            },
            {
              en: "Have you done your homework [[yet]]?",
              ru: "Ты уже сделал домашнюю работу?",
            },
            {
              en: "They haven't arrived [[yet]].",
              ru: "Они ещё не прибыли.",
            },
          ],
        },
      ],
    },
    {
      title: "Достижения и рекорды",
      blocks: [
        {
          type: "description",
          content:
            "{{Present Perfect}} используется для объявления о достижениях, рекордах или важных событиях, которые произошли в жизни человека или человечества, без указания конкретной даты.",
        },
        {
          type: "examples",
          content: [
            {
              en: "Scientists [[have]] discover[[ed]] a new cure for malaria.",
              ru: "Учёные обнаружили новое лекарство от малярии.",
            },
            {
              en: "She [[has won]] three Olympic gold medals.",
              ru: "Она выиграла три олимпийские золотые медали.",
            },
            {
              en: "He [[has written]] over 50 novels.",
              ru: "Он написал более 50 романов.",
            },
            {
              en: "We [[have]] reach[[ed]] the highest peak of the mountain.",
              ru: "Мы достигли самой высокой вершины горы.",
            },
          ],
        },
      ],
    },
    {
      title:
        "Новости (Present Perfect) + детали (Past Simple / Past Continuous)",
      blocks: [
        {
          type: "description",
          content:
            "Когда мы сообщаем новость, мы используем {{Present Perfect}}, чтобы объявить о событии. Затем, чтобы дать дополнительные детали (когда, где, как это произошло), мы переходим на {{Past Simple}} или {{Past Continuous}}.",
        },
        {
          type: "examples",
          content: [
            {
              en: "A: [[Have]] you [[heard]]? John [[has broken]] his leg!",
              ru: "Ты слышал? Джон сломал ногу!",
            },
            {
              en: "B: Oh no! How [[did]] it happen?",
              ru: "О нет! Как это случилось?",
            },
            {
              en: "A: He [[was]] ski[[ing]] in the Alps when he [[lost]] control and hit a tree.",
              ru: "Он катался на лыжах в Альпах, когда потерял управление и врезался в дерево.",
            },
          ],
        },
        {
          type: "examples",
          content: [
            {
              en: "There [[has been]] a terrible accident on the highway. A truck [[was]] try[[ing]] to overtake another vehicle in the fog, and it crash[[ed]] into a bus.",
              ru: "Произошла ужасная авария на трассе. Грузовик пытался обогнать другую машину в тумане и врезался в автобус.",
            },
          ],
        },
      ],
    },
    {
      title:
        "Неопределённое время в прошлом с вопросами How many / How much / Ever",
      blocks: [
        {
          type: "description",
          content:
            "{{Present Perfect}} используется, когда мы спрашиваем о количестве или факте совершения действия за весь период времени, не уточняя, когда именно это произошло.",
        },
        {
          type: "examples",
          content: [
            {
              en: "[[How many]] books have you read this year?",
              ru: "Сколько книг ты прочитал в этом году?",
            },
            {
              en: "[[How many]] times have you been to Italy? ",
              ru: "Сколько раз ты был в Италии?",
            },
            {
              en: "Have you [[ever]] heard such a strange story? ",
              ru: "Ты когда-нибудь слышал такую странную историю?",
            },
          ],
        },
        {
          type: "note",
          content: {
            title:
              "Акцент на количество (Present Perfect) vs акцент на длительность (Present Perfect Continuous)",
            content:
              "{{Present Perfect}} используется, чтобы подчеркнуть {{количество}} выполненных действий (сколько раз / сколько штук). {{Present Perfect Continuous}} используется, чтобы подчеркнуть {{длительность}} действия (как долго оно продолжалось), часто с акцентом на процесс, а не на результат.",
            examples: [
              {
                en: "I have read three books this week.",
                ru: "Я прочитал три книги на этой неделе.",
              },
              {
                en: "I have been reading for three hours. ",
                ru: "Я читаю три часа.",
              },
            ],
          },
        },
      ],
    },
  ],
  timeMarkers: [
    {
      markers: [
        "ever – когда либо",
        "never – никогда",
        "already – уже",
        "yet – еще, уже",
        "not yet – еще нет",
        "often – часто",
        "so far – пока, до сих пор",
        "lately – последнее время",
        "just – только что",
        "recently – недавно, на днях",
        "once – однажды",
        "many times – много раз",
        "several times – несколько раз",
        "before – раньше, прежде",
        "today – сегодня",
      ],
      spaceAfter: true,
    },
    {
      markers: [
        "this week – на этой неделе",
        "this month – в этом месяце",
        "this year – в этом году",
        "this afternoon – сегодня днем",
      ],
      spaceAfter: true,
    },
    {
      markers: [
        "for an hour – в течение часа",
        "for two weeks – на протяжении двух недель",
        "for a long time – долгое время",
      ],
      spaceAfter: true,
    },
    {
      markers: [
        "since twelve o’clock – с двенадцати часов",
        "since 12 April – с 12 апреля",
        "since May – с мая",
      ],
      spaceAfter: true,
    },
  ],
};
