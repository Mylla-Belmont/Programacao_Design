class PassageiroPessoa extends Passageiro {
    private nome: string;

    constructor(id: string, nome: string) {
        super(id);
        this.nome = nome;
    }

    public getName(): string {
        return this.nome;
    }
}