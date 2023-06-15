"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trem = void 0;
var Trem = /** @class */ (function () {
    function Trem(maxVagoes) {
        this.vagoes = [];
        this.maxVagoes = maxVagoes;
        this.vagoes[maxVagoes];
    }
    Trem.prototype.adicionarVagao = function (vagao) {
        if (this.vagoes.length <= this.maxVagoes) {
            this.vagoes.push(vagao);
            return true;
        }
        return false;
    };
    Trem.prototype.embarcar = function (pass) {
        for (var index = 0; index < this.vagoes.length; index++)
            if (this.vagoes[index].embarcar(pass))
                return true;
        return false;
    };
    Trem.prototype.desembarcar = function (idPass) {
        for (var index = 0; index < this.vagoes.length; index++)
            if (this.vagoes[index].desembarcar(idPass))
                return true;
        return false;
    };
    Trem.prototype.exists = function (idPass) {
        for (var index = 0; index < this.vagoes.length; index++)
            if (this.vagoes[index].exists(idPass))
                return this.vagoes[index];
        return null;
    };
    Trem.prototype.getVagoes = function () {
        return this.vagoes;
    };
    Trem.prototype.toString = function () {
        var saida = "Trem = {";
        for (var index = 0; index < this.vagoes.length; index++)
            saida += this.vagoes[index].toString();
        return saida += "}";
    };
    return Trem;
}());
exports.Trem = Trem;
