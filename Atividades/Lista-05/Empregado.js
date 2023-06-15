"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empregado = void 0;
var Empregado = /** @class */ (function () {
    function Empregado(nome, horas, valorPorHora) {
        this.nome = nome;
        this.horas = horas;
        this.valorPorHora = valorPorHora;
    }
    Empregado.prototype.pagamento = function () {
        return this.horas * this.valorPorHora;
    };
    Empregado.prototype.toString = function () {
        return "Nome: " + this.nome +
            ", horas trabalhadas: " + this.horas +
            ", valor por hora: " + this.valorPorHora;
    };
    return Empregado;
}());
exports.Empregado = Empregado;
