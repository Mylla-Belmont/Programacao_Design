class Lead {
    private thickness: number;
    private hardness: string;
    private size: number;

    constructor(thickness: number, hardness: string, size: number) {
        this.thickness = thickness;
        this.hardness = hardness;
        this.size = size;
    }

    public usagePerSheet(): number {
        if (this.hardness === "H1") 
            return 1;
        if (this.hardness === "2B") 
            return 2;
        if (this.hardness === "4B") 
            return 4;
        if (this.hardness === "6B")
            return 6;
        return 0;
    }

    public setSize(newSize: number) {
        this.size = newSize;
    }

    public hasSize(otherSize: number): boolean {
        if((this.size - otherSize) > 10)
            return true;
        console.log("fail: tamanho insuficiente");
        return false;   
    }

    public getHardness(): string {
        return this.hardness;
    }

    public getSize(): number {
        return this.size;
    }

    public getThickness(): number {
        return this.thickness;
    }

    public toString() {
        return "[" + this.thickness + ":" + this.hardness + ":" + this.size + "]";
    }
}

class Pencil {
    private thickness: number;
    private tip: Lead | null;

    constructor(thickness: number) {
        this.thickness = thickness;
        this.tip = null;
    }

    public hasGrafite(): boolean {
        if(this.tip != null)
            return true;
        return false;
    }

    public insert(lead: Lead) {
        if(this.hasGrafite()) {
            console.log("fail: ja existe grafite");
            return;
        }
        if(lead.getThickness() != this.thickness) {
            console.log("fail: calibre incompatível");
            return;
        }
        this.tip = lead;
    }

    public remove() {
        if(!this.hasGrafite()) {
            console.log("fail: não tem grafite");
            return;
        }
        this.tip = null;
    }

    public writePage() {
        if(!this.hasGrafite()) {
            console.log("fail: não existe grafite");
            return;
        }
        if(this.tip?.hasSize(this.tip.usagePerSheet())) {
            this.tip?.setSize(this.tip.getSize() - this.tip.usagePerSheet());
            return;
        }
        console.log("fail: folha incompleta");
    }

    public toString() {
        if (this.hasGrafite()) {
            console.log("Calibre: " + this.thickness + ", Grafite: " + this.tip?.toString());
            return;
        }
        console.log("Calibre: " + this.thickness + ", Grafite: " + null);
    }
}

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
// let pencil_4 = new Pencil(0.9);
// pencil_4.insert(new Lead(0.9, "4B", 16));
// pencil_4.writePage();
// pencil_4.toString();

// case escrevendo 3
// pencil_4.writePage();
// pencil_4.toString();