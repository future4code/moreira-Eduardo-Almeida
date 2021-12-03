//----------------------------------------Exercícios de leitura de código------------------------------------

//EXERCÍCIO 1_____________________________________________________________________________________________

// Leia o código a seguir:

/*function minhaFuncao(variavel) {
	return variavel * 5
}

 console.log(minhaFuncao(2))
  console.log(minhaFuncao(10))*/

// a) O que vai ser impresso no console?

// Será impresso o resultado de duas multiplicações, no caso 2x5 = 10 e 10 x 5 = 50 

/* b) O que aconteceria se retirasse os dois console.log e simplesmente invocasse
 a função minhaFuncao(2) e minhaFuncao(10)? O que apareceria no console?*/

/*function minhaFuncao (2)
function minhaFuncao (10)*/

// Nada é impresso no console além de uma mensagem de erro, já que não foi possível relacionar os dois escopos.

//EXCERCÍCIO 2______________________________________________________________________________________________

//Leia o código abaixo

/*let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)*/

//a. Explique o que essa função faz e qual é sua utilidade

/* Ela transformará o texto inserido pelo usuário fazendo com que todas as letras estejam minúsculas
 e também irá verificar se a string cenoura está presente no texto indicando com true or false.*/

//b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:

//i.   Eu gosto de cenoura // true
//ii.  CENOURA é bom pra vista // true
//iii. Cenouras crescem na terra // false



//--------------------------------------Exercício de Escrita de Código----------------------------------------

//EXERCÍCIO 1

//Escreva as funções explicadas abaixo:

/*a. A função não deve receber nenhum parâmetro
 e deve imprimir uma mensagem falando algumas informações sobre você, como:*/

 //"Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."

 /*function imprimirQuemSou() {
     console.log("Eu sou Eduardo tenho 25 anos, moro em Goiás e sou estudante.")
 }

 console.log(imprimirQuemSou())*/

/* b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa:
 o nome (string), a idade (number), a cidade (string) e uma profissão (string).
 Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:*/

//Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].

 /*function quemEvc() {
const seuNome = prompt("Qual o seu nome?")
 const suaIdade = prompt("Qual a sua idade?")
 const endereco = prompt("Onde você mora?")
 const vcEstuda = prompt("Qual a sua ocupação?")
const suaIdadenumero = Number(suaIdade)
 console.log(`Eu sou ${seuNome}, tenho ${suaIdade} anos, moro em ${endereco} e sou ${vcEstuda} .`)}

 console.log(quemEvc())*/

 //EXERCÍCIO 2

//  Escreva as funções explicadas abaixo:

/*a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função,
 faça a soma das duas entradas e retorne o resultado.Invoque a função e imprima no console o resultado.*/

/*function soma2Numeros() {
const numero1 = prompt("Digite um número")
const numero2 = prompt ("Digite outro número")
const numero1Numero = Number(numero1)
const numero2Numero = Number(numero2)
const resultado = numero1Numero + numero2Numero
return resultado
}
console.log(soma2Numeros())*/

/*b) Faça uma função que recebe 2 números
 e retorne um booleano que informa se o primeiro número é maior ou igual ao segundo.*/

 /*function soma2Numeros() {
    const numero1 = prompt("Digite um número")
    const numero2 = prompt ("Digite outro número")
    const numero1Numero = Number(numero1)
    const numero2Numero = Number(numero2)
    const resultado = numero1Numero >= numero2Numero
    return resultado
    }
    console.log(soma2Numeros())*/

 //c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

function numeroPAr() {

    const numero= prompt("Digite um número")
    const numeroImparOuPar = numero / 2
   
    return numeroImparOuPar

}
console.log(numeroPAr())
