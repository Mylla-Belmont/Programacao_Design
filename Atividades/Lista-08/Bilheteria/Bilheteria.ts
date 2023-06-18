import { Venda } from "./Venda";
import { Evento } from "./Evento";
import { Cliente } from "./Cliente";

export class Bilheteria {
    private repVendas: Venda[];
    private repClientes: Map<string, Cliente>;
    private repEventos: Map<string, Evento>;
    private caixa: number;

    constructor() {
        this.repClientes = new Map();
        this.repEventos = new Map();
    }

    public getRepVendas(): Venda[] {
        return this.repVendas;
    }

    public getRepClientes(): Map<string, Cliente> {
        return this.repClientes;
    }

    public getRepEventos(): Map<string, Evento> {
        return this.repEventos;
    }

    public getCaixa(): number {
        return this.caixa;
    }

    public addCliente(nome: string, meia: boolean): void {
        try {
            if (!this.repClientes.has(nome)) {
                this.repClientes.set(nome, new Cliente(nome, meia));
                console.log("Cliente " + nome + " adicionado com sucesso!");
            } else {
                throw Error("Cliente " + nome + " já existente!");
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    public addEvento(nome: string, preco: number): void {
        try {
            if (!this.repEventos.has(nome)) {
                this.repEventos.set(nome, new Evento(nome, preco));
                console.log("Evento " + nome + " adicionado com sucesso!");
            } else {
                throw Error("Evento " + nome + " já existe!");
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    public vender(nome_cliente: string, nome_evento: string): void {
        try {
            if (this.repClientes.has(nome_cliente)) {
                if (this.repEventos.has(nome_evento)) {
                    this.repVendas.push(new Venda(this.repClientes.get(nome_cliente), nome_evento));
                } else {
                    throw Error("Evento não existe!");
                }
            } else {
                throw Error("Comprador não cadastrado!");
            }
        } catch (error) {
            console.log(error.message);
        }
    }
}