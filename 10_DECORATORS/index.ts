// 1 - Exemplo decorator
// --target ES5 --emitDecoratorMetadata --experimentalDecorators

function myDecorator(){
    console.log(`Iniciando decorator`);

    return function(target: any, propertKey: string, description: TypedPropertyDescriptor <any>): any{
        console.log(target);
        console.log(propertKey);
        console.log(description);
    }
}

class MyClass{
    @myDecorator()
    testing(){
        console.log(`Treinando a execucao`);
    }
}

const myObj = new MyClass();
myObj.testing();

// 2 - Multiplos decorators
function a(){
    return function(target: any, propertKey: string, description: TypedPropertyDescriptor <any>): any{
        console.log(`Iniciando A`);
    }
}

function b(){
    return function(target: any, propertKey: string, description: TypedPropertyDescriptor <any>): any{
        console.log(`Iniciando b`);
    }
}

function c(){
    return function(target: any, propertKey: string, description: TypedPropertyDescriptor <any> ): any{
        console.log(`Iniciando c`);
    }
}

class Multiple{
    @a()
    @b()
    @c()
    testing(){
        console.log(`Treinando a execucao`);
    }
}

const mult = new Multiple();
mult.testing();

// 3 - Decorator de classe
function classDec(constructor: Function){
    console.log(constructor.name);
    if(constructor.name === `User`){
        console.log(`Um usuario foi criado`);
    }
}

@classDec
class User{
    name;
    constructor(name: string){
        this.name = name;
    }
}

const matheus = new User("Matheus");

// 4 - Decorator de método
function enumerable(value: boolean){
    return function(target: any, propertKey: string, descriptor: PropertyDescriptor){
        descriptor.enumerable = value;
    }
}
class Machine{
    name;
    constructor(name: string){
        this.name = name;
    }
    @enumerable(false)
    
    showName(){
        console.log(this);
        return `O nome da maquina e ${this.name}`;
    }
}

const trator = new Machine("Trator");
console.log(trator.showName());

// 5 - Acessor decorator
class Monster{
    name?;
    age?;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
    @enumerable(true)
    get showName(){
        return `Nome do monstro: ${this.name}`;
    }
    @enumerable(true)
    get showAge(){
        return `A idade do monstro: ${this.age}`;
    }
}

const charmander = new Monster("Charmander", 35);
console.log(charmander);

// 6 - Property decorator
function formatNumber(){
    return function(target: Object, propertKey: string){
        let value: string;

        const getter = function(){
            return value;
        }

        const setter = function(newVal: string){
            value = newVal.padStart(5,"0");
        }

        Object.defineProperty(target, propertKey, {
            set: setter,
            get: getter
        })
    }
}
class Id{
    @formatNumber()
    id;
    constructor(id: string){
        this.id = id;
    }
}

const item = new Id("1");
console.log(item.id);

// 7 - Exemplo  com Class Decorator
function createDate(created: Function){
    created.prototype.createdAt = new Date();
}
@createDate
class Book{
    id;
    createdAt? : Date;
    constructor(id: number){
        this.id = id;
    }
}
@createDate
class Pen{
    id;
    createdAt? : Date;
    constructor(id: number){
        this.id = id;
    }
}

const newBook = new Book(12);
const newPen = new Pen(14);
console.log(newBook);
console.log(newPen);

// 8 - Exemplo real Method Decorator
function checkIfUserPosted(){
    return function(target: Object, keys: string | Symbol,
        descriptor: PropertyDescriptor){
            const childFunction = descriptor.value;
            console.log(childFunction);
            descriptor.value = function(...args: any[]){
                if(args[1] === true){
                    console.log(`Usuário já postou`);
                    return null;
                }else{
                    return childFunction.apply(this, args);
                }
            }
            return descriptor;
        }
}

class Post{
    alreadyPosted = false;
    @checkIfUserPosted()
    post(content: string, alreadyPosted: boolean){
        this.alreadyPosted = true;
        console.log(`Post do usuario: ${content}`);
    }
}

const postagem = new Post();

postagem.post("Meu primeiro Post", postagem.alreadyPosted);
postagem.post("Meu segundo Post", postagem.alreadyPosted);
postagem.post("Meu terceiro Post", postagem.alreadyPosted);

// 9 - Exemplo real Property Decorator
function max(limit: number){
    return function(target: Object, propertKey: string){
        let value: string

        const getter = function(){
            return value;
        }

        const setter = function(newVal: string){
            if(newVal.length > limit){
                console.log(`O valor deve ter no maximo ${limit} dígitos !!`);
            }
        }

        Object.defineProperty(target, propertKey, {get: getter, set: setter});
    }
}
class Admin{
    @max(10)
    username;
    constructor(username: string){
        this.username = username;
    }
}

const ademir = new Admin("Thaloko");
const ademir2 = new Admin("qwertyuiol.,mnbv");