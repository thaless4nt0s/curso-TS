var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 1 - Campos em classe
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var matheus = new User();
console.log(matheus);
matheus.name = "matheus";
//matheus.job = "Developer";
// 2 - constructor
var NewUser = /** @class */ (function () {
    function NewUser(name, age) {
        this.name = name;
        this.age = age;
    }
    return NewUser;
}());
var joao = new NewUser("João", 35);
console.log(joao);
//const pedro = new NewUser("Pedro");
// 3 - Campos ReadOnly
var Car = /** @class */ (function () {
    function Car(name) {
        this.wheels = 4;
        this.name = name;
    }
    return Car;
}());
var fusca = new Car("fusca");
console.log(fusca);
console.log(fusca.wheels);
fusca.name = "fusca turbo";
//fusca.wheels = 5;
// 4 - Herança e Super
var Machine = /** @class */ (function () {
    function Machine(name) {
        this.name = name;
    }
    return Machine;
}());
var KillerMachine = /** @class */ (function (_super) {
    __extends(KillerMachine, _super);
    function KillerMachine(name, guns) {
        var _this = _super.call(this, name) || this;
        _this.guns = guns;
        return _this;
    }
    return KillerMachine;
}(Machine));
var trator = new Machine("trator");
var destroyer = new KillerMachine("destroyer", 4);
console.log(trator);
console.log(destroyer);
// 5 - Métodos
var Dwarf = /** @class */ (function () {
    function Dwarf(name) {
        this.name = name;
    }
    Dwarf.prototype.greeting = function () {
        console.log("Hey stranger !!");
    };
    return Dwarf;
}());
var jimmy = new Dwarf("jimmy");
console.log(jimmy);
console.log(jimmy.name);
jimmy.greeting();
// 6 - This
var Truck = /** @class */ (function () {
    function Truck(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    Truck.prototype.showDetails = function () {
        console.log("Caminh\u00E3o do modelo ".concat(this.model, ", que tem ").concat(this.hp, " cavalos de pot\u00EAncia"));
    };
    return Truck;
}());
var volvo = new Truck("volvo", 1400);
var scania = new Truck("Scania", 100);
volvo.showDetails();
scania.showDetails();
// 7 - Getters
var Person = /** @class */ (function () {
    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    Object.defineProperty(Person.prototype, "fullname", {
        get: function () {
            return "".concat(this.name, " ").concat(this.surname);
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var matheusB = new Person("matheus", "batista");
console.log(matheusB.name);
console.log(matheusB.fullname);
// 8 - Setters
var Coords = /** @class */ (function () {
    function Coords() {
    }
    Object.defineProperty(Coords.prototype, "fillX", {
        set: function (x) {
            if (x === 0) {
                return;
            }
            this.x = x;
            console.log("X inserido com sucesso");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Coords.prototype, "fillY", {
        set: function (y) {
            if (y === 0) {
                return;
            }
            this.y = y;
            console.log("y inserido com sucesso");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Coords.prototype, "getCoords", {
        get: function () {
            return "X: ".concat(this.x, " - Y: ").concat(this.y);
        },
        enumerable: false,
        configurable: true
    });
    return Coords;
}());
var myCoords = new Coords();
myCoords.fillX = 15;
myCoords.fillY = 10;
console.log(myCoords.getCoords);
var BlogPost = /** @class */ (function () {
    function BlogPost(title) {
        this.title = title;
    }
    BlogPost.prototype.itemTitle = function () {
        return "O t\u00EDtulo do post \u00E9 ".concat(this.title);
    };
    return BlogPost;
}());
var post = new BlogPost("novo post");
console.log(post.itemTitle());
var TestingInterface = /** @class */ (function () {
    function TestingInterface(title) {
        this.title = title;
    }
    TestingInterface.prototype.itemTitle = function () {
        return "O t\u00EDtulo \u00E9 ".concat(this.title);
    };
    return TestingInterface;
}());
// 10 - Override de metodos
var Base = /** @class */ (function () {
    function Base() {
    }
    Base.prototype.someMethod = function () {
        console.log("Alguma coisa");
    };
    return Base;
}());
var Nova = /** @class */ (function (_super) {
    __extends(Nova, _super);
    function Nova() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Nova.prototype.someMethod = function () {
        console.log("Alguma outra coisa !!!!");
    };
    return Nova;
}(Base));
var myObj = new Nova();
myObj.someMethod();
// 11 - public
var C = /** @class */ (function () {
    function C() {
        this.x = 10;
    }
    return C;
}());
var D = /** @class */ (function (_super) {
    __extends(D, _super);
    function D() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return D;
}(C));
var cInstance = new C();
var de = new D();
console.log(cInstance.x);
console.log(de.x);
// 12 - Protected
var E = /** @class */ (function () {
    function E() {
        this.x = 10;
    }
    E.prototype.protectedMethod = function () {
        console.log("Método Protegido");
    };
    return E;
}());
var F = /** @class */ (function (_super) {
    __extends(F, _super);
    function F() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    F.prototype.showX = function () {
        console.log("X: ".concat(this.x));
    };
    F.prototype.showProtectedMethod = function () {
        this.protectedMethod();
    };
    return F;
}(E));
var fInstance = new F();
console.log(fInstance.showProtectedMethod());
// 13 - Private
var PrivateClass = /** @class */ (function () {
    function PrivateClass() {
        this.name = "Private";
    }
    PrivateClass.prototype.showName = function () {
        return this.name;
    };
    PrivateClass.prototype.privateMethod = function () {
        console.log("M\u00E9todo privado !!");
    };
    PrivateClass.prototype.showPrivateMethod = function () {
        this.privateMethod();
    };
    return PrivateClass;
}());
var pObj = new PrivateClass();
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
var StaticMembers = /** @class */ (function () {
    function StaticMembers() {
    }
    StaticMembers.staticMethod = function () {
        console.log("Este e um metodo estatico !!");
    };
    StaticMembers.prop = "teste static";
    return StaticMembers;
}());
console.log(StaticMembers.prop);
console.log(StaticMembers.staticMethod());
// 15 - Generic Class
var Item = /** @class */ (function () {
    function Item(first, second) {
        this.first = first;
        this.second = second;
    }
    Object.defineProperty(Item.prototype, "showFirts", {
        get: function () {
            return "O primeiro \u00E9 ".concat(this.first);
        },
        enumerable: false,
        configurable: true
    });
    return Item;
}());
var novo = new Item("caixa", "SURPRESA");
console.log(novo);
console.log(novo.showFirts);
console.log(typeof novo.showFirts);
var novo2 = new Item(1, true);
console.log(novo2);
console.log(novo2.showFirts);
console.log(typeof novo2.first);
// 16 -  Parameter properties
var ParameterProperties = /** @class */ (function () {
    function ParameterProperties(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.name = name;
        this.qty = qty;
    }
    Object.defineProperty(ParameterProperties.prototype, "showQty", {
        get: function () {
            return "A quantidade total e ".concat(this.qty);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ParameterProperties.prototype, "showPrice", {
        get: function () {
            return "O preco total e ".concat(this.price);
        },
        enumerable: false,
        configurable: true
    });
    return ParameterProperties;
}());
var newShit = new ParameterProperties("camisa", 5, 19.85);
console.log(newShit.name);
//console.log(newShit.price);
console.log(newShit.showQty);
console.log(newShit.showPrice);
// 17 - Class Expressions
var myClass = /** @class */ (function () {
    function class_1(name) {
        this.name = name;
    }
    return class_1;
}());
var pessoa = new myClass("PEDRO");
console.log(pessoa);
console.log(pessoa.name);
// 18 - Abstract class
var Abstrata = /** @class */ (function () {
    function Abstrata() {
    }
    return Abstrata;
}());
//const newObj = new Abstrata();
var Abstract = /** @class */ (function (_super) {
    __extends(Abstract, _super);
    function Abstract(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    Abstract.prototype.showName = function () {
        console.log("O nome \u00E9 ".concat(this.name));
    };
    return Abstract;
}(Abstrata));
var newAbstract = new Abstract("Paulo");
console.log(newAbstract);
console.log(newAbstract.showName());
// 19 - Relacoes entre classes
var Dog = /** @class */ (function () {
    function Dog() {
    }
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat() {
    }
    return Cat;
}());
var cao = new Cat();
console.log(cao);
