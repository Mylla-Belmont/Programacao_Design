"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
var comentario_1 = require("./comentario");
var Post = /** @class */ (function () {
    function Post(texto) {
        this.texto = texto;
        this.comentarios = [];
    }
    Post.prototype.setTexto = function (texto) {
        this.texto = texto;
    };
    Post.prototype.getTexto = function () {
        return this.texto;
    };
    Post.prototype.getComentarios = function () {
        return this.comentarios;
    };
    Post.prototype.getComentario = function (id) {
        for (var index = 0; index < this.comentarios.length; index++) {
            if (this.comentarios[index].getId() == id)
                return this.comentarios[index];
        }
        console.log("Fail. Comentário não existe");
        return null;
    };
    Post.prototype.adicionarComentario = function (comentario) {
        if (!comentario_1.Comentario.validate(comentario.getTexto())) {
            console.log("Fail. Comentário inválido");
            return false;
        }
        if (this.comentarios.length == 3) {
            console.log("Fail. Limite de comentários foi ultrapassado");
            return false;
        }
        this.comentarios.push(comentario);
        return true;
    };
    Post.prototype.removerComentario = function (id) {
        for (var index = 0; index < this.comentarios.length; index++) {
            if (this.comentarios[index].getId() === id) {
                this.comentarios.splice(index, 1);
                return true;
            }
        }
        console.log("Fail. Comentário não existe");
        return false;
    };
    Post.prototype.toString = function () {
        var saida = "";
        for (var index = 0; index < this.comentarios.length; index++)
            saida += "Comentário: " + this.comentarios[index].getTexto() + "\n";
        return "Post: " + this.texto + "\n" + saida;
    };
    return Post;
}());
exports.Post = Post;
