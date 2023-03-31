class Grafite {
    calibre:number;
    dureza:string;
    tamanho:number;

    constructor(calibre:number, dureza:string, tamanho:number) {
        this.calibre = calibre;
        this.dureza = dureza;
        this.tamanho = tamanho;
    }

    usagePerSheet(dureza:string) {
        let hardness:number = 0;
        if(dureza == "H1") {
            hardness = 1;
        } else if(dureza == "2B") {
            hardness = 2;
        } else if(dureza == "4B") {
            hardness = 4;
        } else if(dureza == "6B") {
            hardness = 6;
        }
        return hardness;
    }

    
}