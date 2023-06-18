import { Evento } from "./Evento";
import { Cliente } from "./Cliente";

export class Venda {
    private cliente: Cliente;
    private evento: Evento;

    constructor(cliente: Cliente, evento: Evento) {
        this.cliente = cliente;
        this.evento = evento;
    }

    public getCliente(): Cliente {
        return this.cliente;
    }

    public getEvento(): Evento {
        return this.evento;
    }
}