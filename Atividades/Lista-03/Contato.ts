class Fone {
    private id:string;
    private numero:string;

    constructor (id:string, numero:string) {
        this.id = id;
        this.numero = numero;
    }

    public isValid():boolean {
        return true;
    }

    public static validate(numero:string):boolean {
        let valid:string = "0123456789()-.";
        for(let i:number=0; i<numero.length; i++)
            if(valid.indexOf(numero.charAt(i)) == -1) 
                return false;
        return true;
    }

    public getId() {
        return this.id;
    }

    public getNumero() {
        return this.numero;
    }

    public toString() {
        return this.id + ":" + this.numero;
    }
}

class Contato {
    private prefix:string;
    private name:string;
    private fones:Array<string>;

    constructor(name:string, fones:Array<string>) {
        this.name = name;
        this.fones = fones;
    }

    public addFone(fone:Fone) {
        if(fone.isValid())
    }

    public rmFone() {

    }

    public getName() {
        return this.name;
    }

    public getFones() {
        return this.fones;
    }

    public toString() {
        let saida:string = "";
        for(let i:number=1; i<this.fones.length; i++)
            saida += "[" + this.prefix + this.fones + "]";
        console.log("- " + this.name + saida);
    }
}

let contato = new Contato("david",[""]);
contato.toString();