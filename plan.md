# Wiki synth (рабочее название)

Продукт представляет собой телеграм бота, который синтезирует первые несколько предложений статьи 
википедии на тему, заданную пользователем.

схема работы бота:
- бот получает личное (в групповых чатах?) сообщение от пользователя в телеграме с текстом поиска
- бот выполняет поиск статьи в википедии (на русском языке) (добавить мультиязычность)
- если статья не найдена - бот отвечает пользователю "статья не найдена"
- если найдена - то первые 500 символов синтезируются с помощью яндекс спичкит в формат ogg
- полученный аудио файл отправляется пользователю в ответ



дополнительные фичи
- использование монгодб (для хранения истории запросов, для хранения настроек пользователя - язык, голос радостный/нейтральный + персона)
- групповые чаты
- переключение режима ответа бота (только аудио, только текст, аудио и текст)

## Планирование (этапы)

### Основная функциональность

- создать 2 телеграм бота, который всегда отвечает на сообщения "привет". протестировать
  - github репозиторий
  - deployment
  - бот для разработки
  - бот для прода
- интеграцию с википедией
  - полученное сообщение используется в качестве термина поиска в википедии
  - если статья найдена - бот отправляет в ответ пользователю первые 100 символов
  - если статья не найдена - бот отправляет ошибку
- синтез речи
  - интеграция с яндекс speechkit
  - реализовать отправку текста из википедии
  - обработать полученный ответ
    - при ошибке - вернуть ошибку
    - при успешном выполнении - отправить voice с озвучкой

### Дополнительная функциональность

- групповые чаты
  - тестирование (определение недостающих элементов)
- интеграция с базой данных для хранения настроек пользователя
  - история запросов
  - язык
  - персона
  - тональность голоса
  - режим ответа