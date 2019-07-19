const phrases = require('./db/dic');
const util = require('util');

// Создаем класс кастомной ошибки "нет такой фразы в справочнике"
class PhraseError extends Error {
    constructor(...args) {
        super(...args);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, PhraseError);
        }
        this.name = 'PhraseError';
    }
}

// Создаем класс кастомной ошибки "битый урл"
class HttpError extends Error {
    constructor(status,...args) {
        super(...args);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, HttpError);
        }
        this.name = 'HttpError';
        this.status = status;
    }
}

// функция получения данных из справочника dic
function getPhrase (name) {

    if (phrases[name]) {
        return phrases[name]
    } else {
        throw new PhraseError(`Нет такого слова ${name}`);
    }
}


// функция получения данных со страницы (типа)
function getPageContent (url) {
    if (url === 'index.html') {
        return util.format("%s, %s!", getPhrase("Hello"), getPhrase("World"));
    } else {
        throw new HttpError(404, `Нет такой страницы`);
    }

}

// Пробуем получить контент указанной страницы
const res = getPageContent('index.html');
console.log(res)