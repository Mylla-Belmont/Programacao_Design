export class Servico {
    private id: number;
    private nome: string;
    private valor: number;

    constructor(id: number, nome: string, valor: number) {
        this.id = id;
        this.nome = nome;
        this.valor = valor;
    }

    public getId(): number {
        return this.id;
    }

    public getNome(): string {
        return this.nome;
    }

    public getValor(): number {
        return this.valor;
    }
}  