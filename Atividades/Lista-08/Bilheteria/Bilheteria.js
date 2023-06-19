"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bilheteria = void 0;
var Venda_1 = require("./Venda");
var Evento_1 = require("./Evento");
var Cliente_1 = require("./Cliente");
var Bilheteria = /** @class */ (function () {
    function Bilheteria() {
        this.repVendas = [];
        this.repClientes = new Map();
        this.repEventos = new Map();
        this.caixa = 0;
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
        try {
            if (this.repClientes.has(nome_cliente)) {
                if (this.repEventos.has(nome_evento)) {
                    // Retorna cliente e evento para as constantes 
                    var cliente = this.repClientes.get(nome_cliente);
                    var evento = this.repEventos.get(nome_evento);
                    // Caso algum deles seja undefined, retorna erro. Se não, a venda é cadastrada
                    if (cliente !== undefined && evento !== undefined) {
                        this.repVendas.push(new Venda_1.Venda(cliente, evento));
                        this.caixa += evento.getPreco();
                    }
                    else {
                        throw new Error("Cliente ou evento não encontrado!");
                    }
                }
                else {
                    throw Error("Evento não existe!");
                }
            }
            else {
                throw Error("Comprador não cadastrado!");
            }
        }
        catch (error) {
            console.log(error.message);
        }
    };
    return Bilheteria;
}());
exports.Bilheteria = Bilheteria;
