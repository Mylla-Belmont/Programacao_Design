"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Venda = void 0;
var Venda = /** @class */ (function () {
    function Venda(id_venda, id_cliente, id_animal, id_servico) {
        this.id_venda = id_venda;
        this.id_animal = id_animal;
        this.id_cliente = id_cliente;
        this.id_servico = id_servico;
    }
    Venda.prototype.getIdVenda = function () {
        return this.id_venda;
    };
    Venda.prototype.getIdAnimal = function () {
        return this.id_animal;
    };
    Venda.prototype.getIdCliente = function () {
        return this.id_cliente;
    };
    Venda.prototype.getIdServico = function () {
        return this.id_servico;
    };
    return Venda;
}());
exports.Venda = Venda;
