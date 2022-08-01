// 1 - generics
function showData<T,U>(arg: T): string{
    return `O dado é ${arg}`;
}

console.log(showData(5));
console.log(showData("teste generic"));
console.log(showData(true));
console.log(showData([]));

// 2 - Constraint em generics
function showProductName<T extends {name: string}>(obj: T){
    return `O nome do Produto é ${obj.name}`;
}

const objeto = {name: "porta", cor: "branca"};
const objeto2 = {name: "Fusca", cor: "branca", wheels: 4, engine: 1.0};
const objeto3 = {cor: "branca", wheels: 4, engine: 1.0};
console.log(showProductName(objeto));
console.log(showProductName(objeto2));
//console.log(showProductName(objeto3));

// 3 - Interfaces com Generics
interface myObject <T, U, Q>{
    name: string,
    wheels: T,
    engine: U,
    color: Q
}

type Car = myObject<number, number, boolean>;
type Pen = myObject<boolean, boolean, string>;

const myCar: Car = {name: "fusca", wheels: 4, engine: 2.0, color: false};
const myPen: Pen = {
    name: "Caneta bic", wheels: false, engine: false, color: "preto"
};

console.log(myCar);
console.log(myPen);

// 4 - Type parameters
function getSomeKey<T, K extends keyof T>(obj:T, key:K){
    return `A chave ${[key]}está presente no objeto e tem o valor de ${obj[key]}`;
}

const server = {
    hd: "210",
    ram: '1024'
}

console.log(getSomeKey(server,"ram"));
//console.log(getSomeKey(server,"teste"));

// 5 - keyof Type Operator
type Character = {name: string, age: number, hasDriverLicence: boolean};

type C = keyof Character;

function showCharName(obj: Character, name: C): string{
    return `${obj[name]}`;
}

const personagem: Character = {
    name: "matheus",
    age: 30,
    hasDriverLicence: true
}

console.log(showCharName(personagem, "name"));
console.log(showCharName(personagem, "age"));
console.log(showCharName(personagem, "hasDriverLicence"));

// 6 - typeof Type Operator
const userName: string = "Matheus";
const userName2: typeof userName = "João";
//const userName3: typeof userName = "João";
type x = typeof userName;
const userName4: x = "Joaquim";

// 7 - indexed Access types
type Truck = {
    km: number,
    kg: number,
    description: string
}

type km = Truck['km'];
const newTruck: Truck = {km: 10000, kg: 5000, description: "Caminhao para pouca carga"};

function showKm(km: km){
    console.log(`O veículo tem a km de ${km}`);
}
showKm(newTruck.km);

const newCar = {
    km: 5000,
    kg: 1200
}
showKm(newCar.km);

// 8 - Conditional Expressions Type
interface A {}
interface B extends A {}
interface Teste {
    showName(): string
}
type myType = B extends A ? number : string;

const someVar: myType = 5;
//const someVar2: myType = '5';

type myTypeB = Teste extends {showName(): number} ? string : number;

// 9 - Template Literals Type
type testeA = "text";

type CustomType = `some ${testeA}`;

const testing: CustomType = "some text";

type a1 = "testando";
type a2 = "union";
type a3 = `${a1} ` | `${a2}` ;