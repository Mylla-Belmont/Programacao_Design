"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Servico = void 0;
var Servico = /** @class */ (function () {
    function Servico(id, nome, valor) {
        this.id = id;
        this.nome = nome;
        this.valor = valor;
    }
    Servico.prototype.getId = function () {
        return this.id;
    };
    Servico.prototype.getNome = function () {
        return this.nome;
    };
    Servico.prototype.getValor = function () {
        return this.valor;
    };
    return Servico;
}());
exports.Servico = Servico;
