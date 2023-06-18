class PassageiroCarga extends Passageiro {
    private descricao: string;
    private peso: number;

    constructor(id: string, descricao: string, peso: number) {
        super(id);
        this.descricao = descricao;
        this.peso = peso;
    }

    public getDescricao(): string {
        return this.descricao;
    }

    public getPeso(): number {
        return this.peso;
    }
}