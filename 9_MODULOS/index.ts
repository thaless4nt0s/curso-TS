// 1 - Importacao de arquivos
import importGreet from "./greet";

importGreet();

// 2 - Exportacao de variavel
import {x} from "./valiable";
console.log(x);

// 3 - Multiplas importacoes
import {a, b, myFunction} from "./multiple";
console.log(a);
console.log(b);
myFunction();

// 4 - Alias
import { someName as name } from "./changeName";
console.log(name);

// 5 - Importando tudo
import * as myNumbers from "./numbers"
const nx = myNumbers.n1;
console.log(nx);
myNumbers.showNumber();

// 6 - importando tipos ou interfaces
import { Human } from "./myType";
class User implements Human{
    name;
    age;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}

const joao = new User("João",35);
console.log(joao);