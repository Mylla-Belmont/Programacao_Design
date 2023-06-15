"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vagao = void 0;
var Vagao = /** @class */ (function () {
    function Vagao(capacidade) {
        this.cadeiras = [];
        this.capacidade = capacidade;
        for (var index = 0; index < capacidade; index++)
            this.cadeiras.push(null);
    }
    Vagao.prototype.embarcar = function (pass) {
        for (var index = 0; index < this.cadeiras.length; index++)
            if (this.cadeiras[index] == null) {
                this.cadeiras[index] = pass;
                return true;
            }
        return false;
    };
    Vagao.prototype.desembarcar = function (idPass) {
        var _a;
        if (this.exists(idPass))
            for (var index = 0; index < this.cadeiras.length; index++)
                if (((_a = this.cadeiras[index]) === null || _a === void 0 ? void 0 : _a.getId()) == idPass) {
                    this.cadeiras[index] = null;
                    return true;
                }
        return false;
    };
    Vagao.prototype.exists = function (idPass) {
        var _a;
        for (var index = 0; index < this.cadeiras.length; index++)
            if (((_a = this.cadeiras[index]) === null || _a === void 0 ? void 0 : _a.getId()) == idPass)
                return true;
        return false;
    };
    Vagao.prototype.getPassageiros = function () {
        return this.cadeiras;
    };
    Vagao.prototype.toString = function () {
        var _a, _b;
        var saida = "[";
        for (var index = 0; index < this.cadeiras.length; index++)
            if (this.cadeiras[index] == null)
                saida += "_";
            else
                saida += " " + ((_a = this.cadeiras[index]) === null || _a === void 0 ? void 0 : _a.getId()) + ":" + ((_b = this.cadeiras[index]) === null || _b === void 0 ? void 0 : _b.getName());
        saida += " ]";
        return saida;
    };
    return Vagao;
}());
exports.Vagao = Vagao;
