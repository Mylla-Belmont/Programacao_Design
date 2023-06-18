"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bilheteria = void 0;
var Evento_1 = require("./Evento");
var Cliente_1 = require("./Cliente");
var Bilheteria = /** @class */ (function () {
    function Bilheteria() {
        this.repClientes = new Map();
        this.repEventos = new Map();
    }
    Bilheteria.prototype.getRepVendas = function () {
        return this.repVendas;
    };
    Bilheteria.prototype.getRepClientes = function () {
        return this.repClientes;
    };
    Bilheteria.prototype.getRepEventos = function () {
        return this.repEventos;
    };
    Bilheteria.prototype.getCaixa = function () {
        return this.caixa;
    };
    Bilheteria.prototype.addCliente = function (nome, meia) {
        try {
            if (!this.repClientes.has(nome)) {
                this.repClientes.set(nome, new Cliente_1.Cliente(nome, meia));
                console.log("Cliente " + nome + " adicionado com sucesso!");
            }
            else {
                throw Error("Cliente " + nome + " já existente!");
            }
        }
        catch (error) {
            console.log(error.message);
        }
    };
    Bilheteria.prototype.addEvento = function (nome, preco) {
        try {
            if (!this.repEventos.has(nome)) {
                this.repEventos.set(nome, new Evento_1.Evento(nome, preco));
                console.log("Evento " + nome + " adicionado com sucesso!");
            }
            else {
                throw Error("Evento " + nome + " já existe!");
            }
        }
        catch (error) {
            console.log(error.message);
        }
    };
    Bilheteria.prototype.vender = function (nome_cliente, nome_evento) {
    };
    return Bilheteria;
}());
exports.Bilheteria = Bilheteria;
