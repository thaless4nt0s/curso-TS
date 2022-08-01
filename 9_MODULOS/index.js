"use strict";
exports.__esModule = true;
// 1 - Importacao de arquivos
var greet_1 = require("./greet");
(0, greet_1["default"])();
// 2 - Exportacao de variavel
var valiable_1 = require("./valiable");
console.log(valiable_1.x);
// 3 - Multiplas importacoes
var multiple_1 = require("./multiple");
console.log(multiple_1.a);
console.log(multiple_1.b);
(0, multiple_1.myFunction)();
// 4 - Alias
var changeName_1 = require("./changeName");
console.log(changeName_1.someName);
// 5 - Importando tudo
var myNumbers = require("./numbers");
var nx = myNumbers.n1;
console.log(nx);
myNumbers.showNumber();
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    return User;
}());
var joao = new User("João", 35);
console.log(joao);
