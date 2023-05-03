class Fone {
    private id: string;
    private numero: string;

    constructor(id: string, numero: string) {
        this.id = id;
        this.numero = numero;
    }

    public toString(): string {
        return this.id + ":" + this.numero;
    }

    public static validate(numero: string): boolean {
        let valid: string = "0123456789()-.";
        for (let i: number = 0; i < numero.length; i++)
            if (valid.indexOf(numero.charAt(i)) == -1)
                return false;
        return true;
    }

    public isValid(): boolean {
        return Fone.validate(this.numero);
    }

    public getId(): string {
        return this.id;
    }

    public getNumber(): string {
        return this.numero;
    }

    public setId(id: string) {
        this.id = id;
    }

    public setNumber(numero: string) {
        this.numero = numero;
    }
}

class Contato {
    private name: string;
    private fones: Fone[];

    constructor(name: string, fones: Fone[]) {
        this.name = name;
        this.fones = fones;
    }

    public toString() {
        let saida: string = "";
        for (let i: number = 1; i < this.fones.length; i++)
            saida += "[" + i + this.fones + "]";
        console.log("- " + this.name + saida);
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

    public getFones(): Fone[] {
        return this.fones;
    }

    public getName(): string {
        return this.name;
    }

    public setFones(fone: Fone[]) {
        this.fones = fone;
    }

    public setName(name: string) {
        this.name = name;
    }
}

class Agenda {
    private contacts: Contato[];

    private findPos(name: string): number {
        for (let index = 0; index < this.contacts.length; index++) {
            if (this.contacts[index].getName() == name)
                return index;
        }
        return -1;
    }

    constructor() {
        this.contacts = new Array<Contato>;
    }

    public toString(): void {
        let saida: string = "";
        for (let index = 0; index < this.contacts.length; index++)
            saida += "- " + this.contacts[index].getName() + " " + this.contacts[index].getFones() + "\n";
        console.log(saida);
    }

    public addContact(contato: Contato): void {
        let index = this.findPos(contato.getName());
        if (index == -1) {
            this.contacts.push(new Contato(contato.getName(), contato.getFones()));
            return;
        }
        this.contacts[index].addFone(contato.getFones());
    }

    public findContact(name: string): Contato | null {
        let index = this.findPos(name);
        if (index == -1) {
            console.log("fail: contato não encontrado");
            return null;
        }
        return this.contacts[index];
    }

    public rmContact(name: string): void {
        let index = this.findPos(name);
        if (index == -1) {
            console.log("fail: contato não existe");
            return;
        }
        this.contacts.splice(index, 1);
    }

    public search(pattern: string) {
        let saida: string = "";
        for (let index = 0; index < this.contacts.length; index++) 
            if (this.contacts[index].getName().includes(pattern))
               saida += "- " + this.contacts[index].getName() + " " + this.contacts[index].getFones() + "\n";
        console.log(saida);
    }

    public getContacts(): void {
        console.log(this.contacts);
    }
}

let agenda = new Agenda();
agenda.addContact(new Contato("eva", Array.of(new Fone("oio", "8585"), new Fone("cla", "9999"))));
agenda.addContact(new Contato("ana", Array.of(new Fone("tim", "3434"))));
agenda.addContact(new Contato("bia", Array.of(new Fone("viv", "5454"))));
agenda.addContact(new Contato("ana", Array.of(new Fone("cas", "4567"), new Fone("oio", "8754"))));
agenda.toString();

agenda.findContact("ana")?.rmFone(0);
agenda.toString();

agenda.rmContact("bia");
agenda.toString();

agenda.addContact(new Contato("ava", Array.of(new Fone("tim", "5454"))));
agenda.addContact(new Contato("rui", Array.of(new Fone("viv", "2222"), new Fone("oio", "9991"))));
agenda.addContact(new Contato("zac", Array.of(new Fone("rec", "3131"))));
agenda.toString();

agenda.search("va");