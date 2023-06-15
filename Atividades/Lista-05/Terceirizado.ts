import { Empregado } from "./Empregado";

export class Terceirizado extends Empregado {
    private despesaAdicional: number;

    constructor(nome: string, horas: number, valorPorHora: number, despesaAdicional: number) {
        super(nome, horas, valorPorHora);
        this.despesaAdicional = despesaAdicional;
    }

    public pagamento(): number {
        return (this.horas * this.valorPorHora) + this.despesaAdicional;
    }

    public toString(): string {
        return "Nome: " + this.nome +
            ", horas trabalhadas: " + this.horas +
            ", valor por hora: " + this.valorPorHora + 
            ", despesa adicional: " + this.despesaAdicional;
    }
}