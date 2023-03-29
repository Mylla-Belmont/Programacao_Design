class Calculator {
    batteryMax:number;
    battery:number = 0;
    display:number = 0;

    constructor(batteryMax:number) {
        this.batteryMax = batteryMax;
    }

    charge(value:number) {
        if(this.battery < this.batteryMax)
            this.battery += value;
    }

    sum(a:number, b:number) {
        if(this.battery <= 0) {
            console.log("A bateria acabou!");
            return;
        }
        this.display = a + b;
        this.useBattery();
    }

    division(num:number, den:number) {
        if(this.battery == 0) {
            console.log("A bateria acabou!");
            return;
        }
        if(den == 0) { 
            console.log("É impossivel fazer divisão com 0!");
            return;
        }
        this.display = num / den;
        this.useBattery();
    }

    useBattery() {
        if(this.battery == 0) {
            console.log("A bateria acabou!");
            return;
        }
        this.battery -= 1;
    }

    toString() {
        console.log("display: " + this.display + " bateria: " + this.battery);
    }
}

let calculadora = new Calculator(10);

calculadora.charge(10);

calculadora.sum(1,1);
calculadora.toString();

calculadora.division(2,2);
calculadora.toString();

calculadora.charge(1);
calculadora.toString();