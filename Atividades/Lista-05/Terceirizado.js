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
exports.Terceirizado = void 0;
var Empregado_1 = require("./Empregado");
var Terceirizado = /** @class */ (function (_super) {
    __extends(Terceirizado, _super);
    function Terceirizado(nome, horas, valorPorHora, despesaAdicional) {
        var _this = _super.call(this, nome, horas, valorPorHora) || this;
        _this.despesaAdicional = despesaAdicional;
        return _this;
    }
    Terceirizado.prototype.pagamento = function () {
        return (this.horas * this.valorPorHora) + this.despesaAdicional;
    };
    Terceirizado.prototype.toString = function () {
        return "Nome: " + this.nome +
            ", horas trabalhadas: " + this.horas +
            ", valor por hora: " + this.valorPorHora +
            ", despesa adicional: " + this.despesaAdicional;
    };
    return Terceirizado;
}(Empregado_1.Empregado));
exports.Terceirizado = Terceirizado;
