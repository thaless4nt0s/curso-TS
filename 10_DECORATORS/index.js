// 1 - Exemplo decorator
// --target ES5 --emitDecoratorMetadata --experimentalDecorators
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function myDecorator() {
    console.log("Iniciando decorator");
    return function (target, propertKey, description) {
        console.log(target);
        console.log(propertKey);
        console.log(description);
    };
}
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.prototype.testing = function () {
        console.log("Treinando a execucao");
    };
    __decorate([
        myDecorator(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MyClass.prototype, "testing", null);
    return MyClass;
}());
var myObj = new MyClass();
myObj.testing();
// 2 - Multiplos decorators
function a() {
    return function (target, propertKey, description) {
        console.log("Iniciando A");
    };
}
function b() {
    return function (target, propertKey, description) {
        console.log("Iniciando b");
    };
}
function c() {
    return function (target, propertKey, description) {
        console.log("Iniciando c");
    };
}
var Multiple = /** @class */ (function () {
    function Multiple() {
    }
    Multiple.prototype.testing = function () {
        console.log("Treinando a execucao");
    };
    __decorate([
        a(),
        b(),
        c(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Multiple.prototype, "testing", null);
    return Multiple;
}());
var mult = new Multiple();
mult.testing();
// 3 - Decorator de classe
function classDec(constructor) {
    console.log(constructor.name);
    if (constructor.name === "User") {
        console.log("Um usuario foi criado");
    }
}
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    User = __decorate([
        classDec,
        __metadata("design:paramtypes", [String])
    ], User);
    return User;
}());
var matheus = new User("Matheus");
// 4 - Decorator de método
function enumerable(value) {
    return function (target, propertKey, descriptor) {
        descriptor.enumerable = value;
    };
}
var Machine = /** @class */ (function () {
    function Machine(name) {
        this.name = name;
    }
    Machine.prototype.showName = function () {
        console.log(this);
        return "O nome da maquina e ".concat(this.name);
    };
    __decorate([
        enumerable(false),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Machine.prototype, "showName", null);
    return Machine;
}());
var trator = new Machine("Trator");
console.log(trator.showName());
// 5 - Acessor decorator
var Monster = /** @class */ (function () {
    function Monster(name, age) {
        this.name = name;
        this.age = age;
    }
    Object.defineProperty(Monster.prototype, "showName", {
        get: function () {
            return "Nome do monstro: ".concat(this.name);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Monster.prototype, "showAge", {
        get: function () {
            return "A idade do monstro: ".concat(this.age);
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        enumerable(true),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], Monster.prototype, "showName", null);
    __decorate([
        enumerable(true),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], Monster.prototype, "showAge", null);
    return Monster;
}());
var charmander = new Monster("Charmander", 35);
console.log(charmander);
// 6 - Property decorator
function formatNumber() {
    return function (target, propertKey) {
        var value;
        var getter = function () {
            return value;
        };
        var setter = function (newVal) {
            value = newVal.padStart(5, "0");
        };
        Object.defineProperty(target, propertKey, {
            set: setter,
            get: getter
        });
    };
}
var Id = /** @class */ (function () {
    function Id(id) {
        this.id = id;
    }
    __decorate([
        formatNumber(),
        __metadata("design:type", Object)
    ], Id.prototype, "id", void 0);
    return Id;
}());
var item = new Id("1");
console.log(item.id);
// 7 - Exemplo  com Class Decorator
function createDate(created) {
    created.prototype.createdAt = new Date();
}
var Book = /** @class */ (function () {
    function Book(id) {
        this.id = id;
    }
    Book = __decorate([
        createDate,
        __metadata("design:paramtypes", [Number])
    ], Book);
    return Book;
}());
var Pen = /** @class */ (function () {
    function Pen(id) {
        this.id = id;
    }
    Pen = __decorate([
        createDate,
        __metadata("design:paramtypes", [Number])
    ], Pen);
    return Pen;
}());
var newBook = new Book(12);
var newPen = new Pen(14);
console.log(newBook);
console.log(newPen);
// 8 - Exemplo real Method Decorator
function checkIfUserPosted() {
    return function (target, keys, descriptor) {
        var childFunction = descriptor.value;
        console.log(childFunction);
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (args[1] === true) {
                console.log("Usu\u00E1rio j\u00E1 postou");
                return null;
            }
            else {
                return childFunction.apply(this, args);
            }
        };
        return descriptor;
    };
}
var Post = /** @class */ (function () {
    function Post() {
        this.alreadyPosted = false;
    }
    Post.prototype.post = function (content, alreadyPosted) {
        this.alreadyPosted = true;
        console.log("Post do usuario: ".concat(content));
    };
    __decorate([
        checkIfUserPosted(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Boolean]),
        __metadata("design:returntype", void 0)
    ], Post.prototype, "post", null);
    return Post;
}());
var postagem = new Post();
postagem.post("Meu primeiro Post", postagem.alreadyPosted);
postagem.post("Meu segundo Post", postagem.alreadyPosted);
postagem.post("Meu terceiro Post", postagem.alreadyPosted);
// 9 - Exemplo real Property Decorator
function max(limit) {
    return function (target, propertKey) {
        var value;
        var getter = function () {
            return value;
        };
        var setter = function (newVal) {
            if (newVal.length > limit) {
                console.log("O valor deve ter no maximo ".concat(limit, " d\u00EDgitos !!"));
            }
        };
        Object.defineProperty(target, propertKey, { get: getter, set: setter });
    };
}
var Admin = /** @class */ (function () {
    function Admin(username) {
        this.username = username;
    }
    __decorate([
        max(10),
        __metadata("design:type", Object)
    ], Admin.prototype, "username", void 0);
    return Admin;
}());
var ademir = new Admin("Thaloko");
var ademir2 = new Admin("qwertyuiol.,mnbv");
