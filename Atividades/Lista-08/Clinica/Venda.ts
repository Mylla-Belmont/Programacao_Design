export class Venda {
    private id_venda: number;
    private id_animal: number;
    private id_cliente: number;
    private id_servico: number;
  
    constructor(id_venda: number, id_cliente: number, id_animal: number, id_servico: number) {
        this.id_venda = id_venda;
        this.id_animal = id_animal;
        this.id_cliente = id_cliente;
        this.id_servico = id_servico;
    }

    public getIdVenda(): number {
        return this.id_venda;
    }
  
    public getIdAnimal(): number {
        return this.id_animal;
    }
  
    public getIdCliente(): number {
         return this.id_cliente;
    }
  
    public getIdServico(): number {
         return this.id_servico;
    }
}
  