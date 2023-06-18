"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Venda = void 0;
var Venda = /** @class */ (function () {
    function Venda(cliente, evento) {
        this.cliente = cliente;
        this.evento = evento;
    }
    Venda.prototype.getCliente = function () {
        return this.cliente;
    };
    Venda.prototype.getEvento = function () {
        return this.evento;
    };
    return Venda;
}());
exports.Venda = Venda;
