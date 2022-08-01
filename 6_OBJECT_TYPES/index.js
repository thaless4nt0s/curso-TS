//1 - tipo de objeto para funcao com interface
function showProductDetails(product) {
    console.log("O nome do produto \u00E9: ".concat(product.name, " e seu preco \u00E9 R$ ").concat(product.price));
    if (product.isAvaliable) {
        console.log("O produto est\u00E1 dispon\u00EDvel");
    }
    else {
        console.log("Produto n\u00E3o dispon\u00EDvel");
    }
}
var shirt = {
    name: "Camisa",
    price: 19.95,
    isAvaliable: true
};
showProductDetails(shirt);
showProductDetails({ name: "tenis", price: 22.52, isAvaliable: false });
function showUserDetails(user) {
    console.log("O usuario tem o email: ".concat(user.email));
    if (user.role) {
        console.log("A funcao de usuario e ".concat(user.role));
    }
}
var user1 = { email: "balde@123", role: "admin" };
var user2 = { email: "balde@email.com" };
showUserDetails(user1);
showUserDetails(user2);
var fusca = {
    brand: "vw01",
    wheels: 4
};
// fusca.wheels = 9;
console.log(fusca);
var coords = {
    x: 10
};
coords.y = 15;
console.log(coords);
var matheus = { name: "matheus", age: 30 };
console.log(matheus);
var goku = { name: 'Goku', age: 330, superPowers: ['kamehameha', 'genkidama'] };
console.log(goku);
var arnold = { name: "arnold", type: "shotgun", caliber: 12 };
console.log(arnold);
console.log(arnold.caliber);
// 7 - ReadOnly array
var myArray = ["maca", "laranja", "banana"];
console.log(myArray);
myArray.forEach(function (item) {
    console.log("Fruta: ".concat(item));
});
myArray = myArray.map(function (item) {
    return "fruta: ".concat(item);
});
console.log(myArray);
var meyVetor = [1, 2, 3, 4, 5];
// const meyVetor2:fiveNumbers = [1, 2, 3, 4, 5, 6];
console.log(meyVetor);
console.log(meyVetor[2]);
var carinha = ["carlos", 36];
console.log(carinha);
carinha[0] = "João";
console.log(carinha);
// 9 - Tuplas com readOnly
function showNumbers(numbers) {
    // numbers[0] = 10;
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([1, 2]);
