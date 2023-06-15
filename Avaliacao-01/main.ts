import { Post } from "./post";
import { Comentario } from "./comentario";
//////////////////
// Testando gets e sets

let post:Post = new Post("Boa tarde, amigos!");
console.log(post.getTexto());
// Boa tarde, amigos!
post.setTexto("Boa noite, família!");
console.log(post.getTexto());
// Boa noite, família!
console.log(post.getComentarios());
// []

//////////// Adicionar e remover comentários
post.adicionarComentario(new Comentario(1, "Tudo bem, meu consagrado?"));
post.adicionarComentario(new Comentario(2, "Faaaala, meu chegado"));
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

post.adicionarComentario(new Comentario(3, "Dizz Parceiro! "));
post.adicionarComentario(new Comentario(4, "Diga lá, grande!"));
post.adicionarComentario(new Comentario(5, "Tudo tranquilo, brother?"));
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

console.log(Comentario.validate("O deputado xpto é o melhor do nordeste"));
// False
console.log(Comentario.validate("O vereador abc não faz nada"));
// False
console.log(Comentario.validate("Já jogaram LoL?"));
// True

post.adicionarComentario(new Comentario(6, "Meu grande senador fulano!"));
// Fail. Comentário inválido