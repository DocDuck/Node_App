const User = require('./user');
const logger = require('logger')(module);
const db = require('db');
// подключаем json со словарём в модуле псевдо базы данных
db.connect(); // инициализация модуля с json необходима только в одном месте, так как объект сохраняется в кэше по абсолютному пути

function runUserGreeting() {
    const vasya = new User("Вася");

    vasya.hello(vasya);
}

// Приём 1. Проверка на то, подключен ли данный файл как модуль или он используется самостоятельно
// Если у данного файла объект module содержит не пустое поле parent -> это значит что файл где то подключен в качестве модуля
if (module.parent) { // если данный модуль где то подключен, то
    logger("подключен модуль server.js");
    exports.greeting = runUserGreeting // экспортируем функцию runUserGreeting в переменную greeting
} else { // если parent нет, то server.js запущен сам по себе
    runUserGreeting(); // в этом случае запускаем функцию немедленно
}
