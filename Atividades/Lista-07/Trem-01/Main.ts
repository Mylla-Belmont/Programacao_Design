import { Trem } from "./Trem";
import { Vagao } from "./Vagao";
import { Passageiro } from "./Passageiro";

// Inicializaçõ dos vagões
let vagao_1: Vagao = new Vagao(1);
let vagao_2: Vagao = new Vagao(2);
let vagao_3: Vagao = new Vagao(3);

// Inicialização do trem + erro maxVagões
let trem: Trem =  new Trem(1);
trem.adicionarVagao(vagao_1);
trem.adicionarVagao(vagao_2);
trem.adicionarVagao(vagao_3);

// Embarcar passageiros + erro MaxPassageiros
trem.embarcar(new Passageiro("1", "A"));
trem.embarcar(new Passageiro("2", "B"));
trem.embarcar(new Passageiro("3", "C"));
console.log(trem.toString());

// Desembarcar Passageiro
trem.desembarcar("1");
trem.desembarcar("2");
console.log(trem.toString());
