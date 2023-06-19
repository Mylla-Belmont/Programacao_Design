import { Venda } from "./Venda";
import { Evento } from "./Evento";
import { Cliente } from "./Cliente";
import { Bilheteria } from "./Bilheteria";

let bilheteria = new Bilheteria();
bilheteria.addCliente("A", true); 
bilheteria.addCliente("A", false); 
bilheteria.addCliente("B", false); 
console.log(Object.fromEntries(bilheteria.getRepClientes()));

bilheteria.addEvento("Festa", 10);
bilheteria.addEvento("Festa", 20);
bilheteria.addEvento("Cinema", 10);
bilheteria.addEvento("Aniversario", 5);
console.log(Object.fromEntries(bilheteria.getRepEventos()));

bilheteria.vender("A", "Festa");
bilheteria.vender("B", "Cinema");
bilheteria.vender("B", "Dança");
bilheteria.vender("C", "Capoeira");
console.log(bilheteria.getRepVendas());

console.log("Valor das compras: " + bilheteria.getCaixa());
