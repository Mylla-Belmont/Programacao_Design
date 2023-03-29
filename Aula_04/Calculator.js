var Calculator = /** @class */ (function () {
    function Calculator(batteryMax) {
        this.battery = 0;
        this.display = 0;
        this.batteryMax = batteryMax;
    }
    Calculator.prototype.charge = function (value) {
        if (this.battery < this.batteryMax)
            this.battery += value;
    };
    Calculator.prototype.sum = function (a, b) {
        if (this.battery <= 0) {
            console.log("A bateria acabou!");
            return;
        }
        this.display = a + b;
        this.useBattery();
    };
    Calculator.prototype.division = function (num, den) {
        if (this.battery == 0) {
            console.log("A bateria acabou!");
            return;
        }
        if (den == 0) {
            console.log("É impossivel fazer divisão com 0!");
            return;
        }
        this.display = num / den;
        this.useBattery();
    };
    Calculator.prototype.useBattery = function () {
        if (this.battery == 0) {
            console.log("A bateria acabou!");
            return;
        }
        this.battery -= 1;
    };
    Calculator.prototype.toString = function () {
        console.log("display: " + this.display + " bateria: " + this.battery);
    };
    return Calculator;
}());
var calculadora = new Calculator(10);
calculadora.charge(10);
calculadora.sum(1, 1);
calculadora.toString();
calculadora.division(2, 2);
calculadora.toString();
calculadora.charge(1);
calculadora.toString();
