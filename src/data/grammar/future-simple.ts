import type { GrammarTopic } from "../grammar/grammar";
//готово
export const futureSimple: GrammarTopic = {
  id: "future-simple",
  title: "Future Simple",
  titleRu: "Будущее простое время",
  conjugationTable: {
    rows: [
      {
        affirmative: "I [[shall]] work tomorrow.",
        negative: "I [[shall not]] work tomorrow.",
        question: "[[Shall]] I work tomorrow?",
        translationAffirmative: "Я буду работать завтра.",
        translationNegative: "Я не буду работать завтра.",
        translationQuestion: "Я буду работать завтра?",
      },
      {
        affirmative: "They [[will]] work tomorrow.",
        negative: "They [[will not]] work tomorrow.",
        question: "[[Will]] they work tomorrow?",
        translationAffirmative: "Они будут работать завтра.",
        translationNegative: "Они не будут работать завтра.",
        translationQuestion: "Они будут работать завтра?",
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
            "Future Simple (Future Indefinite) образуется c помощью вспомогательного глагола will или shall и простого инфинитива без частицы to в активном или же пассивном залоге. Глагол to be (am, is, are) в будущем времени приобретает форму will be (реже shall be). ",
        },
        {
          type: "description",
          content:
            "Will в современном английском используется со всеми числами и лицами. Shall используется только с первым лицом I, We (устаревшее употребление).",
        },
        {
          type: "description",
          content:
            "В современном английском со всеми числами и лицами используется только will и это не является ошибкой. Но shall еще можно встретить в газетах, старых текстах или текстах при собеседовании на работу, при поступлении в учебное учреждение, в художественной литературе.",
        },
        {
          type: "examples",
          content: [
            {
              en: "I shall go for a walk tomorrow. ",
              ru: " Завтра я пойду на прогулку.",
            },
            {
              en: "My husband will buy this ring for me.",
              ru: "Мой муж купит мне это кольцо.",
            },
            {
              en: "We will find your key tomorrow. ",
              ru: "Мы найдем твои ключи завтра.",
            },
            {
              en: "The project will be presented next week.",
              ru: "Проект будет представлен на следующей неделе.",
            },
          ],
        },
        {
          type: "examples",
          content: [
            {
              en: "I shall go for a walk tomorrow. ",
              ru: " Завтра я пойду на прогулку.",
            },
            {
              en: "My husband will buy this ring for me.",
              ru: "Мой муж купит мне это кольцо.",
            },
            {
              en: "We will find your key tomorrow. ",
              ru: "Мы найдем твои ключи завтра.",
            },
            {
              en: "The project will be presented next week.",
              ru: "Проект будет представлен на следующей неделе.",
            },
          ],
        },
        {
          type: "examples",
          content: [
            {
              en: "shall = ‘ll (сокращение)",
              ru: "",
            },
            {
              en: "I’ll go to the cinema next week. ",
              ru: "На следующей неделе я пойду в кино.",
            },
            {
              en: "We will find your key tomorrow. ",
              ru: "Мы найдем твои ключи завтра.",
            },
          ],
        },
        {
          type: "examples",
          content: [
            {
              en: "will = ‘ll",
              ru: "",
            },
            {
              en: "He’ll fly to Paris next winter. ",
              ru: "Он полетит в Париж следующей зимой.",
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
            "В отрицательном предложении в Future Simple добавляется отрицательная частица not после вспомогательного глагола will или shall.",
        },
        {
          type: "examples",
          content: [
            {
              en: "I will not go for a walk tomorrow.",
              ru: "Я не пойду завтра на прогулку.",
            },
            {
              en: "My husband will not buy this ring for me. ",
              ru: "Мой муж не купит мне это кольцо.",
            },
            {
              en: "We will not find your key tomorrow. ",
              ru: "Мы не найдем твой ключ завтра.",
            },
            {
              en: "The project will not be presented next week ",
              ru: "Проект не будет представлен на следующей неделе.",
            },
          ],
        },
        {
          type: "examples",
          content: [
            {
              en: "will not = won’t",
              ru: "",
            },
            {
              en: "She won’t go to the cinema.",
              ru: "Она не пойдёт в кино.",
            },
          ],
        },
        {
          type: "examples",
          content: [
            {
              en: "shall not = shan’t",
              ru: "",
            },
            {
              en: "I shan’t work there.",
              ru: " Я не буду там работать.",
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
            "Образование общего вопроса в Future Simple происходит с помощью вынесения вспомогательного глагола will или shall в начало предложения перед подлежащим.",
        },
        {
          type: "examples",
          content: [
            {
              en: "Will I go for a walk tomorrow? ",
              ru: " Я пойду завтра на прогулку?",
            },
            {
              en: "Will my husband buy this ring for me? ",
              ru: "Мой муж купит мне это кольцо?",
            },
            {
              en: "Will we find your key tomorrow?",
              ru: "Мы найдем твой ключ завтра?",
            },
            {
              en: "Will the project be presented next week?",
              ru: " Будет ли проект представлен на следующей неделе?",
            },
          ],
        },
        {
          type: "description",
          content:
            "Специальный вопрос в Future Simple образуется с помощью вопросительного слова или фразы, которая ставится в самом начале предложения. Дальнейший порядок слов такой же, как в общем вопросе для Future Simple.",
        },
        {
          type: "examples",
          content: [
            {
              en: "Where will I go tomorrow?",
              ru: "Куда я завтра пойду?",
            },
            {
              en: "What will my husband buy for me?",
              ru: "Что купит мне мой муж?",
            },
            {
              en: "When will we find your key? ",
              ru: "Когда мы найдем твой ключ?",
            },
            {
              en: "Why will the project be presented next week.",
              ru: "Почему проект будет представлен на следующей неделе?",
            },
          ],
        },
      ],
    },
    {
      title: "Общее будущее",
      blocks: [
        {
          type: "description",
          content:
            "Future Simple используется для описания единичных, повторяющихся или последовательных действий в будущем.",
        },
        {
          type: "examples",
          content: [
            {
              en: "He will come here tomorrow.",
              ru: "Он придет сюда завтра.",
            },
            {
              en: "I will run every morning next summer. ",
              ru: "Следующим летом я буду бегать каждое утро.",
            },
            {
              en: "They will go to the cinema, buy some snacks, and watch good movie next Monday. ",
              ru: "Они пойдут в кино, купят что-то перекусить и будут смотреть хороший фильм в следующий понедельник.",
            },
          ],
        },
      ],
    },
    {
      title: "Спонтанные решения",
      blocks: [
        {
          type: "description",
          content:
            "Future Simple используется для описания решений, которые принимаются в момент речи, без предварительного обдумывания или планирования. Говорящий не знал заранее, что сделает это действие.",
        },
        {
          type: "examples",
          content: [
            {
              en: "The phone is ringing. – I will answer it.",
              ru: "– Телефон звонит. – Я отвечу. (решение принято прямо сейчас)",
            },
            {
              en: "I'm thirsty. – I will get you a glass of water.",
              ru: "– Я хочу пить. – Я принесу тебе стакан воды.",
            },
            {
              en: "I don't understand this exercise. – Don't worry, I will help you. ",
              ru: "– Я не понимаю это упражнение. – Не волнуйся, я помогу тебе.",
            },
          ],
        },
      ],
    },
    {
      title: "Прогнозы, предсказания и предположения",
      blocks: [
        {
          type: "description",
          content:
            "Future Simple используется для высказывания мнения о том, что произойдёт в будущем, когда мы не имеем точных доказательств, а просто предполагаем, верим или догадываемся.",
        },
        {
          type: "examples",
          content: [
            {
              en: "I think it will rain tomorrow.",
              ru: "Я думаю, завтра будет дождь.",
            },
            {
              en: "She will probably come to the party.",
              ru: "Она, вероятно, придёт на вечеринку.",
            },
            {
              en: "Perhaps they will arrive late.",
              ru: "Возможно, они прибудут поздно.",
            },
          ],
        },
        {
          type: "description",
          content:
            "Важно: Если у нас есть наглядное доказательство прямо сейчас (например, небо затянуто тучами), лучше использовать be going to: Look at those clouds! It is going to rain. Future Simple остаётся для чистых предположений без опоры на видимые факты.",
        },
      ],
    },
    {
      title: "Обещания, опасения, надежды",
      blocks: [
        {
          type: "description",
          content:
            "Future Simple используется для выражения обещаний, описаний и надежд связанных с будущем. Часто в предложении это время используется со словами: promise (обещать), swear (клясться), guarantee (гарантировать), hope (надеяться), threat (угрожать), warn (предупреждать), request (просить, запрашивать), offer (предлагать).",
        },
        {
          type: "examples",
          content: [
            {
              en: "If you do that again, I will tell your parents. ",
              ru: "Если ты сделаешь это снова, я расскажу твоим родителям.",
            },
            {
              en: "We will pay you back by Friday.",
              ru: "Мы вернём вам деньги к пятнице.",
            },
            {
              en: "We hope he will enter the university. ",
              ru: "Мы надеемся, что он поступит в университет.",
            },
            {
              en: "She swears she will come home in time.",
              ru: "Она клянется, что будет дома вовремя.",
            },
          ],
        },
      ],
    },
    {
      title: "Факты о будущем, которые неизбежные",
      blocks: [
        {
          type: "description",
          content:
            "Future Simple используется для описания событий, которые обязательно произойдут в будущем вне зависимости от наших желаний или планов. Это могут быть возрастные изменения, природные явления, законы времени.",
        },
        {
          type: "examples",
          content: [
            {
              en: "I will be 30 years old next month.",
              ru: "Мне исполнится 30 лет в следующем месяце.",
            },
            {
              en: "We will all die one day. ",
              ru: "Мы все однажды умрём.",
            },
            {
              en: "The dawn will come soon. ",
              ru: " Скоро наступит рассвет.",
            },
          ],
        },
      ],
    },
    {
      title: "Предложения, просьбы и приглашения",
      blocks: [
        {
          type: "description",
          content:
            "Future Simple используется в вежливых формах для предложения помощи, выражения просьбы или отправки приглашения.",
        },
        {
          type: "examples",
          content: [
            {
              en: "I will open the window for you.",
              ru: " Открыть окно?",
            },
            {
              en: "That bag looks heavy. I will carry it for you.",
              ru: "Та сумка выглядит тяжёлой. Я помогу её донести.",
            },
            {
              en: "Will you please pass me the salt?",
              ru: "Ты не передашь мне соль, пожалуйста?",
            },
            {
              en: "Will you dance with me?",
              ru: "Ты потанцуешь со мной?",
            },
          ],
        },
      ],
    },
    {
      title: "Отказ от выполнения действия",
      blocks: [
        {
          type: "description",
          content:
            "В отрицательной форме won't (will not) Future Simple может выражать отказ что-либо делать в настоящем или будущем. Это значение близко к упрямству или нежеланию.",
        },
        {
          type: "examples",
          content: [
            {
              en: "I won't go to bed! ",
              ru: "Я не пойду спать! (ребёнок отказывается)",
            },
            {
              en: "He won't tell me the secret.",
              ru: "Он не рассказывает мне секрет / отказывается рассказать.",
            },
            {
              en: "The car won't start.",
              ru: "Машина не заводится (отказывается заводиться).",
            },
          ],
        },
      ],
    },
  ],
  timeMarkers: [
    {
      markers: [
        "tomorrow – завтра",
        "the day after tomorrow – послезавтра",
        "tonight – вечером",
        "soon – скоро",
        "as soon as – как только",
        "later – позже",
      ],
      spaceAfter: true,
    },
    {
      markers: [
        "next week – на следующей неделе",
        "next month – в следующем месяце",
        "next year – в следующем году",
        "next century – в следующем столетии",
      ],
      spaceAfter: true,
    },
    {
      markers: [
        "in a week – через неделю",
        "in a month – через месяц",
        "in three year – через три года",
        "in two days – через два дня",
        "in one of these days – в один из этих дней",
      ],
      spaceAfter: true,
    },
  ],
  notes: [],
};
