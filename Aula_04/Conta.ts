class Conta {
    titular:string;
    saldo:number;

    constructor(titular:string, saldo:number) {
        this.titular = titular
        this.saldo = saldo;
    }

    render(saldo:number) {
        return saldo * 1.1;
    }

    sacar(valor:number) {
        if(valor > this.saldo)
            console.log("Você não tem saldo suficiente");
        return this.saldo - valor;
    }
}

let conta = new Conta("Camila", 10000000);

conta.render;
conta.sacar(10);