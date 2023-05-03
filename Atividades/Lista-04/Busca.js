var _a;
var Fone = /** @class */ (function () {
    function Fone(id, numero) {
        this.id = id;
        this.numero = numero;
    }
    Fone.prototype.toString = function () {
        return this.id + ":" + this.numero;
    };
    Fone.validate = function (numero) {
        var valid = "0123456789()-.";
        for (var i = 0; i < numero.length; i++)
            if (valid.indexOf(numero.charAt(i)) == -1)
                return false;
        return true;
    };
    Fone.prototype.isValid = function () {
        return Fone.validate(this.numero);
    };
    Fone.prototype.getId = function () {
        return this.id;
    };
    Fone.prototype.getNumber = function () {
        return this.numero;
    };
    Fone.prototype.setId = function (id) {
        this.id = id;
    };
    Fone.prototype.setNumber = function (numero) {
        this.numero = numero;
    };
    return Fone;
}());
var Contato = /** @class */ (function () {
    function Contato(name, fones) {
        this.name = name;
        this.fones = fones;
    }
    Contato.prototype.toString = function () {
        var saida = "";
        for (var i = 1; i < this.fones.length; i++)
            saida += "[" + i + this.fones + "]";
        console.log("- " + this.name + saida);
    };
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
        this.fones.splice(index, 1);
    };
    Contato.prototype.getFones = function () {
        return this.fones;
    };
    Contato.prototype.getName = function () {
        return this.name;
    };
    Contato.prototype.setFones = function (fone) {
        this.fones = fone;
    };
    Contato.prototype.setName = function (name) {
        this.name = name;
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
    Agenda.prototype.toString = function () {
        var saida = "";
        for (var index = 0; index < this.contacts.length; index++)
            saida += "- " + this.contacts[index].getName() + " " + this.contacts[index].getFones() + "\n";
        console.log(saida);
    };
    Agenda.prototype.addContact = function (contato) {
        var index = this.findPos(contato.getName());
        if (index == -1) {
            this.contacts.push(new Contato(contato.getName(), contato.getFones()));
            return;
        }
        this.contacts[index].addFone(contato.getFones());
    };
    Agenda.prototype.findContact = function (name) {
        var index = this.findPos(name);
        if (index == -1) {
            console.log("fail: contato não encontrado");
            return null;
        }
        return this.contacts[index];
    };
    Agenda.prototype.rmContact = function (name) {
        var index = this.findPos(name);
        if (index == -1) {
            console.log("fail: contato não existe");
            return;
        }
        this.contacts.splice(index, 1);
    };
    Agenda.prototype.search = function (pattern) {
        var saida = "";
        for (var index = 0; index < this.contacts.length; index++)
            if (this.contacts[index].getName().includes(pattern))
                saida += "- " + this.contacts[index].getName() + " " + this.contacts[index].getFones() + "\n";
        console.log(saida);
    };
    Agenda.prototype.getContacts = function () {
        console.log(this.contacts);
    };
    return Agenda;
}());
var agenda = new Agenda();
agenda.addContact(new Contato("eva", Array.of(new Fone("oio", "8585"), new Fone("cla", "9999"))));
agenda.addContact(new Contato("ana", Array.of(new Fone("tim", "3434"))));
agenda.addContact(new Contato("bia", Array.of(new Fone("viv", "5454"))));
agenda.addContact(new Contato("ana", Array.of(new Fone("cas", "4567"), new Fone("oio", "8754"))));
agenda.toString();
(_a = agenda.findContact("ana")) === null || _a === void 0 ? void 0 : _a.rmFone(0);
agenda.toString();
agenda.rmContact("bia");
agenda.toString();
agenda.addContact(new Contato("ava", Array.of(new Fone("tim", "5454"))));
agenda.addContact(new Contato("rui", Array.of(new Fone("viv", "2222"), new Fone("oio", "9991"))));
agenda.addContact(new Contato("zac", Array.of(new Fone("rec", "3131"))));
agenda.toString();
agenda.search("va");
