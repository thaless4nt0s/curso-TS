// 1 - Campos em classe
class User{
    name!: string;
    age!: number;
}

const matheus = new User();
console.log(matheus);

matheus.name = "matheus";
//matheus.job = "Developer";

// 2 - constructor
class NewUser{
    name;
    age;

    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }
}

const joao = new NewUser("João", 35);
console.log(joao);

//const pedro = new NewUser("Pedro");

// 3 - Campos ReadOnly
class Car{
    name;
    readonly wheels = 4;

    constructor(name: string){
        this.name = name;
    }
}

const fusca = new Car("fusca");

console.log(fusca);
console.log(fusca.wheels);

fusca.name = "fusca turbo";
//fusca.wheels = 5;

// 4 - Herança e Super
class Machine{
    name;
    constructor(name: string){
        this.name = name;
    }
}

class KillerMachine extends Machine{
    guns;
    constructor(name: string, guns: number){
        super(name);
        this.guns = guns;
    }
}

const trator = new Machine ("trator");
const destroyer = new KillerMachine("destroyer", 4);

console.log(trator);
console.log(destroyer)

// 5 - Métodos
class Dwarf{
    name;
    constructor(name: string){
        this.name = name;
    }

    greeting(){
        console.log("Hey stranger !!");
    }
}

const jimmy = new Dwarf("jimmy");
console.log(jimmy);
console.log(jimmy.name)
jimmy.greeting();

// 6 - This
class Truck {
    model;
    hp;
    constructor(model: string, hp: number){
        this.model = model;
        this.hp = hp;
    }

    showDetails(){
        console.log(`Caminhão do modelo ${this.model}, que tem ${this.hp} cavalos de potência`);
    }
}

const volvo = new Truck("volvo", 1400);
const scania = new Truck("Scania", 100);
volvo.showDetails();
scania.showDetails();

// 7 - Getters
class Person{
    name;
    surname;

    constructor(name: string, surname: string){
        this.name = name;
        this.surname = surname;
    }

    get fullname(){
        return `${this.name} ${this.surname}`;
    }
}

const matheusB = new Person("matheus", "batista");
console.log(matheusB.name);
console.log(matheusB.fullname);

// 8 - Setters
class Coords{
    x!: number;
    y!: number;

    set fillX(x: number){
        if (x === 0){
            return;
        }

        this.x = x;
        console.log("X inserido com sucesso");
    }

    set fillY(y: number){
        if (y === 0){
            return;
        }

        this.y = y;
        console.log("y inserido com sucesso");
    }

    get getCoords(){
        return `X: ${this.x} - Y: ${this.y}`;
    }
}

const myCoords = new Coords ();
myCoords.fillX = 15;
myCoords.fillY = 10;
console.log(myCoords.getCoords);

// 9 - implements

interface showTitle{
    itemTitle(): string;
}

class BlogPost implements showTitle{
    title;
    constructor(title: string){
        this.title = title;
    }

    itemTitle(): string {
        return `O título do post é ${this.title}`;
    }
}

const post = new BlogPost("novo post");
console.log(post.itemTitle());

class TestingInterface implements showTitle{
    title;

    constructor(title: string){
        this.title = title;
    }

    itemTitle(): string {
        return `O título é ${this.title}`;
    }
}

// 10 - Override de metodos
class Base{
    someMethod(){
        console.log(`Alguma coisa`);
    }
}

class Nova extends Base{
    someMethod(){
        console.log(`Alguma outra coisa !!!!`);
    }
}

const myObj = new Nova();
myObj.someMethod();


// 11 - public
class C{
    public x = 10;
}

class D extends C{

}

const cInstance = new C();
const de = new D();
console.log(cInstance.x)
console.log(de.x);

// 12 - Protected
class E{
    protected x = 10;
    protected protectedMethod(){
        console.log("Método Protegido");
    }
}

class F extends E{
    showX(){
        console.log(`X: ${this.x}`);
    }

    showProtectedMethod(){
        this.protectedMethod();
    }
}

const fInstance = new F();
console.log(fInstance.showProtectedMethod());

// 13 - Private
class PrivateClass{
    private name = "Private";
    showName(){
        return this.name;
    }

    private privateMethod(){
        console.log(`Método privado !!`);
    }

    showPrivateMethod(){
        this.privateMethod();
    }

}

const pObj = new PrivateClass();
//console.log(pObj.name);
console.log(pObj.showName());
//console.log(pObj.privateMethod());
console.log(pObj.showPrivateMethod());

/* class TestingPrivate extends PrivateClass{
    myMethod(){
        this.privateMethod();
    }
} */

// 14 - Static members
class StaticMembers{
    static prop = "teste static";

    static staticMethod(){
        console.log("Este e um metodo estatico !!");
    }
}
console.log(StaticMembers.prop);
console.log(StaticMembers.staticMethod());

// 15 - Generic Class
class Item<T,U>{
    first;
    second;

    get showFirts(){
        return `O primeiro é ${this.first}`;
    }

    constructor(first: T, second:U){
        this.first = first;
        this.second = second;
    }
}

const novo = new Item("caixa", "SURPRESA");
console.log(novo);
console.log(novo.showFirts);
console.log(typeof novo.showFirts);

const novo2 = new Item(1, true);
console.log(novo2);
console.log(novo2.showFirts);
console.log(typeof novo2.first);

// 16 -  Parameter properties
class ParameterProperties{
    constructor(
        public name: string,
        private qty: number, 
        private price: number
    ){
        this.name = name;
        this.qty = qty;
    }

    get showQty(){
        return `A quantidade total e ${this.qty}`;
    }
    get showPrice(){
        return `O preco total e ${this.price}`;
    }
}

const newShit = new ParameterProperties("camisa",5,19.85);
console.log(newShit.name);
//console.log(newShit.price);
console.log(newShit.showQty);
console.log(newShit.showPrice);

// 17 - Class Expressions
const myClass = class<T>{
    name;
    constructor(name: T){
        this.name = name;
    }
}

const pessoa = new myClass("PEDRO");
console.log(pessoa);
console.log(pessoa.name);

// 18 - Abstract class

abstract class Abstrata{
    abstract showName(): void;
}

//const newObj = new Abstrata();

class Abstract extends Abstrata{
    name: string;
    constructor(name: string){
        super();
        this.name = name;
    }
    showName(): void {
        console.log(`O nome é ${this.name}`);
    }
}

const newAbstract = new Abstract("Paulo");
console.log(newAbstract);
console.log(newAbstract.showName());

// 19 - Relacoes entre classes
class Dog{
    name! : string;
}

class Cat{
    name!: string;
}

const cao: Dog = new Cat();

console.log(cao);