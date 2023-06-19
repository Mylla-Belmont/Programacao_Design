import { Venda } from "./Venda";
import { Evento } from "./Evento";
import { Cliente } from "./Cliente";

export class Bilheteria {
    private repVendas: Venda[];
    private repClientes: Map<string, Cliente>;
    private repEventos: Map<string, Evento>;
    private caixa: number;

    constructor() {
        this.repVendas = [];
        this.repClientes = new Map();
        this.repEventos = new Map();
        this.caixa = 0;
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
                    // Retorna cliente e evento para as constantes 
                    const cliente = this.repClientes.get(nome_cliente);
                    const evento = this.repEventos.get(nome_evento);
                    // Caso algum deles seja undefined, retorna erro. Se não, a venda é cadastrada
                    if (cliente !== undefined && evento !== undefined) {
                        this.repVendas.push(new Venda(cliente, evento));
                        this.caixa += evento.getPreco();
                    } else {
                        throw new Error("Cliente ou evento não encontrado!");
                    }    
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