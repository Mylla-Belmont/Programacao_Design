import { Clinica } from './Clinica';

let clinica = new Clinica();
clinica.addCliente("Ana");
clinica.addCliente("João");
clinica.addCliente("Maria");
clinica.addCliente("Pedro");
console.log(clinica.getClientes());

clinica.addAnimal(0, "Max", "Cao");
clinica.addAnimal(1, "Luna", "Gato");
clinica.addAnimal(5, "Bela", "Gato");
clinica.addAnimal(2, "Rocky", "Hamster");
clinica.addAnimal(3, "Charlie", "Coelho");
clinica.addAnimal(0, "Biboca", "Papagaio");

clinica.addServico("Corte de unhas", 30);
clinica.addServico("Corte de unhas", 50);
clinica.addServico("Limpeza de ouvidos", 40);
clinica.addServico("Banho e tosa completo", 80);
console.log(clinica.getServicos());

clinica.vender(0, 0, 0);
clinica.vender(1, 1, 1);
clinica.vender(2, 2, 2);
clinica.vender(3, 3, 0);
console.log(clinica.getVendas());

console.log("Total vendas: " + clinica.getSaldo());