import { Venda } from "./Venda";
import { Cliente } from "./Cliente";
import { Servico } from "./Servico";
import { Animal } from "./Animal";

export class Clinica {
    private nextServicoId: number;
    private nextAnimalId: number;
    private nextVendaId: number;
    private nextClienteId: number;
    private servicos: Servico[];
    private vendas: Venda[];
    private clientes: Cliente[];

    constructor() {
        this.nextServicoId = 0;
        this.nextAnimalId = 0;
        this.nextVendaId = 0;
        this.nextClienteId = 0;
        this.servicos = [];
        this.vendas = [];
        this.clientes = [];
    }

    public addCliente(nome: string): void {
        try {
            if (!this.clientes.some(cliente => cliente.getNome() === nome)) {
                this.clientes.push(new Cliente(String(this.nextClienteId++), nome));
            } else {
                throw new Error("Cliente já existente!");
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    public addServico(nome: string, valor: number): void {
        try {
            if (!this.servicos.some(servico => servico.getNome() === nome)) {
                this.servicos.push(new Servico(this.nextServicoId++, nome, valor));
            } else {
                throw new Error("Serviço já existente!");
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    public addAnimal(idCliente: number, nomeAnimal: string, especie: string): void {
        try {
            const cliente = this.clientes.find(cliente => cliente.getId() === String(idCliente));
            if (!cliente) {
                throw new Error("Cliente não encontrado!");
            }
            if (cliente.getAnimais().some(animal => animal.getNome() === nomeAnimal)) {
                throw new Error("Animal já existente para o cliente!");
            }
            cliente.addAnimal(new Animal(this.nextAnimalId++, nomeAnimal, especie, cliente));
        } catch (error) {
            console.log(error.message);
        }
    }

    public vender(idCliente: number, idAnimal: number, idServico: number): void {
        try {
            const cliente = this.clientes.find(cliente => cliente.getId() === String(idCliente));
            if (!cliente) {
                throw new Error("Cliente não encontrado!");
            }
            const animal = cliente.getAnimais().find(animal => animal.getId() === idAnimal);
            if (!animal) {
                throw new Error("Animal não encontrado para o cliente!");
            }
            const servico = this.servicos.find(servico => servico.getId() === idServico);
            if (!servico) {
                throw new Error("Serviço não encontrado!");
            }
            this.vendas.push(new Venda(this.nextVendaId++, idCliente, idAnimal, idServico));
        } catch (error) {
            console.log(error.message);
        }
    }

    public getSaldo(): number {
        let saldo = 0;
        for (const venda of this.vendas) {
            const servico = this.servicos.find(servico => servico.getId() === venda.getIdServico());
            if (servico) {
                saldo += servico.getValor();
            }
        }
        return saldo;
    }

    public getClientes(): Cliente[] {
        return this.clientes;
    }

    public getServicos(): Servico[] {
        return this.servicos;
    }

    public getVendas(): Venda[] {
        return this.vendas;
    }
}
