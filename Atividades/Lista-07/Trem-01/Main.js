"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Trem_1 = require("./Trem");
var Vagao_1 = require("./Vagao");
var Passageiro_1 = require("./Passageiro");
// Inicializaçõ dos vagões
var vagao_1 = new Vagao_1.Vagao(1);
var vagao_2 = new Vagao_1.Vagao(2);
var vagao_3 = new Vagao_1.Vagao(3);
// Inicialização do trem + erro maxVagões
var trem = new Trem_1.Trem(1);
trem.adicionarVagao(vagao_1);
trem.adicionarVagao(vagao_2);
trem.adicionarVagao(vagao_3);
// Embarcar passageiros + erro MaxPassageiros
trem.embarcar(new Passageiro_1.Passageiro("1", "A"));
trem.embarcar(new Passageiro_1.Passageiro("2", "B"));
trem.embarcar(new Passageiro_1.Passageiro("3", "C"));
console.log(trem.toString());
// Desembarcar Passageiro
trem.desembarcar("1");
trem.desembarcar("2");
console.log(trem.toString());
