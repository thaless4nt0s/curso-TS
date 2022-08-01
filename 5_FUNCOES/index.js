var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// 1- void
function withOutReturn() {
    console.log("função sem retorno !!");
}
withOutReturn();
// 2 - callback como argumento
function greeting(name) {
    return "Ol\u00E1, ".concat(name);
}
function preGreeting(f, username) {
    console.log("Preparando a funcao");
    var greet = f(username);
    console.log(greet);
}
preGreeting(greeting, "thales");
preGreeting(greeting, "João");
// 3 - Generic Functions
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 3, 4, 5]));
console.log(firstElement(['a', 'b', 'c', 'd']));
function mergeObjects(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
var newObject = mergeObjects({ name: "Matheus" }, { age: 30, job: "jhon" });
console.log(newObject);
// 4 - Constraints nas generic functions]
function biggestNumber(a, b) {
    var biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(5, 3));
console.log(biggestNumber("12", "5"));
// 5 - Especificar tipo de argumento
function mergeArray(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArray([1, 2, 3], ["teste", "testando"]));
// 6 - Parâmetros opcionais
function modernGreeting(name, greet) {
    if (greet) {
        return "Ol\u00E1 ".concat(greet, " ").concat(name, ", tudo bem ??");
    }
    return "Ol\u00E1 ".concat(name, ", tudo bem ??");
}
console.log(modernGreeting("Thales", "salve galera"));
console.log(modernGreeting("Pedro"));
// 7 - Parâmetros default
function somaDefault(n, m) {
    if (m === void 0) { m = 20; }
    return n + m;
}
console.log(somaDefault(10, 10));
// 8 - Tipo Unknown
function doSth(x) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    else if (typeof x === "number") {
        console.log("X é um numero");
    }
}
doSth("2");
doSth([1, 2, 3, 5, 6]);
// 9 - Tipo Never
function showError(msg) {
    throw new Error(msg);
}
//showError("Algum erro !!");
// 10 - Rest parameters
function sumAll() {
    var n = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        n[_i] = arguments[_i];
    }
    return n.reduce(function (num, sum) { return sum + num; });
}
console.log(sumAll(1, 2, 3, 4, 5));
// 11 - Destructuring como parametros
function showProduct(_a) {
    var name = _a.name, price = _a.price;
    return "O nome do produto \u00E9 ".concat(name, " e ele custa r$ ").concat(price);
}
var shirt = { name: "camisa", price: 49.90 };
console.log(showProduct(shirt));
