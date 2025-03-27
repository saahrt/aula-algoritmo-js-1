const prompt = require("prompt-sync")();

const nome = prompt("Digite seu nome: ");
const idade = prompt("Digite sua idade: ");

//condicional composta
if(idade >= 18){
    console.log(`${nome}, você é maior de idade`);
} else {
    console.log(`${nome}, você é menor de idade`);
}

var semana = prompt("Digite o dia da semana: ");
semana = semana.toLowerCase();
if (semana === "segunda-feira"){
    console.log("Hoje é dia de estudar");
} else if (semana === "terça-feira"){
    console.log("Hoje é dia de estudar");
} else if (semana === "quarta-feira"){
    console.log("Hoje é dia de estudar");
} else if (semana === "quinta-feira"){
    console.log("Hoje é dia de estudar");
} else if (semana === "sexta-feira"){
    console.log("Hoje é dia de estudar");
} else if (semana === "sabado"){
    console.log("Hoje é dia de descansar");
} else if (semana === "domingo"){
    console.log("Hoje é dia de descansar");
} else{
    console.log("Dia inválida")
}
