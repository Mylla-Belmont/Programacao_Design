"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Bilheteria_1 = require("./Bilheteria");
var bilheteria = new Bilheteria_1.Bilheteria();
bilheteria.addCliente("A", true);
bilheteria.addCliente("A", false);
bilheteria.addCliente("B", false);
bilheteria.addEvento("Festa", 10);
bilheteria.addEvento("Festa", 20);
bilheteria.addEvento("Aniversário", 5);
bilheteria.addEvento("Cinema", 10);
