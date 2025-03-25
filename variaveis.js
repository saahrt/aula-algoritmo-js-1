const nome = 'João'; // É possível reatribuir valor
// nome = 'Maria'; // ERRO!

let nome1 = 'João'; // 


var nome2 = 'João'; //  Não é recomendável utilizar
var nome2 = 'Maria'; // OK!

//tipos de variáveis

var nome4 = "Raynna"; //String, as aspas duplas atribuem o valor de string para oq tiver dentro dela
var sobrenome = "Almeida";
var idade = 19; //number
var altura = 1.70; //no js é number tbm, em outras é float
var solteiro = true;
var frutas = ["uva","maça","banana"]; //array vetor
var alunos = ["michael", "daniel"]; //array

console.log(nome4); // exibe a variavel nome
console.log("nome"); // aspas duplas exibe oq há dentro dela, é uma string
console.log("Nome: " + nome4); // o '+' concatena 
console.log("Nome Completo: " + nome4 + sobrenome); // concatenando nome+sobrenome, exibe de forma encavalada
console.log("Nome Completo: " + nome4 + " " + sobrenome); // concatenando nome+sobrenome, forma antiquada de resolver a forma encavalada

//node ./nomedoarquivo para compilar o codigo no console.

//template strings

console.log(`Nome Completo: ${nome4} ${sobrenome}`); //template stiring facilita a concatenação `` ${variavel}
