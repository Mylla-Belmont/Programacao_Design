"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
var Cliente = /** @class */ (function () {
    function Cliente(id, nome) {
        this.id = id;
        this.nome = nome;
        this.animais = [];
    }
    Cliente.prototype.getId = function () {
        return this.id;
    };
    Cliente.prototype.getNome = function () {
        return this.nome;
    };
    Cliente.prototype.getAnimais = function () {
        return this.animais;
    };
    Cliente.prototype.addAnimal = function (animal) {
        this.animais.push(animal);
    };
    return Cliente;
}());
exports.Cliente = Cliente;
