export class Cliente {
    private nome: string;
    private meia: boolean;

    constructor(nome: string, meia: boolean) {
        this.nome = nome;
        this.meia = meia;
    }

    public getNome(): string {
        return this.nome;
    }

    public getMeia(): boolean {
        return this.meia;
    }
}