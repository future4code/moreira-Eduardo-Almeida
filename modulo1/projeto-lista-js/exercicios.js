// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura,largura) {
  // implemente sua lógica aqui
  altura = prompt("Digite a altura")
  largura = prompt("Digite a largura")
 const area = altura * largura 
 console.log(area)
 return area 
 
}
console.log(calculaAreaRetangulo(altura,largura))

// EXERCÍCIO 02
function imprimeIdade(idade) {
  // implemente sua lógica aqui
const anoAtual = prompt("Digite o ano atual")
const anoDeNascimento = prompt("Digite o seu ano de nascimento")
idade = anoAtual - anoDeNascimento
console.log(idade)
return idade
}
console.log(imprimeIdade(idade))
// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
peso = prompt("Digite o seu peso")
altura = prompt("Digite a sua altura")
const imc = peso / (altura * 2)
console.log(imc)
return imc
}
console.log(calculaIMC(peso, altura))

// EXERCÍCIO 04
function imprimeInformacoesUsuario(nome, idade, email) {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
nome = prompt("Digite seu nome")
idade = prompt("Digite a sua idade")
email = prompt("Digite o seu email")
let infoUsuario = ("Meu nome é", nome, "tenho", idade, "anos, e o meu email é", email, ".")
console.log(infousuario)
return(infoUsuario)
}
console.log(imprimeInformacoesUsuario(nome, idade, email))
// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}