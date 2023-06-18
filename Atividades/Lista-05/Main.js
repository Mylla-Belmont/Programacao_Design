"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Empresa_1 = require("./Empresa");
var Empregado_1 = require("./Empregado");
var Terceirizado_1 = require("./Terceirizado");
var empresa = new Empresa_1.Empresa();
empresa.adicionaEmpregado(new Empregado_1.Empregado("Wladimir", 40, 40.00));
empresa.adicionaEmpregado(new Empregado_1.Empregado("Jose", 40, 100.00));
empresa.adicionaEmpregado(new Empregado_1.Empregado("Manoel", 20, 80.00));
empresa.adicionaEmpregado(new Terceirizado_1.Terceirizado("Joaquim", 8, 100.00, 200.0));
empresa.mostrarEmpregados();
empresa.calcularFolha();