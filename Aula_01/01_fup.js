var x = 5;
var y = 5;
console.log(y);
if (y < 6) {
    console.log("olha só");
}
function add(a, b) {
    return a + b;
}
var add2 = function (a, b) {
    return a + b;
};
console.log(add(1, 2));
console.log(add2(3, 4));
//listas
var l = [1, 2, 3];
//add ao final da lista
l.push(3);
//remove elemento da lista
//<posição do elemento> <numero de elementos>
l.splice(1, 1);
for (var i in l) {
    console.log(i);
    console.log(l[i]);
}
