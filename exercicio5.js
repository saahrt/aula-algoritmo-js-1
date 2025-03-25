// Peça para o usuário informar:
//  Um verbo
//  Um substantivo
//  Um adjetivo
// E monte a frase:
// "Hoje eu decidi [verbo] um(a) [substantivo] muito [adjetivo]!"
// 👉 Se quiser, posso te mostrar como fazer isso com readline no Node.js pra receber do
// teclado.

const prompt = require("prompt-sync")();
const verbo = prompt("Digite um verbo: ");
const substantivo = prompt("Digite um substantivo: ");
const adjetivo = prompt("Digite um adjetivo: ");
console.log(`\nHoje eu decidi ${verbo} um(a) ${substantivo} muito
${adjetivo}!`);