class Trem {
    private vagoes: Vagao[];
    private maxVagoes: number;
    private vagoesCarga: VagaoPassageiro[];
    private vagoesPassageiro: VagaoPassageiro[];

    constructor(maxVagoes: number) {
        this.maxVagoes = maxVagoes;
    }

    public adicionarVagaoPassageiro(vagao: VagaoPassageiro): boolean {
        return true;
    }

    public adicionarVagao(vagao: VagaoPassageiro): boolean {
        return true;
    }

    public embarcarPessoa(pass: PassageiroPessoa): boolean {
        return true;
    }

    public embarcarCarga(pass: PassageiroCarga):boolean {
        return true;
    }

    public desembarcar(idPass: string) {
        return true;
    }

    public getVagoes(): Vagao[] {
        return this.vagoes;
    }

    public getVagoesPassageiro(): Vagao[] {
        return this.vagoes;
    }

    public getVagoesCarga(): Vagao[] {
        return this.vagoes;
    }
}