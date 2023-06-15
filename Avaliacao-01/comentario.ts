export class Comentario {
    private id: number;
    private texto: string;

    constructor(id: number, texto: string) {
        this.id = id;
        this.texto = texto;
    }

    public getId(): number {
        return this.id;
    }

    public getTexto(): string {
        return this.texto;
    }

    public static validate(texto: string): boolean {
        if (texto.includes("vereador") || texto.includes("presidente") ||
            texto.includes("senador") || texto.includes("deputado"))
            return false;
        return true;
    }
}