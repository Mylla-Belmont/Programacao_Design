abstract class Vagao {
    private capacidade: number;
    private cadeiras: (Passageiro|null)[] = [];

    constructor(capacidade: number) {
        this.capacidade = capacidade;
    }

    public desembarcar(idPass: string) {

    }

    public getPassageiros(): (Passageiro|null) {
        return null;
    }
}