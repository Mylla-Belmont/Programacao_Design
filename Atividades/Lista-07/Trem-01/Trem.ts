import { Vagao } from "./Vagao";
import { Passageiro } from "./Passageiro";

export class Trem {
    private maxVagoes: number;
    private vagoes: Vagao[] = [];

    constructor(maxVagoes: number) {
        this.maxVagoes = maxVagoes;
        this.vagoes[maxVagoes];
    }

    public adicionarVagao(vagao: Vagao): boolean {
        if (this.vagoes.length <= this.maxVagoes){
            this.vagoes.push(vagao);
            return true;
        }
        return false;
    }

    public embarcar(pass: Passageiro): boolean {
        for (let index = 0; index < this.vagoes.length; index++)
            if (this.vagoes[index].embarcar(pass))
                return true;
        return false;
    }

    public desembarcar(idPass: string) {
        for (let index = 0; index < this.vagoes.length; index++)
            if (this.vagoes[index].desembarcar(idPass))
                return true;
        return false;
    }

    private exists(idPass: string): Vagao | null {
        for (let index = 0; index < this.vagoes.length; index++)
            if (this.vagoes[index].exists(idPass))
                return this.vagoes[index];
        return null;
    }

    public getVagoes(): Vagao[] {
        return this.vagoes;
    }

    public toString(): string {
        let saida: string = "Trem = {"
        for (let index = 0; index < this.vagoes.length; index++)
            saida += this.vagoes[index].toString();
        return saida += "}";
    }
}