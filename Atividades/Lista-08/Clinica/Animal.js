"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
var Animal = /** @class */ (function () {
    function Animal(id, nome, especie, dono) {
        this.id = id;
        this.nome = nome;
        this.especie = especie;
        this.dono = dono;
    }
    Animal.prototype.getId = function () {
        return this.id;
    };
    Animal.prototype.getNome = function () {
        return this.nome;
    };
    Animal.prototype.getEspecie = function () {
        return this.especie;
    };
    Animal.prototype.getDono = function () {
        return this.dono;
    };
    return Animal;
}());
exports.Animal = Animal;
