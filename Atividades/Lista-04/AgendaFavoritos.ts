class Fone {
    private id: string;
    private numero: string;

    constructor(id: string, numero: string) {
        this.id = id;
        this.numero = numero;
    }

    public static validate(numero: string): boolean {
        let valid: string = "0123456789()-.";
        for (let i: number = 0; i < numero.length; i++)
            if (valid.indexOf(numero.charAt(i)) == -1)
                return false;
        return true;
    }

    public setId(id: string) {
        this.id = id;
    }

    public getId(): string {
        return this.id;
    }

    public setNumber(numero: string) {
        this.numero = numero;
    }

    public getNumber(): string {
        return this.numero;
    }

    public toString(): string {
        return this.id + ":" + this.numero;
    }
}

class Contato {
    private name: string;
    private star: boolean;
    private fones: Fone[];

    constructor(name: string, fones: Fone[]) {
        this.name = name;
        this.star = false;
        this.fones = fones;
    }

    public addFone(fone: Fone[]) {
        for (let index = 0; index < fone.length; index++) {
            if (Fone.validate(fone[index].getNumber())) {
                this.fones.push(fone[index]);
            } else
                console.log("fail: Número inválido!");
        }
    }

    public rmFone(index: number) {
        this.fones.splice(index, 1);
    }

    public toString() {
        let saida: string = "";
        for (let i: number = 1; i < this.fones.length; i++)
            saida += "[" + i + this.fones + "]";
        console.log("- " + this.name + saida);
    }

    public getFones(): Fone[] {
        return this.fones;
    }

    public getName(): string {
        return this.name;
    }

    public getStar(): boolean {
        return this.star;
    }

    public setName(name: string) {
        this.name = name;
    }

    public setStar(value: boolean) {
        this.star = value;
    }
}

class Agenda {
    private contacts: Contato[];

    constructor() {
        this.contacts = new Array<Contato>;
    }

    private findPos(name: string): number {
        for (let index = 0; index < this.contacts.length; index++) {
            if (this.contacts[index].getName() == name)
                return index;
        }
        return -1;
    }

    public getContact(name: string): Contato | null {
        let index = this.findPos(name);
        if (index == -1) {
            console.log("fail: contato não encontrado");
            return null;
        }
        return this.contacts[index];
    }

    public addContact(contato: Contato): void {
        let index = this.findPos(contato.getName());
        if (index == -1) {
            this.contacts.push(new Contato(contato.getName(), contato.getFones()));
            return;
        }
        this.contacts[index].addFone(contato.getFones());
    }

    public rmContact(name: string): void {
        let index = this.findPos(name);
        if (index == -1) {
            console.log("fail: contato não existe");
            return;
        }
        this.contacts.splice(index, 1);
    }

    public star(name: string): void {
        let index = this.findPos(name);
        if (index == -1) {
            console.log("fail: contato não existe");
            return;
        }
        this.contacts[index].setStar(true);
    }

    public unstar(name: string) {
        let index = this.findPos(name);
        if (index == -1) {
            console.log("fail: contato não existe");
            return;
        }
        this.contacts[index].setStar(false);
    }

    public getStarred() {
        let saida: string = "";
        for (let index = 0; index < this.contacts.length; index++) {
            if (this.contacts[index].getStar())
                saida += "@ " + this.contacts[index].getName() + " " + this.contacts[index].getFones() + "\n";
        }
        console.log(saida);
    }

    public toString(): void {
        let saida: string = "";
        for (let index = 0; index < this.contacts.length; index++) {
            if (this.contacts[index].getStar()) {
                saida += "@ " + this.contacts[index].getName() + " " + this.contacts[index].getFones() + "\n";
            } else
                saida += "- " + this.contacts[index].getName() + " " + this.contacts[index].getFones() + "\n";
        }
        console.log(saida);
    }
}

let agenda = new Agenda();
agenda.addContact(new Contato("eva", Array.of(new Fone("oi", "8585"), new Fone("claro", "9999"))));
agenda.addContact(new Contato("ana", Array.of(new Fone("tim", "3434"))));
agenda.addContact(new Contato("ana", Array.of(new Fone("casa", "4567"), new Fone("oi", "8754"))));
agenda.addContact(new Contato("bia", Array.of(new Fone("vivo", "5454"))));
agenda.addContact(new Contato("rui", Array.of(new Fone("casa", "3233"))));
agenda.addContact(new Contato("zac", Array.of(new Fone("fixo", "3131"))));
agenda.toString();

agenda.star("eva");
agenda.star("ana");
agenda.star("ana");
agenda.star("zac");
agenda.toString();

agenda.getStarred();

agenda.rmContact("zac");
agenda.toString();

agenda.getStarred();
agenda.unstar("ana");

agenda.getStarred();
agenda.toString();
