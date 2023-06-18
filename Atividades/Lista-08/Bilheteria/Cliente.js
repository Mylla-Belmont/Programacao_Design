"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
var Cliente = /** @class */ (function () {
    function Cliente(nome, meia) {
        this.nome = nome;
        this.meia = meia;
    }
    Cliente.prototype.getNome = function () {
        return this.nome;
    };
    Cliente.prototype.getMeia = function () {
        return this.meia;
    };
    return Cliente;
}());
exports.Cliente = Cliente;
