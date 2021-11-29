//1 A primeira operação deveria imprimir o resuldado 10 e a segunda operação deveria imprimir o resultado 5
//2 o resultado da operação a ser impresso é 10 10 10 já que todos os elementos tem atribuídos valores iguais
// 3 a variavel p pode ser nomeada como horasTrabalhadasDia , a variavel t pagamentoPorDia e alert pode ser escrito como valorHoraTrabalhada

//Exercício de Escrita de Código
const nome = prompt ("Qual o seu nome?")
const idade = prompt ("Qual a sua idade?")
console.log ("Olá", typeof nome, "você tem", typeof idade, "anos")

//foi indefinido por não ser haver sido atribuído um valor
// As duas variaveis imprimiram string
console.log ("Olá", nome, "você tem", idade, "anos")

let pergunta1 = prompt ("Você gosta de futebol?")
let pergunta2 = prompt ("Você torce pro Fluminense?")
let pergunta3 = prompt ("Você é Feliz?")

/*let resposta1
let resposta2
let resposta3*/

console.log ("Você gosta de futebol?", pergunta1)
console.log ("Você torce pro Fluminense?", pergunta2)
console.log ("Você é Feliz?", pergunta3)

//3

let a = 10
let b = 25
let c
//lógica de troca de valores
c = a
a = b
b = c

console.log("O novo valor de a é", a) // novo valor de a será 25
console.log("O novo valor de b é", b) // novo valor de b será 10
