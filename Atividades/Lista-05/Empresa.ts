import { Empregado } from "./Empregado";

export class Empresa {
    private empregados: Empregado[] = [];

    public adicionaEmpregado(empregado: Empregado) {
        this.empregados.push(empregado);
    }

    public mostrarEmpregados() {
        console.log("Empresa:")
        for (let index = 0; index < this.empregados.length; index++)
            console.log(this.empregados[index].toString());
    }

    public calcularFolha() {
        let folha: number = 0;
        for (let index = 0; index < this.empregados.length; index++)
            folha += this.empregados[index].pagamento();
        console.log("Folha de pagamento: " + folha);
    }
}