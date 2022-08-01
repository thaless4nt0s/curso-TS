//1 - tipo de objeto para funcao com interface

interface Product{
    name: string,
    price: number,
    isAvaliable: boolean
}

function showProductDetails(product: Product){
    console.log(`O nome do produto é: ${product.name} e seu preco é R$ ${product.price}`);
    if(product.isAvaliable){
        console.log(`O produto está disponível`);
    }else{
        console.log(`Produto não disponível`);
    }
}

const shirt: Product = {
    name: "Camisa",
    price: 19.95,
    isAvaliable: true
}

showProductDetails(shirt);

showProductDetails({name: "tenis", price: 22.52, isAvaliable: false});

// 2 - Propriedades opcionais em Interfaces
interface User{
    email: string,
    role?: string
}

function showUserDetails(user: User){
    console.log(`O usuario tem o email: ${user.email}`);
    if(user.role){
        console.log(`A funcao de usuario e ${user.role}`);
    }
}

const user1: User = {email: "balde@123", role: "admin"};
const user2: User = {email: "balde@email.com"};

showUserDetails(user1);
showUserDetails(user2);

// 3 - Propriedades readonly
interface Car {
    brand: string,
    readonly wheels: number
}

const fusca: Car = {
    brand: "vw01",
    wheels: 4
}
// fusca.wheels = 9;
console.log(fusca);

// 4 - index signature
interface CoordObject{
    [index: string] : number
}

let coords: CoordObject = {
    x: 10
}

coords.y = 15;

console.log(coords);

//coords.z  = "teste";

// 5 - Extending Types
interface Human {
    name: string,
    age: number
}

interface SuperHuman extends Human{
    superPowers: string[]
}

const matheus: Human = {name:"matheus", age: 30};
console.log(matheus);

const goku: SuperHuman = {name: 'Goku', age: 330, superPowers: ['kamehameha', 'genkidama']};
console.log(goku);

// 6 - Intersection types

interface Character{
    name: string
}

interface Gun{
    type: string,
    caliber: number
}

type CharacterWithGun = Character&Gun;

const arnold: CharacterWithGun = {name: "arnold", type:"shotgun", caliber: 12};
console.log(arnold)
console.log(arnold.caliber);

// 7 - ReadOnly array

let myArray: ReadonlyArray<string> = ["maca","laranja", "banana"];

console.log(myArray);

myArray.forEach(item =>{
    console.log(`Fruta: ${item}`);
});

myArray = myArray.map((item)=>{
    return `fruta: ${item}`;
})

console.log(myArray);

// 8 - Tuplas

type fiveNumbers = [number, number, number, number, number];

const meyVetor:fiveNumbers = [1, 2, 3, 4, 5];
// const meyVetor2:fiveNumbers = [1, 2, 3, 4, 5, 6];

console.log(meyVetor);
console.log(meyVetor[2]);

type nameAndAge = [string, number];

const carinha: nameAndAge = ["carlos", 36];

console.log(carinha);

carinha[0] = "João";
console.log(carinha);

// 9 - Tuplas com readOnly
function showNumbers(numbers: readonly [number, number]){
    // numbers[0] = 10;
    console.log(numbers[0]);
    console.log(numbers[1]);
}

showNumbers([1,2]);