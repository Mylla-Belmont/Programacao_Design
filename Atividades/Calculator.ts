class Calculator {
    batteryMax:number;
    battery:number = 0;
    display:number = 0;

    constructor(batteryMax:number) {
        this.batteryMax = batteryMax;
    }

    charge(value:number) {
        if((this.battery + value) >= this.batteryMax){
            this.battery = this.batteryMax;
        }else
            this.battery += value;
    }

    sum(a:number, b:number) {
        if(this.useBattery())
           this.display = a + b;
    }

    division(num:number, den:number) {
        if(this.useBattery()) {
            if(den != 0) { 
                this.display = num / den;
            } else 
                console.log("É impossivel fazer divisão com 0!");
        }
    }

    useBattery():boolean {
        if(this.battery == 0) {
            console.log("A bateria acabou!");
            return false;
        }
        this.battery -= 1;
        return true;
    }

    toString() {
        console.log("display: " + this.display + " bateria: " + this.battery);
    }
}

//__case iniciar mostrar e recarregar
let calculadora:Calculator = new Calculator(5);
calculadora.toString();

//__ case charge
calculadora.charge(3);
calculadora.toString();
calculadora.charge(1);
calculadora.toString();

//__case boundary
calculadora.charge(2);
calculadora.toString();

//__case reset
let calculadora_2:Calculator = new Calculator(4);
calculadora_2.charge(2);
calculadora_2.toString();
calculadora_2.charge(3);
calculadora_2.toString();

//__case somando
let calculadora_3:Calculator = new Calculator(2);
calculadora_3.charge(2);
calculadora_3.sum(4,3);
calculadora_3.toString();

//__case gastando bateria
calculadora_3.sum(2,3);
calculadora_3.toString();

//__case sem bateria
calculadora_3.sum(-4,-1);

//__case recarregando
calculadora_3.charge(1);
calculadora_3.toString();
calculadora_3.sum(-4,-2);
calculadora_3.toString();

//__case dividindo
let calculadora_4:Calculator = new Calculator(3);
calculadora_4.charge(3);
calculadora_4.division(6,3);
calculadora_4.toString();

//__case dividindo por zero
calculadora_4.division(7,0);

//__case gastando bateria
calculadora_4.toString();
calculadora_4.division(7,2);
calculadora_4.division(10,2);
calculadora_4.toString();
