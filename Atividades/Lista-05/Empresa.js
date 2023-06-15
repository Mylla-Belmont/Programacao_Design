"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empresa = void 0;
var Empresa = /** @class */ (function () {
    function Empresa() {
        this.empregados = [];
    }
    Empresa.prototype.adicionaEmpregado = function (empregado) {
        this.empregados.push(empregado);
    };
    Empresa.prototype.mostrarEmpregados = function () {
        console.log("Empresa:");
        for (var index = 0; index < this.empregados.length; index++)
            console.log(this.empregados[index].toString());
    };
    Empresa.prototype.calcularFolha = function () {
        var folha = 0;
        for (var index = 0; index < this.empregados.length; index++)
            folha += this.empregados[index].pagamento();
        console.log("Folha de pagamento: " + folha);
    };
    return Empresa;
}());
exports.Empresa = Empresa;
