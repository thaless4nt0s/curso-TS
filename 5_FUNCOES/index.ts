// 1- void
function withOutReturn(): void{
    console.log("função sem retorno !!");
}
withOutReturn();

// 2 - callback como argumento
function greeting(name: string): string{
    return `Olá, ${name}`;
}

function preGreeting(f: (name: string) => string, username: string){
    console.log(`Preparando a funcao`);
    const greet = f(username);
    console.log(greet);
}


preGreeting(greeting, "thales");
preGreeting(greeting, "João");

// 3 - Generic Functions
function firstElement<T>(arr : T[]){
    return arr[0];
}

console.log(firstElement([1,3,4,5]));
console.log(firstElement(['a', 'b', 'c', 'd']));

function mergeObjects <U, T> (obj1: U, obj2: T){
    return{
        ...obj1,
        ...obj2
    };
}

const newObject = mergeObjects(
    {name: "Matheus"}, 
    {age: 30, job: "jhon"}
);
console.log(newObject);

// 4 - Constraints nas generic functions]
function biggestNumber<T extends number | string>(a: T, b:T): T{
    let biggest: T;
    if(+a > +b){
        biggest = a;
    }else{
        biggest = b;
    }

    return biggest;
}

console.log(biggestNumber(5,3));
console.log(biggestNumber("12","5"));

// 5 - Especificar tipo de argumento
function mergeArray<T>(arr1: T[], arr2: T[]){
    return arr1.concat(arr2);
}


console.log(mergeArray< number | string >([1,2,3],["teste","testando"]));

// 6 - Parâmetros opcionais
function modernGreeting(name: string, greet?: string){
    if(greet){
        return `Olá ${greet} ${name}, tudo bem ??`;
    }
    return `Olá ${name}, tudo bem ??`;
}
console.log(modernGreeting("Thales", "salve galera"));
console.log(modernGreeting("Pedro"));

// 7 - Parâmetros default
function somaDefault(n: number, m = 20): number{
    return n+m;
}

console.log(somaDefault(10, 10));

// 8 - Tipo Unknown
function doSth(x: unknown){
    if(Array.isArray(x)){
        console.log(x[0]);
    }else if(typeof x === "number"){
        console.log("X é um numero");
    }
}

doSth("2");
doSth([1,2,3,5,6]);

// 9 - Tipo Never

function showError(msg: string): never{
    throw new Error(msg);
}

//showError("Algum erro !!");

// 10 - Rest parameters
function sumAll(...n: number[]){
    return n.reduce( (num, sum) => sum + num);
}

console.log(sumAll(1,2,3,4,5));


// 11 - Destructuring como parametros
function showProduct({name, price}: {name: string, price:number}): string{
    return `O nome do produto é ${name} e ele custa r$ ${price}`;
}
const shirt = {name: "camisa", price: 49.90};

console.log(showProduct(shirt));