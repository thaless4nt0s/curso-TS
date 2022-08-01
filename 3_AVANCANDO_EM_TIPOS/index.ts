// 1 - arrays

let numbers: number[] = [1,2,3];

numbers.push(5);

console.log(numbers[2]);

let nomes: string[] = ['Thales', "Santos"];

console.log(nomes);


// 2 - Outra sintaxe de array

let numeros: Array<number> = [100, 200];
numeros.push(150);
console.log(numeros);

// 3 - Any
const arr1: any = [1, "thales", true, []];
console.log(arr1);

// 4 - Parâmetros tipados

function soma(a: number, b: number){
    console.log(a+b);
}

soma(4,5);

// 5 - retorno da funcao
function greeting(name: string) : string{
    return `Olá, ${name}`; 
}

greeting("thales");

// 6 - Funções anonimas

setTimeout(function(){
    const sallary: number = 1000;
    //console.log(parseFloat(sallary))
    console.log(sallary);

}, 2000);

// 7 - Tipos de objetos
function passCordinates(coord: {x: number, y: number}){
    console.log(`X coordinates: ${coord.x}`);
    console.log(`Y coordinates: ${coord.y}`);
}

const objCoord = {x: 329, y: 82.4};
passCordinates(objCoord);

const pessoaObj : {
    name: string,
    surname: string
} = {name : "Matheus", surname : "Silva"};


// 8 - props opcionais


function showNumbers(a: number, b:number, c ? :number){
    console.log(`A: ${a} b: ${b} c: ${c == undefined ? "" : c} `)
}

showNumbers(1,2,3);
showNumbers(1,2);

// 9 - validacao de props opcionais
function advancedGreeting(firstname: string, lastname?: string){
    if (lastname !== undefined){
        return `Olá, ${firstname}, ${lastname}, tudo bem ?`;
    }
    return `Olá, ${firstname} tudo bem ?`;
}

console.log(advancedGreeting("pedro", "barbosa"));
console.log(advancedGreeting("pedro"));

// 10 - UNION TYPE

function showBalance(balance: string | number){
    console.log(`O saldo da conta é R$ ${balance}`);
}

showBalance(115);
showBalance("115");

const arr2: Array<Number | string | boolean > = [1, "teste", false];

// 11 - avancando em union types

function showUserRole(role: boolean | string){
    if (typeof role === "boolean" ){
        return "Usuário não aprovado";
    }

    return `A funcao do usuário é : ${role}`;
}

console.log(showUserRole(true));
console.log(showUserRole("admin"));

// 12 - type alias
type ID = string | number;
function showId(id: ID){
    console.log(`O ID é ${id}`);
}

// 13 - interfaces
interface Point{
    x: number,
    y: number,
    z: number
}

const coordOBJ: Point = {
    x: 10,
    y: 20,
    z: 30
}

function showCoords(obj: Point){
    console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`)
}

showCoords(coordOBJ);

// 14 - type ALIAS X INTERFACES
interface Person{
    name: string
};
interface Person{
    age: number
};

const somePerson: Person = {name: "Matheus", age: 30};
console.log(somePerson)

type personType = {
    name: string
}
/*
type personType = {
    age: number
} */

// 16 - LITERAL TYPES
let test: "testando";
//test = "1";
//console.log(test);

function showDirection(direction: "left" | "right" | "center"){
    console.log(`A direção é : ${direction}`);
}
//showDirection("top")
showDirection("left")

// 16 Non-null Assertion Operator

//const p = document.getElementById("some-p");
//console.log(p!.innerText);

// 17 - BIG INT

let n: bigint;
n = 1000n;
console.log(typeof n)
console.log(n + 100n);

// 18 - SYMBOL
let symbolA: symbol  = Symbol("a");
let symbolB = Symbol("a");

console.log(symbolA == symbolB);
console.log(symbolA === symbolB);

// 