const prompt = require("prompt-sync")();

var semana = prompt("Digite o dia da semana: ");

semana = semana.toLowerCase();

switch(semana) {
    case "segunda":
        console.log("Hoje é dia de estudar");
        break;
    case "terca":
        console.log("Hoje é dia de estudar");
        break;
    case "quarta":
        console.log("Hoje é dia de estudar");
        break;
    case "quinta":
        console.log("Hoje é dia de estudar");
        break;
    case "sexta":
        console.log("Hoje é dia de estudar");
        break;
    case "sabado":
        console.log("Hoje é dia de descansar");
        break;
    case "domingo":
        console.log("Hoje é dia de descansar");
        break;
}