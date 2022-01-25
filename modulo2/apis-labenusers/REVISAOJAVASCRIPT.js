//VARIÁVEIS
//const nomeDoProduto = prompt("Insira o nome do produto")
//const precoDoProduto = Number(prompt("Insira o preço do produto"))
//let novoPrecoDoProduto = precoDoProduto - 1

//console.log(`O valor de ${nomeDoProduto} é ${novoPrecoDoProduto} reais`)

//OPERADORES ARITMÉTICOS

//Primeira Resolução

//const primeiroNumero = Number(prompt("Insira um número"))
//const segundoNumero = Number(prompt("Insira outro número"))

//let resultadoSoma = primeiroNumero + segundoNumero
//let resultadoSubtracao = primeiroNumero - segundoNumero
//let resultadoMultiplicacao = primeiroNumero * segundoNumero
//let resultadoDivisao = primeiroNumero / segundoNumero
//let resultadoRestoDivisao = primeiroNumero % segundoNumero

//console.log(resultadoSoma, resultadoSubtracao,resultadoMultiplicacao, resultadoDivisao, resultadoRestoDivisao)

//Resolução com o Auxílio do exemplo

//const num1 = Number(prompt("Insira um número"))
//const num2 = Number(prompt("Insira outro número"))

//console.log(`O seu primeiro número é ${num1} e seu segundo número é ${num2}`)
//console.log("Soma", num1 + num2)
//console.log("Subtração", num1 - num2)
//console.log("Multiplicação", num1 * num2)
//console.log("Divisão", num1 / num2)
//console.log("Resto da Divisão", num1 % num2)

//COMPARADORES

const numeroSorteado = Math.floor((Math.random() * 10) + 1)
const numeroescolhido = Number(prompt("Digite um número do 1 ao 10"))

console.log(`O número sorteado foi ${numeroSorteado}`)
console.log(`O número escolhido foi ${numeroescolhido}`)

if (numeroescolhido === numeroSorteado){
    console.log("O número escolhido é igual ao número sorteado!")
}
else if(numeroescolhido > numeroSorteado){
    console.log("O número escolhido é maior que o número sorteado!")
}
else{console.log("O número escolhido é menor que o número sorteado")}