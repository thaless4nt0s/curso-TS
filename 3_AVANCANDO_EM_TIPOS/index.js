// 1 - arrays
var numbers = [1, 2, 3];
numbers.push(5);
console.log(numbers[2]);
var nomes = ['Thales', "Santos"];
console.log(nomes);
// 2 - Outra sintaxe de array
var numeros = [100, 200];
numeros.push(150);
console.log(numeros);
// 3 - Any
var arr1 = [1, "thales", true, []];
console.log(arr1);
// 4 - Parâmetros tipados
function soma(a, b) {
    console.log(a + b);
}
soma(4, 5);
// 5 - retorno da funcao
function greeting(name) {
    return "Ol\u00E1, ".concat(name);
}
greeting("thales");
// 6 - Funções anonimas
setTimeout(function () {
    var sallary = 1000;
    //console.log(parseFloat(sallary))
    console.log(sallary);
}, 2000);
// 7 - Tipos de objetos
function passCordinates(coord) {
    console.log("X coordinates: ".concat(coord.x));
    console.log("Y coordinates: ".concat(coord.y));
}
var objCoord = { x: 329, y: 82.4 };
passCordinates(objCoord);
var pessoaObj = { name: "Matheus", surname: "Silva" };
// 8 - props opcionais
function showNumbers(a, b, c) {
    console.log("A: ".concat(a, " b: ").concat(b, " c: ").concat(c == undefined ? "" : c, " "));
}
showNumbers(1, 2, 3);
showNumbers(1, 2);
// 9 - validacao de props opcionais
function advancedGreeting(firstname, lastname) {
    if (lastname !== undefined) {
        return "Ol\u00E1, ".concat(firstname, ", ").concat(lastname, ", tudo bem ?");
    }
    return "Ol\u00E1, ".concat(firstname, " tudo bem ?");
}
console.log(advancedGreeting("pedro", "barbosa"));
console.log(advancedGreeting("pedro"));
// 10 - UNION TYPE
function showBalance(balance) {
    console.log("O saldo da conta \u00E9 R$ ".concat(balance));
}
showBalance(115);
showBalance("115");
var arr2 = [1, "teste", false];
// 11 - avancando em union types
function showUserRole(role) {
    if (typeof role === "boolean") {
        return "Usuário não aprovado";
    }
    return "A funcao do usu\u00E1rio \u00E9 : ".concat(role);
}
console.log(showUserRole(true));
console.log(showUserRole("admin"));
function showId(id) {
    console.log("O ID \u00E9 ".concat(id));
}
var coordOBJ = {
    x: 10,
    y: 20,
    z: 30
};
function showCoords(obj) {
    console.log("X: ".concat(obj.x, " Y: ").concat(obj.y, " Z: ").concat(obj.z));
}
showCoords(coordOBJ);
;
;
var somePerson = { name: "Matheus", age: 30 };
console.log(somePerson);
/*
type personType = {
    age: number
} */
// 16 - LITERAL TYPES
var test;
//test = "1";
console.log(test);
function showDirection(direction) {
    console.log("A dire\u00E7\u00E3o \u00E9 : ".concat(direction));
}
//showDirection("top")
showDirection("left");
// 16 Non-null Assertion Operator
//const p = document.getElementById("some-p");
//console.log(p!.innerText);
// 17 - BIG INT
var n;
n = 1000n;
console.log(typeof n);
console.log(n + 100n);
// 18 - SYMBOL
var symbolA = Symbol("a");
var symbolB = Symbol("a");
console.log(symbolA == symbolB);
console.log(symbolA === symbolB);
// 
