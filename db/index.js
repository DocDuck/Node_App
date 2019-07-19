
let phrases;

exports.connect = function() {
    phrases = require('./dic');
};

exports.getPhrase = (name) => {
    if (!phrases[name]) {
        throw new Error("Нет такой фразы: " + name)
    }
    return phrases[name];
}