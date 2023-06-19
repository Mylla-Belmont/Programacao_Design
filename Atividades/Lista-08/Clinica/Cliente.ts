import { Animal } from "./Animal";

export class Cliente {
    private id: string;
    private nome: string;
    private animais: Animal[];

    constructor(id: string, nome: string) {
        this.id = id;
        this.nome = nome;
        this.animais = [];
    }

    public getId(): string {
        return this.id;
    }

    public getNome(): string {
        return this.nome;
    }

    public getAnimais(): Animal[] {
        return this.animais;
    }

    public addAnimal(animal: Animal): void {
        this.animais.push(animal);
    }
}  