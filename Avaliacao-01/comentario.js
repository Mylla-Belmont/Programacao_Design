"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comentario = void 0;
var Comentario = /** @class */ (function () {
    function Comentario(id, texto) {
        this.id = id;
        this.texto = texto;
    }
    Comentario.prototype.getId = function () {
        return this.id;
    };
    Comentario.prototype.getTexto = function () {
        return this.texto;
    };
    Comentario.validate = function (texto) {
        if (texto.includes("vereador") || texto.includes("presidente") ||
            texto.includes("senador") || texto.includes("deputado"))
            return false;
        return true;
    };
    return Comentario;
}());
exports.Comentario = Comentario;
