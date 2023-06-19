"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clinica = void 0;
var Venda_1 = require("./Venda");
var Cliente_1 = require("./Cliente");
var Servico_1 = require("./Servico");
var Animal_1 = require("./Animal");
var Clinica = /** @class */ (function () {
    function Clinica() {
        this.nextServicoId = 0;
        this.nextAnimalId = 0;
        this.nextVendaId = 0;
        this.nextClienteId = 0;
        this.servicos = [];
        this.vendas = [];
        this.clientes = [];
    }
    Clinica.prototype.addCliente = function (nome) {
        try {
            if (!this.clientes.some(function (cliente) { return cliente.getNome() === nome; })) {
                this.clientes.push(new Cliente_1.Cliente(String(this.nextClienteId++), nome));
            }
            else {
                throw new Error("Cliente já existente!");
            }
        }
        catch (error) {
            console.log(error.message);
        }
    };
    Clinica.prototype.addServico = function (nome, valor) {
        try {
            if (!this.servicos.some(function (servico) { return servico.getNome() === nome; })) {
                this.servicos.push(new Servico_1.Servico(this.nextServicoId++, nome, valor));
            }
            else {
                throw new Error("Serviço já existente!");
            }
        }
        catch (error) {
            console.log(error.message);
        }
    };
    Clinica.prototype.addAnimal = function (idCliente, nomeAnimal, especie) {
        try {
            var cliente = this.clientes.find(function (cliente) { return cliente.getId() === String(idCliente); });
            if (!cliente) {
                throw new Error("Cliente não encontrado!");
            }
            if (cliente.getAnimais().some(function (animal) { return animal.getNome() === nomeAnimal; })) {
                throw new Error("Animal já existente para o cliente!");
            }
            cliente.addAnimal(new Animal_1.Animal(this.nextAnimalId++, nomeAnimal, especie, cliente));
        }
        catch (error) {
            console.log(error.message);
        }
    };
    Clinica.prototype.vender = function (idCliente, idAnimal, idServico) {
        try {
            var cliente = this.clientes.find(function (cliente) { return cliente.getId() === String(idCliente); });
            if (!cliente) {
                throw new Error("Cliente não encontrado!");
            }
            var animal = cliente.getAnimais().find(function (animal) { return animal.getId() === idAnimal; });
            if (!animal) {
                throw new Error("Animal não encontrado para o cliente!");
            }
            var servico = this.servicos.find(function (servico) { return servico.getId() === idServico; });
            if (!servico) {
                throw new Error("Serviço não encontrado!");
            }
            this.vendas.push(new Venda_1.Venda(this.nextVendaId++, idCliente, idAnimal, idServico));
        }
        catch (error) {
            console.log(error.message);
        }
    };
    Clinica.prototype.getSaldo = function () {
        var saldo = 0;
        var _loop_1 = function (venda) {
            var servico = this_1.servicos.find(function (servico) { return servico.getId() === venda.getIdServico(); });
            if (servico) {
                saldo += servico.getValor();
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = this.vendas; _i < _a.length; _i++) {
            var venda = _a[_i];
            _loop_1(venda);
        }
        return saldo;
    };
    Clinica.prototype.getClientes = function () {
        return this.clientes;
    };
    Clinica.prototype.getServicos = function () {
        return this.servicos;
    };
    Clinica.prototype.getVendas = function () {
        return this.vendas;
    };
    return Clinica;
}());
exports.Clinica = Clinica;
