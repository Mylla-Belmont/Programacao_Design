var Lead = /** @class */ (function () {
    function Lead(thickness, hardness, size) {
        this.thickness = thickness;
        this.hardness = hardness;
        this.size = size;
    }
    Lead.prototype.usagePerSheet = function () {
        if (this.hardness === "H1")
            return 1;
        if (this.hardness === "2B")
            return 2;
        if (this.hardness === "4B")
            return 4;
        if (this.hardness === "6B")
            return 6;
        return 0;
    };
    Lead.prototype.setSize = function (newSize) {
        this.size = newSize;
    };
    Lead.prototype.hasSize = function (otherSize) {
        if ((this.size - otherSize) > 10)
            return true;
        console.log("fail: tamanho insuficiente");
        return false;
    };
    Lead.prototype.getHardness = function () {
        return this.hardness;
    };
    Lead.prototype.getSize = function () {
        return this.size;
    };
    Lead.prototype.getThickness = function () {
        return this.thickness;
    };
    Lead.prototype.toString = function () {
        return "[" + this.thickness + ":" + this.hardness + ":" + this.size + "]";
    };
    return Lead;
}());
var Pencil = /** @class */ (function () {
    function Pencil(thickness) {
        this.thickness = thickness;
        this.tip = null;
    }
    Pencil.prototype.hasGrafite = function () {
        if (this.tip != null)
            return true;
        return false;
    };
    Pencil.prototype.insert = function (lead) {
        if (this.hasGrafite()) {
            console.log("fail: ja existe grafite");
            return;
        }
        if (lead.getThickness() != this.thickness) {
            console.log("fail: calibre incompatível");
            return;
        }
        this.tip = lead;
    };
    Pencil.prototype.remove = function () {
        if (!this.hasGrafite()) {
            console.log("fail: não tem grafite");
            return;
        }
        this.tip = null;
    };
    Pencil.prototype.writePage = function () {
        var _a, _b;
        if (!this.hasGrafite()) {
            console.log("fail: não existe grafite");
            return;
        }
        if ((_a = this.tip) === null || _a === void 0 ? void 0 : _a.hasSize(this.tip.usagePerSheet())) {
            (_b = this.tip) === null || _b === void 0 ? void 0 : _b.setSize(this.tip.getSize() - this.tip.usagePerSheet());
            return;
        }
        console.log("fail: folha incompleta");
    };
    Pencil.prototype.toString = function () {
        var _a;
        if (this.hasGrafite()) {
            console.log("Calibre: " + this.thickness + ", Grafite: " + ((_a = this.tip) === null || _a === void 0 ? void 0 : _a.toString()));
            return;
        }
        console.log("Calibre: " + this.thickness + ", Grafite: " + null);
    };
    return Pencil;
}());
// case inserindo grafites
// let pencil_1 = new Pencil(0.5);
// pencil_1.toString();
// case incompativel
// pencil_1.insert(new Lead(0.7, "2B", 50));
// pencil_1.insert(new Lead(0.5, "2B", 50));
// pencil_1.toString();
// case inserindo
// let pencil_2 = new Pencil(0.3);
// pencil_2.insert(new Lead(0.3, "2B", 50));
// pencil_2.toString();
//case ja existe
// pencil_2.insert(new Lead(0.3, "4B", 70));
// pencil_2.toString();
// case removendo
// pencil_2.remove();
// pencil_2.toString();
// case reinserindo
// pencil_2.insert(new Lead(0.3, "4B", 70));
// pencil_2.toString();
// case sem grafite
// let pencil_3 = new Pencil(0.9);
// pencil_3.writePage();
// case escrevendo 1
// pencil_3.insert(new Lead(0.9, "4B", 14));
// pencil_3.writePage();
// pencil_3.writePage();
// pencil_3.toString();
// case escrevendo 2
var pencil_4 = new Pencil(0.9);
pencil_4.insert(new Lead(0.9, "4B", 16));
pencil_4.writePage();
pencil_4.toString();
// case escrevendo 3
pencil_4.writePage();
pencil_4.toString();
