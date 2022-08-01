// 1 - generics
function showData(arg) {
    return "O dado \u00E9 ".concat(arg);
}
console.log(showData(5));
console.log(showData("teste generic"));
console.log(showData(true));
console.log(showData([]));
// 2 - Constraint em generics
function showProductName(obj) {
    return "O nome do Produto \u00E9 ".concat(obj.name);
}
var objeto = { name: "porta", cor: "branca" };
var objeto2 = { name: "Fusca", cor: "branca", wheels: 4, engine: 1.0 };
var objeto3 = { cor: "branca", wheels: 4, engine: 1.0 };
console.log(showProductName(objeto));
console.log(showProductName(objeto2));
var myCar = { name: "fusca", wheels: 4, engine: 2.0, color: false };
var myPen = {
    name: "Caneta bic", wheels: false, engine: false, color: "preto"
};
console.log(myCar);
console.log(myPen);
// 4 - Type parameters
function getSomeKey(obj, key) {
    return "A chave ".concat([key], "est\u00E1 presente no objeto e tem o valor de ").concat(obj[key]);
}
var server = {
    hd: "210",
    ram: '1024'
};
console.log(getSomeKey(server, "ram"));
function showCharName(obj, name) {
    return "".concat(obj[name]);
}
var personagem = {
    name: "matheus",
    age: 30,
    hasDriverLicence: true
};
console.log(showCharName(personagem, "name"));
console.log(showCharName(personagem, "age"));
console.log(showCharName(personagem, "hasDriverLicence"));
// 6 - typeof Type Operator
var userName = "Matheus";
var userName2 = "João";
var userName4 = "Joaquim";
var newTruck = { km: 10000, kg: 5000, description: "Caminhao para pouca carga" };
function showKm(km) {
    console.log("O ve\u00EDculo tem a km de ".concat(km));
}
showKm(newTruck.km);
var newCar = {
    km: 5000,
    kg: 1200
};
showKm(newCar.km);
var someVar = 5;
var testing = "some text";
