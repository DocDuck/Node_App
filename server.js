const userjs = require('./user');

function runUserGreeting() {
    const vasya = new userjs.User("Вася");

    vasya.hello(vasya);
}

// Приём 1. Проверка на то, подключен ли данный файл как модуль или он используется самостоятельно
// Если у данного файла объект module содержит не пустое поле parent -> это значит что файл где то подключен в качестве модуля

if (module.parent) { // если данный модуль где то подключен, то
    console.log("подключен модуль server.js");
    exports.greeting = runUserGreeting // экспортируем функцию runUserGreeting в переменную greeting
} else { // если parent нет, то server.js запущен сам по себе
    runUserGreeting(); // в этом случае запускаем функцию немедленно
}
