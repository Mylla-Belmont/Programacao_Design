import { Comentario } from "./comentario";

export class Post {
    private texto: string;
    private comentarios: Comentario[];

    constructor(texto: string) {
        this.texto = texto;
        this.comentarios = [];
    }

    public setTexto(texto: string): void {
        this.texto = texto;
    }

    public getTexto(): string {
        return this.texto;
    }

    public getComentarios(): Comentario[] {
        return this.comentarios;
    }

    public getComentario(id: number): Comentario | null {
        for (let index = 0; index < this.comentarios.length; index++) {
            if (this.comentarios[index].getId() == id)
                return this.comentarios[index];
        }
        console.log("Fail. Comentário não existe");
        return null;
    }

    public adicionarComentario(comentario: Comentario): boolean {
        if (!Comentario.validate(comentario.getTexto())) {
            console.log("Fail. Comentário inválido");
            return false;
        }
        if (this.comentarios.length == 3) {
            console.log("Fail. Limite de comentários foi ultrapassado");
            return false;
        }
        this.comentarios.push(comentario);
        return true;
    }

    public removerComentario(id: number): boolean {
        for (let index = 0; index < this.comentarios.length; index++) {
            if (this.comentarios[index].getId() === id) {
                this.comentarios.splice(index, 1);
                return true;
            }
        }
        console.log("Fail. Comentário não existe");
        return false;
    }

    public toString(): string {
        let saida: string = "";
        for (let index = 0; index < this.comentarios.length; index++) 
            saida += "Comentário: " + this.comentarios[index].getTexto() + "\n";
        return "Post: " + this.texto + "\n"  + saida;
    }
}
