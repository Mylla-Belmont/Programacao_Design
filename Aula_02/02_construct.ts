class Pokemon {
    name: string;
    level: number;
    type: string;

    atacar(){
        console.log("Ataca desgraça!");
    }
}

let pokemon = new Pokemon();

pokemon.name = "Pikachu";
pokemon.level = 15;
pokemon.type = "Eletrico";

console.log(pokemon);

pokemon.atacar();