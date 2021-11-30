//--------------------------------------Exercícios de leitura----------------------------------------------------

//Exercício 1 de Leitura----------------------------------------------------------------
//Leia o código abaixo. Indique todas as mensagens impressas no console

/*const bool1 = true
const bool2 = false
const bool3 = !bool2 //true*/

/*let resultado = bool1 && bool2
console.log("a. ", resultado)*/

/*o primeiro resultado é false, pois para que o "operador E &&" se configure
como "true é necessário que todas as variáveis tenham valor "true"*/

//---------------------------------------------------------------------------------------

/*resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado)*/

/*o segundo resultado também é false, pois seguindo a regra da negação a variável
"bool3" se torna "true", o inverso de "bool2", no entanto ainda não é suficiente para igualar todas as 
variáveis.*/

//-----------------------------------------------------------------------------------------

/*resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)*/

/* o terceiro resultado é true, pois ao resolvermos o operação dos parênteses chegamos ao resultado false
e logo depois solicita-se a negação do resultado, desta forma chegando ao resultado "true"*/

//------------------------------------------------------------------------------------------

//console.log("d. ", typeof resultado)

//o resultado tem valor aparecendo como undefined

//-------------------------------------------------------------------------------------------

//Exercício 2 de leitura
// 

/*let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)*/

/*as variáveis estão declaradas como strings, ou seja, são lidas como se fossem textos. Deste modo não
importando os números que serão escritos pelo usuário não será efetuada a operação de soma, que só aceita
números ou number. Ex: primeiroNumero = 5 e segundoNumero = 5 o resultado ficaria como 55 ao invés de 10.*/

//---------------------------------------------------------------------------------------------

//Exercício 3

/*let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")
let primeiroNumeroNumero = Number (primeiroNumero)
let segundoNumeroNumero = Number (segundoNumero)

const soma = primeiroNumeroNumero + segundoNumeroNumero

console.log(soma)*/

/* É necessário realizar a conversão de string para number, adicionando variáveis que irão substituir as iniciaus
ao momento de realizar a operação.*/

//------------------------------------------Exercícios de Escrita-------------------------------------------------

//Exercício 1 escrita de código

/*let suaIdade = prompt ("Qual é o sua idade?")
let idadeAmigo = prompt ("Qual a idade do seu melhor amigo?")
let suaIdadeNumero = Number (suaIdade)
let idadeAmigoNumero = Number (idadeAmigo)

comparação = suaIdadeNumero >= idadeAmigoNumero
console.log ("Sua idade é maior do que a do seu melhor amigo?", comparação)

let diferenca = suaIdadeNumero - idadeAmigoNumero 
console.log (diferenca)*/

//Exercício 2 de escrita

/*let numeroInserido = prompt ("Insira um número par")
let numeroInseridoNumero = Number (numeroInserido)

let resultado = numeroInseridoNumero / 2

console.log(resultado)*/

/*Não importando se os valores são altos ou pequenos, a divisão é feita sem erros*/

/* Mesmo inserindo um número ímpar a divisão foi feita*/

//Exercício 3 de escrita de código

let idadeAnos = prompt ("Qual a sua idade em anos?")
let idadeAnosNumero = Number(idadeAnos)

divisaoPorMes = idadeAnosNumero * 12
console.log(divisaoPorMes)
divisaoPorDias = divisaoPorMes * 30
console.log(divisaoPorDias)
divisaoPorHoras = divisaoPorDias * 24
console.log(divisaoPorHoras)

console.log("A idade do usuário em meses", divisaoPorMes, "A idade do usuário em dias", divisaoPorDias,
 "A idade do usuário em horas", divisaoPorhoras)


//Exercício 4 de escrita de código

/*let numero1 = prompt ("Digite um número")
let numero2 = prompt ("Digite outro número")
let numero1Numero = Number (numero1)
let numero2Numero = Number (numero2)

comparaçãoMaior = numero1Numero > numero2Numero
comparaçãoIgual = numero1Numero === numero2Numero
primeiroDivisivelSegundo = numero1Numero % numero2Numero === 0
segundoDivisivelPrimeiro = numero2Numero % numero1Numero === 0

console.log("O primeiro numero é maior que segundo?", comparaçãoMaior, "O primeiro numero é igual ao segundo?",
 comparaçãoIgual, "O primeiro numero é divisível pelo segundo?", primeiroDivisivelSegundo, 
 "O segundo numero é divisível pelo primeiro?", segundoDivisivelPrimeiro)*/
