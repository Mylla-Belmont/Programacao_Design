var Fone = /** @class */ (function () {
    function Fone(id, numero) {
        this.id = id;
        this.numero = numero;
    }
    // private isValid():boolean {
    //     return true;
    // }
    Fone.validate = function (numero) {
        var valid = "0123456789()-.";
        for (var i = 0; i < numero.length; i++)
            if (valid.indexOf(numero.charAt(i)) == -1)
                return false;
        return true;
    };
    Fone.prototype.getId = function () {
        return this.id;
    };
    Fone.prototype.getNumero = function () {
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
        this.fones = fones;
    }
    Contato.prototype.addFone = function () {
    };
    Contato.prototype.rmFone = function () {
    };
    Contato.prototype.setName = function () {
    };
    Contato.prototype.setFones = function () {
    };
    Contato.prototype.getName = function () {
        return this.name;
    };
    Contato.prototype.getFones = function () {
        return this.fones;
    };
    Contato.prototype.toString = function () {
        var saida = "";
        for (var i = 1; i < this.fones.length; i++)
            saida += "[" + i + this.fones + "]";
        console.log("- " + this.name + saida);
    };
    return Contato;
}());
var contato = new Contato("david", [""]);
contato.toString();
