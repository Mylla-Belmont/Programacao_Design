export class Empregado {
    protected nome: string;
    protected horas: number;
    protected valorPorHora: number;

    constructor(nome: string, horas: number, valorPorHora: number) {
        this.nome = nome;
        this.horas = horas;
        this.valorPorHora = valorPorHora;
    }

    public pagamento(): number {
        return this.horas * this.valorPorHora;
    }

    public toString(): string {
        return "Nome: " + this.nome +
            ", horas trabalhadas: " + this.horas +
            ", valor por hora: " + this.valorPorHora;
    }
}