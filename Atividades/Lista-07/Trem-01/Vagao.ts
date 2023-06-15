import { Passageiro } from "./Passageiro";

export class Vagao {
    private cadeiras: (Passageiro | null)[] = [];
    private capacidade: number;

    constructor(capacidade: number) {
        this.capacidade = capacidade;
        for (let index = 0; index < capacidade; index++)
            this.cadeiras.push(null);
    }

    public embarcar(pass: Passageiro): boolean {
        for (let index = 0; index < this.cadeiras.length; index++)
            if (this.cadeiras[index] == null) {
                this.cadeiras[index] = pass;
                return true;
            }
        return false;
    }

    public desembarcar(idPass: string): boolean {
        if (this.exists(idPass))
            for (let index = 0; index < this.cadeiras.length; index++)
                if (this.cadeiras[index]?.getId() == idPass) {
                    this.cadeiras[index] = null;
                    return true;
                }
        return false;
    }

    public exists(idPass: string): boolean {
        for (let index = 0; index < this.cadeiras.length; index++)
            if (this.cadeiras[index]?.getId() == idPass)
                return true;
        return false;
    }

    public getPassageiros(): (Passageiro | null)[] {
        return this.cadeiras;
    }

    public toString(): string {
        let saida: string = "[";
        for (let index = 0; index < this.cadeiras.length; index++)
            if (this.cadeiras[index] == null)
                saida += "_";
            else
                saida += " " + this.cadeiras[index]?.getId() + ":" + this.cadeiras[index]?.getName();
        saida += " ]"
        return saida;
    }
}