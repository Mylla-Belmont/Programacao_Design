class Tamagotchi {
    private energyMax: number;
    private hungryMax: number;
    private cleanMax: number;

    private energy: number;
    private hungry: number;
    private clean: number;

    private diamons: number;
    private alive: boolean;
    private age: number;


    constructor(energyMax: number, hungryMax: number, cleanMax: number) {
        this.energyMax = energyMax;
        this.hungryMax = hungryMax;
        this.cleanMax = cleanMax;
        this.energy = energyMax;
        this.hungry = hungryMax;
        this.clean = cleanMax;
        this.alive = true;
        this.diamons = 0;
        this.age = 0;
    }

    private isAlive() {
        if (this.alive == false)
            console.log("fail: pet esta morto");
        return this.alive;
    }

    private setClean(clean: number) {
         this.clean = clean;
        if (this.clean >= this.cleanMax)
            this.clean = this.cleanMax;

        if (this.clean <= 0) {
            this.clean = 0;
            this.alive = false;
            console.log("fail: pet morreu de sujeira");
        }
    }

    private setHungry(hungry: number) {
        this.hungry = hungry;
        if (this.hungry >= this.hungryMax)
            this.hungry = this.hungryMax;

        if (this.hungry <= 0) {
            this.hungry = 0;
            this.alive = false;
            console.log("fail: pet morreu de fome");
        }
    }

    private setEnergy(energy: number) {
        this.energy = energy;
        if (this.energy >= this.energyMax)
            this.energy = energy;

        if (this.energy <= 0) {
            this.energy = 0;
            this.alive = false;
            console.log("fail: pet morreu de fraqueza");
        }
    }

    public eat() {
        if(!this.isAlive()) 
            return;
        this.setEnergy(this.energy - 1);
        this.setHungry(this.hungry + 4);
        this.setClean(this.clean - 2);
        this.age += 1;
    }

    public play() {
        if(!this.isAlive()) 
            return;
        this.setEnergy(this.energy - 2);
        this.setHungry(this.hungry - 1);
        this.setClean(this.clean - 3);
        this.diamons += 1;
        this.age += 1;
    }

    public shower() {
        if(!this.isAlive()) 
            return;
        this.setEnergy(this.energy - 3);
        this.setHungry(this.hungry - 1);
        this.setClean(this.clean + this.cleanMax);
        this.age += 2;
    }

    public sleep() {
        if(!this.isAlive()) 
            return;
        if((this.energy + 5) <= this.energyMax) {
            this.setEnergy(this.energy = this.energyMax);
            this.hungry -= 1;
            this.age += 5;
            return;
        }
        console.log("Tamagotchi não está com sono!");
    }

    public getClean() {
        return this.clean;
    }

    public getCleanMax() {
        return this.cleanMax;
    }

    public getEnergy() {
        return this.energy;
    }

    public getEnergyMax() {
        return this.energyMax;
    }

    public getHungry() {
        return this.hungry;
    }

    public getHungryMax() {
        return this.hungryMax;
    }

    public show() {
        console.log("E: " + this.energy + "/" + this.energyMax + ", " +
                    "S: " + this.hungry + "/" + this.hungryMax + ", " +
                    "L: " + this.clean + "/" + this.cleanMax + ", " +
                    "D: " + this.diamons + ", " + 
                    "I: " + this.age);
    }
}

// ----- CASE INICIO -----
// let tamagotchi_1 = new Tamagotchi(20, 10, 15);
// tamagotchi_1.show();

// let tamagotchi_2 = new Tamagotchi(10, 20, 50);
// tamagotchi_2.show();

// ----- CASE PLAY -----
// let tamagotchi_3 = new Tamagotchi(20, 10, 15);
// tamagotchi_3.play();
// tamagotchi_3.show();
// tamagotchi_3.play();
// tamagotchi_3.show();

// ----- CASE EAT -----
// tamagotchi_3.eat();
// tamagotchi_3.show();

// ----- CASE SLEEP -----
// tamagotchi_3.sleep();
// tamagotchi_3.show();

// ----- CASE SHOWER -----
// tamagotchi_3.shower();
// tamagotchi_3.show();

// ----- CASE SLEEP FAIL -----
// tamagotchi_3.sleep();

// ----- CASE MORRER -----
// tamagotchi_3.play();
// tamagotchi_3.play();
// tamagotchi_3.play();
// tamagotchi_3.play();
// tamagotchi_3.show();

// tamagotchi_3.play();
// tamagotchi_3.show();

// tamagotchi_3.play();
// tamagotchi_3.eat();  
// tamagotchi_3.shower();
// tamagotchi_3.sleep();  

// ----- CASE FRAQUEZA -----
// let tamagotchi_4 = new Tamagotchi(5, 10, 10);
// tamagotchi_4.play();
// tamagotchi_4.play();
// tamagotchi_4.play();

// ----- CASE MORTO DE FRAQUEZA -----
// tamagotchi_4.play();
// tamagotchi_4.show();

// ----- CASE FOME -----
// let tamagotchi_5 = new Tamagotchi(10, 3, 10);
// tamagotchi_5.play();
// tamagotchi_5.play();
// tamagotchi_5.play();
// tamagotchi_5.play();
// tamagotchi_5.show();