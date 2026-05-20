import type { GrammarTopic } from "../grammar/grammar";
//готово
export const presentPerfect: GrammarTopic = {
  id: "present-perfect",
  title: "Present Perfect",
  titleRu: "Настоящее совершенное время",
  conjugationTable: {
    rows: [
      {
        affirmative: "I have worked.",
        negative: "I [[was not]] working at 5pm yesterday.",
        question: "Have I worked?",
        translationAffirmative: "Я (уже) поработал.",
        translationNegative: "Я не работал.",
        translationQuestion: "Работал ли я?",
      },
      {
        affirmative: "She has worked.",
        negative: "She hasn't worked.",
        question: "Has she worked?",
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
            "Утвердительное предложение в Present Perfect образуется с помощью вспомогательного глагола have или has и формы Past Participle (третьей формы смыслового глагола).",
        },
        {
          type: "description",
          content:
            "Past Participle для правильных глаголов образуется добавлением к их первой форме окончания -ed. Для неправильных глаголов берется его третья форма из таблицы неправильных глаголов.",
        },
        {
          type: "description",
          content:
            "В зависимости от лица и числа, в котором стоит подлежащее, используется та или иная форма вспомогательного глагола",
        },
        {
          type: "description",
          content:
            "I, We, You, They → have (для 1-го, 2-го лица и форм множественного числа. He, She, It → has (для 3-го лица единственного числа)",
        },
        {
          type: "examples",
          content: [
            {
              en: "I have dug a hole for planting trees.",
              ru: " Я выкопал яму для посадки деревьев.",
            },
            {
              en: "He has just finished his first book.",
              ru: "Он только что закончил свою первую книгу.",
            },
            {
              en: "We have bought all the furniture.",
              ru: " Мы купили всю мебель.",
            },
          ],
        },
        {
          type: "description",
          content: "В Present Perfect используются следующие сокращения:",
        },
        {
          type: "examples",
          content: [
            {
              en: "I have = I’ve",
              ru: "",
            },
            {
              en: "You have = You’ve",
              ru: "",
            },
            {
              en: "We have = We’ve",
              ru: "",
            },
            {
              en: "They have = They’ve",
              ru: "",
            },
            {
              en: "He has = He’s",
              ru: "",
            },
            {
              en: "She has = She’s ",
              ru: "",
            },
            {
              en: "It has = It’s",
              ru: "",
            },
          ],
        },
        {
          type: "description",
          content:
            "Правила добавления окончания -ed рассмотрены в другой теме.",
        },
        {
          type: "examples",
          content: [
            {
              en: "to work → worked",
              ru: "",
            },
            {
              en: "to translate → translated",
              ru: "",
            },
            {
              en: "to agree → agreed",
              ru: "",
            },
            {
              en: "to study → studied",
              ru: "",
            },
            {
              en: "to play → played",
              ru: "",
            },
            {
              en: "to stop → stopped",
              ru: "",
            },
            {
              en: "to relax → relaxed",
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
            "В отрицательном предложении в Present Perfect после вспомогательного глагола have или has добавляется отрицательная частица not.",
        },
        {
          type: "examples",
          content: [
            {
              en: "I have not dug a hole.",
              ru: " Я не выкопал яму.",
            },
            {
              en: "He has not finished his first book. ",
              ru: "Он не закончил свою первую книгу.",
            },
          ],
        },
        {
          type: "examples",
          content: [
            {
              en: "have not = haven’t (сокращение)",
              ru: "",
            },
            {
              en: "We haven’t bought all the furniture. ",
              ru: "Мы не купили всю мебель.",
            },
          ],
        },
        {
          type: "examples",
          content: [
            {
              en: "has not = hasn’t)",
              ru: "",
            },
            {
              en: "Kate hasn’t been to Paris yet.",
              ru: "Кейт еще не была в Париже.",
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
            "Общий вопрос в Present Perfect образуется вынесением вспомогательного глагола have или has в начало предложения перед подлежащим.",
        },
        {
          type: "examples",
          content: [
            {
              en: "Have I dug a hole? ",
              ru: " Я выкопал яму?",
            },
            {
              en: "Have we bought all the furniture? ",
              ru: " Мы купили всю мебель?",
            },
            {
              en: "Has he just finished his first book? ",
              ru: "Он только что закончил свою первую книгу?",
            },
          ],
        },
        {
          type: "description",
          content:
            "Специальный вопрос в Present Perfect образуется с помощью вопросительного слова или фразы, которая ставится в самом начале предложения. Дальнейший порядок слов такой же, как в обычном вопросе для Present Perfect.",
        },
        {
          type: "examples",
          content: [
            {
              en: "What has he just finished?",
              ru: "Что он только что закончил?",
            },
            {
              en: "Where have we bought all the furniture?.",
              ru: " Где мы купили всю мебель?",
            },
            {
              en: "How deep have you dug a hole? ",
              ru: " Насколько глубокую яму ты выкопал?",
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
            "Present Perfect используется для описания действия, которое произошло в прошлом, но результат этого действия важен или виден в настоящем моменте. Нам не важно, когда именно произошло действие — важен его результат сейчас.",
        },
        {
          type: "examples",
          content: [
            {
              en: "I have lost my keys. ",
              ru: "Я потерял свои ключи. (результат: сейчас я не могу открыть дверь)",
            },
            {
              en: "She has finished her homework.",
              ru: "Она закончила домашнюю работу. (результат: сейчас она свободна)",
            },
            {
              en: "They have bought a new car.",
              ru: " Они купили новую машину. (результат: сейчас у них есть новая машина)",
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
            "Present Perfect используется для описания действий или состояний, которые начались в прошлом и всё ещё продолжаются в настоящем (не завершились). В этом значении часто используются предлоги for (в течение) и since (с какого-то момента).",
        },
        {
          type: "examples",
          content: [
            {
              en: "I have lived in this city for ten years.",
              ru: "Я живу в этом городе уже десять лет. (начал 10 лет назад и всё ещё живу)",
            },
            {
              en: "She has worked at the company since 2015.",
              ru: "Она работает в компании с 2015 года. (начала в 2015 и всё ещё работает)",
            },
            {
              en: "We have known each other since childhood. ",
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
            "Present Perfect используется для описания опыта, который человек приобрёл (или не приобрёл) в своей жизни за какой-то период. Важен сам факт наличия или отсутствия опыта, а не точное время.",
        },
        {
          type: "examples",
          content: [
            {
              en: "I have been to Paris.",
              ru: " Я был в Париже. (важен опыт, а не когда именно)",
            },
            {
              en: "She has never tried sushi.",
              ru: "Она никогда не пробовала суши.",
            },
            {
              en: "Have you ever seen a ghost?",
              ru: " Ты когда-нибудь видел привидение?",
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
            "Present Perfect используется для описания изменений, которые произошли в течение некоторого периода времени. Мы смотрим на ситуацию в прошлом и в настоящем и видим разницу.",
        },
        {
          type: "examples",
          content: [
            {
              en: "You have grown since the last time I saw you.",
              ru: "Ты вырос с тех пор, как я видел тебя в последний раз.",
            },
            {
              en: "The city has changed a lot in the last ten years.",
              ru: "Город сильно изменился за последние десять лет.",
            },
            {
              en: "My English has improved significantly.",
              ru: " Мой английский значительно улучшился.",
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
            "Present Perfect используется с наречиями just (только что), already (уже) и yet (ещё / уже — в вопросах и отрицаниях) для описания действий, которые произошли недавно или раньше ожидаемого.",
        },
        {
          type: "examples",
          content: [
            {
              en: "I have just finished my work.",
              ru: "Я только что закончил свою работу.",
            },
            {
              en: "She has already eaten lunch.",
              ru: "Она уже пообедала.",
            },
            {
              en: "Have you done your homework yet?",
              ru: " Ты уже сделал домашнюю работу?",
            },
            {
              en: "They haven't arrived yet. ",
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
            "Present Perfect используется для объявления о достижениях, рекордах или важных событиях, которые произошли в жизни человека или человечества, без указания конкретной даты.",
        },
        {
          type: "examples",
          content: [
            {
              en: "Scientists have discovered a new cure for malaria.",
              ru: "Учёные обнаружили новое лекарство от малярии.",
            },
            {
              en: "She has won three Olympic gold medals.",
              ru: "Она выиграла три олимпийские золотые медали..",
            },
            {
              en: "He has written over 50 novels.",
              ru: "Он написал более 50 романов.",
            },
            {
              en: "We have reached the highest peak of the mountain.",
              ru: "Мы достигли самой высокой вершины горы.",
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
            "Present Perfect используется, когда мы спрашиваем о количестве или факте совершения действия за весь период времени, не уточняя, когда именно это произошло.",
        },
        {
          type: "examples",
          content: [
            {
              en: "How many books have you read this year?",
              ru: "Сколько книг ты прочитал в этом году?",
            },
            {
              en: "How many times have you been to Italy? ",
              ru: "Сколько раз ты был в Италии?",
            },
            {
              en: "Have you ever heard such a strange story? ",
              ru: " Ты когда-нибудь слышал такую странную историю?",
            },
            {
              en: "She has answered all my questions.",
              ru: "Она ответила на все мои вопросы.",
            },
          ],
        },
      ],
    },
  ],
  timeMarkers: [
    {
      markers: [
        "ever – когда либо",
        "never – никогда",
        "already– уже",
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
        "since May – c мая",
      ],
      spaceAfter: true,
    },
  ],
  notes: [],
};
