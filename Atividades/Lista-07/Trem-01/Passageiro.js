"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Passageiro = void 0;
var Passageiro = /** @class */ (function () {
    function Passageiro(id, nome) {
        this.id = id;
        this.nome = nome;
    }
    Passageiro.prototype.getId = function () {
        return this.id;
    };
    Passageiro.prototype.getName = function () {
        return this.nome;
    };
    return Passageiro;
}());
exports.Passageiro = Passageiro;
