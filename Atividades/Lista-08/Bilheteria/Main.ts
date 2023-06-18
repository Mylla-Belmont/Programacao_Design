import { Venda } from "./Venda";
import { Evento } from "./Evento";
import { Cliente } from "./Cliente";
import { Bilheteria } from "./Bilheteria";

let bilheteria = new Bilheteria();
bilheteria.addCliente("A", true); 
bilheteria.addCliente("A", false); 
bilheteria.addCliente("B", false); 

bilheteria.addEvento("Festa", 10);
bilheteria.addEvento("Festa", 20);
bilheteria.addEvento("Cinema", 10);
bilheteria.addEvento("Aniversário", 5);
