var Fone = /** @class */ (function () {
    function Fone(id, numero) {
        this.id = id;
        this.numero = numero;
    }
    Fone.validate = function (numero) {
        var valid = "0123456789()-.";
        for (var i = 0; i < numero.length; i++)
            if (valid.indexOf(numero.charAt(i)) == -1)
                return false;
        return true;
    };
    Fone.prototype.setId = function (id) {
        this.id = id;
    };
    Fone.prototype.getId = function () {
        return this.id;
    };
    Fone.prototype.setNumber = function (numero) {
        this.numero = numero;
    };
    Fone.prototype.getNumber = function () {
        return this.numero;
    };
    Fone.prototype.toString = function () {
        return this.id + ":" + this.numero;
    };
    return Fone;
}());
var Contato = /** @class */ (function () {
    function Contato(name, fones) {
        this.name = name;
        this.star = false;
        this.fones = fones;
    }
    Contato.prototype.addFone = function (fone) {
        for (var index = 0; index < fone.length; index++) {
            if (Fone.validate(fone[index].getNumber())) {
                this.fones.push(fone[index]);
            }
            else
                console.log("fail: Número inválido!");
        }
    };
    Contato.prototype.rmFone = function (index) {
        this.fones.slice(index, 1);
    };
    Contato.prototype.toString = function () {
        var saida = "";
        for (var i = 1; i < this.fones.length; i++)
            saida += "[" + i + this.fones + "]";
        console.log("- " + this.name + saida);
    };
    Contato.prototype.getFones = function () {
        return this.fones;
    };
    Contato.prototype.getName = function () {
        return this.name;
    };
    Contato.prototype.getStar = function () {
        return this.star;
    };
    Contato.prototype.setName = function (name) {
        this.name = name;
    };
    Contato.prototype.setStar = function (value) {
        this.star = value;
    };
    return Contato;
}());
var Agenda = /** @class */ (function () {
    function Agenda() {
        this.contacts = new Array;
    }
    Agenda.prototype.findPos = function (name) {
        for (var index = 0; index < this.contacts.length; index++) {
            if (this.contacts[index].getName() == name)
                return index;
        }
        return -1;
    };
    Agenda.prototype.getContact = function (name) {
        var index = this.findPos(name);
        if (index == -1) {
            console.log("fail: contato não encontrado");
            return null;
        }
        return this.contacts[index];
    };
    Agenda.prototype.addContact = function (contato) {
        var index = this.findPos(contato.getName());
        if (index == -1) {
            this.contacts.push(new Contato(contato.getName(), contato.getFones()));
            return;
        }
        this.contacts[index].addFone(contato.getFones());
    };
    Agenda.prototype.rmContact = function (name) {
        var index = this.findPos(name);
        if (index == -1) {
            console.log("fail: contato não existe");
            return;
        }
        this.contacts.splice(index, 1);
    };
    Agenda.prototype.star = function (name) {
        var index = this.findPos(name);
        if (index == -1) {
            console.log("fail: contato não existe");
            return;
        }
        this.contacts[index].setStar(true);
    };
    Agenda.prototype.unstar = function (name) {
        var index = this.findPos(name);
        if (index == -1) {
            console.log("fail: contato não existe");
            return;
        }
        this.contacts[index].setStar(false);
    };
    Agenda.prototype.getStarred = function () {
        var saida = "";
        for (var index = 0; index < this.contacts.length; index++) {
            if (this.contacts[index].getStar())
                saida += "@ " + this.contacts[index].getName() + " " + this.contacts[index].getFones() + "\n";
        }
        console.log(saida);
    };
    Agenda.prototype.toString = function () {
        var saida = "";
        for (var index = 0; index < this.contacts.length; index++) {
            if (this.contacts[index].getStar()) {
                saida += "@ " + this.contacts[index].getName() + " " + this.contacts[index].getFones() + "\n";
            }
            else
                saida += "- " + this.contacts[index].getName() + " " + this.contacts[index].getFones() + "\n";
        }
        console.log(saida);
    };
    return Agenda;
}());
var agenda = new Agenda();
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
