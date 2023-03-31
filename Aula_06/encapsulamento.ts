export {};

class Conta {
    saldo:number;

    constructor() {
        this.saldo = 0;
    }

    tranferir(conta:Conta, valor:number) {
        if(this.saldo >= valor) {
            this.saldo -= valor;
            conta.saldo += valor;
        } else {
            console.log("Não há saldo suficiente!");
        }
    }   
}

let conta_1:Conta = new Conta();
conta_1.saldo = 1000;

let conta_2:Conta = new Conta();
conta_2.tranferir(conta_1, 100);

console.log(conta_1.saldo);