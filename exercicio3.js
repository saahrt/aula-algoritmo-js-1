// Crie as variáveis nome e sobrenome. Junte as duas de forma que o console mostre:
// "Seu nome completo é: Maria Souza"
// Use os dois métodos:
//  Concatenação
//  Template string

console.log("Método 1: Template String\n");
var nome = "Raynna";
var sobrenome = "Almeida";

console.log(`Seu nome completo é: ${nome} ${sobrenome}`);

console.log("Método 2: Concatenação\n");
console.log("Seu nome completo é: " + nome + " " + sobrenome);