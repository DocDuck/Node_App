const db = require('db');


function User(name) {
    this.name = name;
}

User.prototype.hello = function(who) {
    console.log(db.getPhrase("Hello") + ", " + who.name);
};

module.exports = User; // exports.User = User и this.User = User -> это синонимы для блое лаконичной записи, this и exports это ссылки на экспортируемое свойство exports у объекта module

