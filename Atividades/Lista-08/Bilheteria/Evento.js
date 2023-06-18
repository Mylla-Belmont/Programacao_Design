"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Evento = void 0;
var Evento = /** @class */ (function () {
    function Evento(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    Evento.prototype.getNome = function () {
        return this.nome;
    };
    Evento.prototype.getPreco = function () {
        return this.preco;
    };
    return Evento;
}());
exports.Evento = Evento;
