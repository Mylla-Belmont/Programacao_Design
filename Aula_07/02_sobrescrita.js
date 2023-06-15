"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// - ContaCorrente -> rende 0.001% ao mês
// - ContaPoupança -> rende 0.5% ao mês
// - ContaInvestiento -> render 1% ao mês
var Conta = /** @class */ (function () {
    function Conta(nome) {
        this.nome = nome;
        this.saldo = 10.;
    }
    Conta.prototype.getSaldo = function () {
        return this.saldo;
    };
    Conta.prototype.render = function () {
        // rende nada
    };
    return Conta;
}());
var ContaPoupanca = /** @class */ (function (_super) {
    __extends(ContaPoupanca, _super);
    function ContaPoupanca() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // sobrescrita de métodos
    // Redefinir o definir exatamento o mesmo método e o método da superclasse deixa valer
    // 0,0001%
    // 0.000001
    ContaPoupanca.prototype.render = function () {
        this.saldo = this.saldo + this.saldo * 0.000001;
    };
    return ContaPoupanca;
}(Conta));
var contap = new ContaPoupanca("Victor");
console.log(contap.getSaldo());
// Chama sempre o da classe filha
// Chama o render de ContaPoupanca
contap.render();
console.log(contap.getSaldo());
