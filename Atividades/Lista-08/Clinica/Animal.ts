import { Cliente } from "./Cliente";

export class Animal {
    private id: number;
    private nome: string;
    private especie: string;
    private dono: Cliente;

    constructor(id: number, nome: string, especie: string, dono: Cliente) {
        this.id = id;
        this.nome = nome;
        this.especie = especie;
        this.dono = dono;
    }

    public getId(): number {
        return this.id;
    }

    public getNome(): string {
        return this.nome;
    }

    public getEspecie(): string {
        return this.especie;
    }

    public getDono(): Cliente {
        return this.dono;
    }
}
