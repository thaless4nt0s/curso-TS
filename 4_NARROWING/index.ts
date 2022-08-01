// 1 - type guard
function sum(a: number | string,b: number | string){
    if(typeof a === "string" && typeof b === "string"){
        console.log(parseFloat(a) + parseFloat(b));
    }else if(typeof a === "number" && typeof b === "number"){
        console.log(a+b);
    }else{
        console.log("Impossível realizar a soma !!")
    }
}

sum("3", "6");
sum(3, 6);

// 2 - checando se o valor existe
function operations(arr: number[], operation: string | number){
    if(operation){
        if(operation === "sum"){
            const sum = arr.reduce((i, total) => i+total);
            console.log(sum);
        }else if(operation === "multiply"){
            const mult = arr.reduce((i,total) => i*total);
            console.log(mult);
        }
    }else{
        console.log("por favor, defina uma operação")
    }
}

operations([1,2,3,4], "sum");
operations([1,2,3,4], "multiply");

// 3 - operador instanceOf
class User{
    name;
    constructor(name: string){
        this.name = name;
    }
}

class superUser extends User{
    constructor(name: string){
        super(name);
    }
}

const jhon = new User("Jhon");
const paul = new superUser("Paul");
console.log(jhon);
console.log(paul);

function userGreeting(user: object){
    if(user instanceof superUser){
        console.log(`Olá ${user.name}, deseja ver os dados do sistema ??`);
    }
    else if (user instanceof User){
        console.log(`Olá ${user.name}`);
    }
}

userGreeting(paul);
userGreeting(jhon);

// 4 - Operador IN
class Dog{
    name;
    breed;
    constructor(name: string, breed? : string){
        this.name = name;
        if(breed){
            this.breed = breed;
        }
    }
}

const turca = new Dog("turca");
const bob = new Dog("bob", "pastor alemao");

function showDogDetails(dog: Dog){
    if("breed" in dog){
        console.log(`O cachorro é da raça ${dog.breed}`);
    }else{
        console.log("O cachorro n tem raça definida");
    }
}

showDogDetails(turca);
showDogDetails(bob);
