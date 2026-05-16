export function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight dark:text-white">
          О проекте
        </h1>
        <p className="text-grey-400 dark:text-gray-400">
          Language Hub – это больше, чем просто сайт для изучения английского
          языка
        </p>
      </div>

      <hr className="border-t border-gray-200 dark:border-gray-700 my-6" />

      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-3 dark:text-white flex items-center gap-2">
            Что такое Language Hub?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Language Hub – это pet-проект, который родился из личной
            потребности. Простыми словами – это проект, который делается в
            первую очередь для саморазвития. Здесь я соединила любовь к языкам и
            желание прокачать навыки веб-разработки.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 dark:text-white flex items-center gap-2">
            История создания
          </h2>
          <div className="space-y-3 text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              Я училась 6 лет на филологическом факультете, изучала языки,
              вникала в тонкости, грызла гранит науки. И после окончания
              университета решила... сменить профиль. А как иначе.
            </p>
            <p>
              Я всегда любила языки и продолжаю их изучать. Но меня жутко
              раздражало, что для полноценного занятия нужно открыть 15 вкладок:
              на одной – классно объясняют грамматику, на другой – есть
              интересные упражнения, на третьей – зачетный словарь идиом и
              фразеологизмов, которые не отыщешь нигде больше, на четвёртой –
              тексты для чтения с удобным переводом и интерфейсом. А хотелось
              собрать всё в одном месте.
            </p>
            <p>
              Так появилась идея Language Hub. И хотя первая реализация в 2023
              году провалилась (мне не хватило ни терпения, ни навыков), но, как
              говорится, here we go again. Я решила убить двух зайцев одним
              выстрелом: создать удобный инструмент для изучения языка и
              одновременно прокачать свои навыки в веб-разработке. Надеюсь, что
              получается неплохо :)
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 dark:text-white flex items-center gap-2">
            Живой проект
          </h2>
          <div className="space-y-3 text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              Знаете, что меня всегда расстраивало в других сайтах? Они
              устаревают. Авторы пропадают. На письма никто не отвечает. Ошибки
              висят годами. А пользователи остаются с этим один на один.
            </p>
            <p>
              <strong>Language Hub – это живой проект</strong>.
            </p>
            <p>
              Я <strong>прислушиваюсь</strong> к вашим пожеланиям. Я{" "}
              <strong>исправляю</strong> свои ошибки. Каждый может внести свой
              вклад – написать о найденной опечатке или неточности, предложить
              контент или идею для раздела. Попросить создать то, чего не
              хватает именно вам.
            </p>
            <p>
              Внизу главной страницы есть почта. Пишите. Серьёзно. Я отвечаю
              всем. Потому что только вместе мы можем сделать действительно
              крутой и полезный ресурс.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 dark:text-white flex items-center gap-2">
            Мои цели
          </h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300 list-disc pl-5">
            <li>Создать максимально удобную платформу для изучения языков</li>
            <li>Собрать всё необходимое в одном месте</li>
            <li>Постоянно развиваться как разработчик и делать проект лучше</li>
            <li>
              Доказать, что даже один человек может сделать качественный и
              полезный продукт
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 dark:text-white flex items-center gap-2">
            Как помочь проекту?
          </h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300 list-disc pl-5">
            <li>Написать на почту об ошибке или предложении</li>
            <li>Поделиться идеей нового раздела или функции</li>
            <li>Рассказать о проекте друзьям и знакомым</li>
            <li>⭐ Поставить звёздочку на GitHub</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 dark:text-white flex items-center gap-2">
            Технологии для интересующихся
          </h2>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1   dark:bg-white dark:text-black rounded-md text-sm">
              React
            </span>
            <span className="px-3 py-1 dark:bg-white dark:text-black rounded-md text-sm">
              TypeScript
            </span>
            <span className="px-3 py-1 dark:bg-white dark:text-black rounded-md text-sm">
              Tailwind CSS
            </span>
            <span className="px-3 py-1 dark:bg-white dark:text-black rounded-md text-sm">
              Vite
            </span>
            <span className="px-3 py-1 dark:bg-white dark:text-black rounded-md text-sm">
              React Virtuoso
            </span>
            <span className="px-3 py-1 dark:bg-white dark:text-black rounded-md text-sm">
              Heroicons
            </span>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 dark:text-white flex items-center gap-2">
            Планы на будущее
          </h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300 list-disc pl-5">
            <li>Адаптировать сайт под мобильные устройства</li>
            <li>Сделать тренажёры для запоминания слов</li>
            <li>Добавить аудио-произношение для фраз и слов</li>
            <li>Развивать существующие разделы</li>
            <li>Добавить китайский язык, а может и не только его</li>
            <li>И ещё много всего интересного ✨</li>
          </ul>
        </section>

        <section className="pt-4">
          <div className="rounded-xl p-5 mb-5 bg-white dark:bg-grey-600 border border-grey-200 dark:border-grey-700 text-center">
            <p className="text-gray-700 dark:text-gray-300 italic">
              “Спасибо, что заглянули. Надеюсь, Language Hub станет для вас тем
              самым уютным уголком, где учить язык – одно удовольствие.”
            </p>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              – С любовью, создатель проекта - Elemmir ❤️
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
