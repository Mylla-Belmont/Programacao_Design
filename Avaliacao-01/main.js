"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var post_1 = require("./post");
var comentario_1 = require("./comentario");
//////////////////
// Testando gets e sets
var post = new post_1.Post("Boa tarde, amigos!");
console.log(post.getTexto());
// Boa tarde, amigos!
post.setTexto("Boa noite, família!");
console.log(post.getTexto());
// Boa noite, família!
console.log(post.getComentarios());
// []
//////////// Adicionar e remover comentários
post.adicionarComentario(new comentario_1.Comentario(1, "Tudo bem, meu consagrado?"));
post.adicionarComentario(new comentario_1.Comentario(2, "Faaaala, meu chegado"));
console.log(post.getComentarios());
// [{id:1, texto:"Tudo bem, meu consagrado?"}, {id:2, texto:"Faaaala, meu chegado"}]
// Removendo comentário
post.removerComentario(1);
console.log(post.getComentarios());
// [{id:1, texto:"Faaaala, meu chegado"}]
console.log(post.getComentario(2));
// {id:1, texto:"Faaaala, meu chegado"}
console.log(post.getComentario(1));
// Fail. Comentário não existe
post.removerComentario(1);
// Fail. Comentário não existe
post.adicionarComentario(new comentario_1.Comentario(3, "Dizz Parceiro! "));
post.adicionarComentario(new comentario_1.Comentario(4, "Diga lá, grande!"));
post.adicionarComentario(new comentario_1.Comentario(5, "Tudo tranquilo, brother?"));
// Fail. Limite de comentários foi ultrapassado
// /////////////////////
// // toString
console.log(post.toString());
// Post: Boa noite, família!
// Comentário: Faaaala, meu chegado
// Comentário: Dizz Parceiro! 
// Comentário: Diga lá, grande!
/////////////////////
// validate
console.log(comentario_1.Comentario.validate("O deputado xpto é o melhor do nordeste"));
// False
console.log(comentario_1.Comentario.validate("O vereador abc não faz nada"));
// False
console.log(comentario_1.Comentario.validate("Já jogaram LoL?"));
// True
post.adicionarComentario(new comentario_1.Comentario(6, "Meu grande senador fulano!"));
// Fail. Comentário inválido
