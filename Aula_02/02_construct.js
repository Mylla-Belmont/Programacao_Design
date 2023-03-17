var Pokemon = /** @class */ (function () {
    function Pokemon() {
    }
    Pokemon.prototype.atacar = function () {
        console.log("Ataca desgraça!");
    };
    return Pokemon;
}());
var pokemon = new Pokemon();
pokemon.name = "Pikachu";
pokemon.level = 15;
pokemon.type = "Eletrico";
console.log(pokemon);
pokemon.atacar();
