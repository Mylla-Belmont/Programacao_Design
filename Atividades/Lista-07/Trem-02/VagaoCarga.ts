class VagaoCarga extends Vagao {
    private pesoMaximo: number;

    constructor(capacidade: number, pesoMaximo: number) {
        super(capacidade);
        this.pesoMaximo = pesoMaximo;
    }

    public embarcar(pass: PassageiroCarga): boolean {
        return true;
    }
}