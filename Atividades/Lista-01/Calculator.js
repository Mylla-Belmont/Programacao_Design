var Calculator = /** @class */ (function () {
    function Calculator(batteryMax) {
        this.battery = 0;
        this.display = 0;
        this.batteryMax = batteryMax;
    }
    Calculator.prototype.charge = function (value) {
        if ((this.battery + value) >= this.batteryMax) {
            this.battery = this.batteryMax;
        }
        else
            this.battery += value;
    };
    Calculator.prototype.sum = function (a, b) {
        if (this.useBattery())
            this.display = a + b;
    };
    Calculator.prototype.division = function (num, den) {
        if (this.useBattery()) {
            if (den != 0) {
                this.display = num / den;
            }
            else
                console.log("É impossivel fazer divisão com 0!");
        }
    };
    Calculator.prototype.useBattery = function () {
        if (this.battery == 0) {
            console.log("A bateria acabou!");
            return false;
        }
        this.battery -= 1;
        return true;
    };
    Calculator.prototype.toString = function () {
        console.log("display: " + this.display + " bateria: " + this.battery);
    };
    return Calculator;
}());
//__case iniciar mostrar e recarregar
var calculadora = new Calculator(5);
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
var calculadora_2 = new Calculator(4);
calculadora_2.charge(2);
calculadora_2.toString();
calculadora_2.charge(3);
calculadora_2.toString();
//__case somando
var calculadora_3 = new Calculator(2);
calculadora_3.charge(2);
calculadora_3.sum(4, 3);
calculadora_3.toString();
//__case gastando bateria
calculadora_3.sum(2, 3);
calculadora_3.toString();
//__case sem bateria
calculadora_3.sum(-4, -1);
//__case recarregando
calculadora_3.charge(1);
calculadora_3.toString();
calculadora_3.sum(-4, -2);
calculadora_3.toString();
//__case dividindo
var calculadora_4 = new Calculator(3);
calculadora_4.charge(3);
calculadora_4.division(6, 3);
calculadora_4.toString();
//__case dividindo por zero
calculadora_4.division(7, 0);
//__case gastando bateria
calculadora_4.toString();
calculadora_4.division(7, 2);
calculadora_4.division(10, 2);
calculadora_4.toString();
