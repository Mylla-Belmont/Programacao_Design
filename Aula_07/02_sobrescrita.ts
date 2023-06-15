export { };

// - ContaCorrente -> rende 0.001% ao mês
// - ContaPoupança -> rende 0.5% ao mês
// - ContaInvestimento -> render 1% ao mês


class Conta {
    public nome: string;
    public saldo: number;

    public constructor(nome: string) {
        this.nome = nome;
        this.saldo = 10.;
    }

    public getSaldo() {
        return this.saldo;
    }

    public render(): void {
        // rende nada
    }
}

class ContaCorrente extends Conta {

    // sobrescrita de métodos
    // Redefinir o definir exatamento o mesmo método e o método da superclasse deixa valer
    // 0,0001%
    // 0.000001
    public render(): void {
        this.saldo = this.saldo + this.saldo * 0.000001;
    }

}

class ContaPoupanca extends Conta {
    public render(): void {
        this.saldo = this.saldo + this.saldo * 0.0005;
    }
}

let contap: ContaPoupanca = new ContaPoupanca("Victor");
console.log(contap.getSaldo());
contap.render();
console.log(contap.getSaldo());

let contac: ContaPoupanca = new ContaPoupanca("Victor");
console.log(contac.getSaldo());
contac.render();
console.log(contac.getSaldo());