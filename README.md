# Проект: Место

Проект, который содержит:
* автар пользователя,
* его имя и род занятий,
* а также красочную фотогалерею с указанием названиея каждой достопримечательности.

**Figma**

* Проект реализован на основании [макета в Figma](https://www.figma.com/file/2cn9N9jSkmxD84oJik7xL7/JavaScript.-Sprint-4?node-id=0%3A1)

**Картинки**

Все изображения, использованные в проекты, [были оптимизированы](https://tinypng.com/), чтобы сайт загружался быстрее.

**Использованные технологии**

При создании сайта  использованы *CSS Grid Layout, флексбокс-вёрстка, позиционирование, продвинутая семантика языка HTML, плавные переходы, шрифты, оптимизация растровых и векторных изображений*. Файловая структура проекта оформлена по правилам _Nested БЭМ_. В JavaScript-коде переиспользованы повторяющиеся функции, также использован метод работы с массивами "forEach", выполнена валидация форм средствами JavaScript. При выполнение седьмой проектной работы были созданы 2 класса: Card и FormValidator, которые импортируются в файл index.js. Создание карточек и валидация форм теперь выполняется при помощи создания экземпляров этих классов.

Сайт адаптирован для просмотра на следующих устройствах:
* от 1280 пикселей — от стандартных ноутбуков и до бесконечности,
* от 1050 и до 1280 — для небольших ноутбуков,
* от 768 и до 1050 пикселей — от вертикального до горизонтального положения планшета,
* от 425 и до 768 пикселей — от большого смартфона до вертикального положения планшета,
* до 425 пикселей — мобильные устройства.

В последующем планируется:
* адаптировать сайт для других разрешений,
* проверить код на кроссбраузерность и дописать все вендорные префиксы.

[Ссылка проекта на GitHub.](https://aliakseibarysevich.github.io/mesto/index.html "Место")