import { Empresa } from "./Empresa";
import { Empregado } from "./Empregado";
import { Terceirizado } from "./Terceirizado";

let empresa: Empresa = new Empresa();
empresa.adicionaEmpregado(new Empregado("Wladimir", 40, 40.00));
empresa.adicionaEmpregado(new Empregado("Jose", 40, 100.00));
empresa.adicionaEmpregado(new Empregado("Manoel", 20, 80.00));
empresa.adicionaEmpregado(new Terceirizado("Joaquim", 8, 100.00, 200.0));
empresa.mostrarEmpregados(); 
empresa.calcularFolha();