export {};

class Conta {
    private saldo:number;
    private titular:string;

    constructor() {
        this.saldo = 0;
    }

    public tranferir(conta:Conta, valor:number) {
        if(this.saldo >= valor) {
            this.saldo -= valor;
            conta.saldo += valor;
        } else {
            console.log("Não há saldo suficiente!");
        }
    }   

    public depositar(valor:number) {
        this.saldo += valor;
    }

    public getSaldo():number {
        return this.saldo;
    }

    public getTitular():string {
        return this.titular;
    }

    public setTitular(novoNome:string) {
        this.titular = novoNome;
    }
}

let conta_1:Conta = new Conta();
conta_1.depositar(1000);

let conta_2:Conta = new Conta();
conta_2.tranferir(conta_1, 100);

console.log(conta_1.getSaldo);