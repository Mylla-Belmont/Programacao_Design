let x =5;
let y:number = 5;
console.log(y);

if(y < 6){
    console.log("olha só");
}

function add (a:number, b:number):number{
    return a+b;
}

let add2 = (a:number, b:number):number =>{
    return a+b;
}

console.log(add(1,2));

console.log(add2(3,4));

//listas
let l:number[] = [1, 2, 3];

//add ao final da lista
l.push(3);

//remove elemento da lista
//<posição do elemento> <numero de elementos>
l.splice(1, 1);

for(let i in l){
    console.log(i);
    console.log(l[i]);
}