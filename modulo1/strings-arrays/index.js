//-------------------------------------Exercício de Leitura de código-------------------------------------------

//EXERCÍCIO 1

/*let array
console.log('a. ', array)

O resultado é "undefined", pois não foi atribuído valor para a variável array*/

/*array = null
console.log('b. ', array)

O resultado é "null" porque esse foi o valor atribuído a variável array*/

/*array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

O resultado é 11, pois o método length em arrays determina o número de elementos em uma lista.*/

/*let i = 0
console.log('d. ', array[i])

array[i+1] = 19
console.log('e. ', array)

const valor = array[i+6]
console.log('f. ', valor)*/

//EXERCÍCIO 2

//Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"

/*const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)*/

//A frase será "SUBI NUM ÔNIBUS EM MIRROCOS" e serão marcados 27 espaços pelo comando length

//-----------------------------------------Exercícios de Escrita de código--------------------------------

//Exercício 1

/*Faça um programa que pergunte ao usuário seu nome e seu e-mail.
 Em seguida, Imprima no console a seguinte mensagem:
 O e-mail emailDoUsuario foi cadastrado com sucesso. Seja bem-vinda(o), nomeDoUsuario!*/

 /*const seuNome = prompt ("Qual o seu nome?")
 const seuEmail = prompt ("Qual o seu e-mail?")

 console.log("O e-mail", seuEmail, "foi cadastrado com sucesso. Seja bem vinda (o) ", seuNome, "!")*/

 //EXERCÍCIO 2

 /*Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável.
  Em seguida, siga os passos:
  a) Imprima no console o array completo*/

  /*const comidasFavoritas = ["Lasanha", "Pastel", "Macarrão", "Frango Assado", "Estrogonofe"]
  console.log(comidasFavoritas)*/

/*b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ",
 seguida por cada uma das comidas, **uma embaixo da outra**.*/


/*const primeiraComida = ["Lasanha"]
const segundaComida = ["Pastel"]
const terceiraComida = ["Macarrão"]
const quartaComida = ["Frango Asssado"]
const quintaComida = ["Estrogonofe"]

console.log("Essas são as minhas comidas favoritas")
console.log(primeiraComida)
console.log(segundaComida)
console.log(terceiraComida)
console.log(quartaComida)
console.log(quintaComida)*/

/*c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. 
Troque a segunda comida da sua lista pela inserida pelo usuário.
Imprima no consolea nova lista*/

/*const suacomidafavorita = prompt("Qual a sua comida favorita?")

const primeiraComida = ["Lasanha"]
const segundaComida = [suacomidafavorita]
const terceiraComida = ["Macarrão"]
const quartaComida = ["Frango Asssado"]
const quintaComida = ["Estrogonofe"]

console.log("Essas são as minhas comidas favoritas")
console.log(primeiraComida)
console.log(segundaComida)
console.log(terceiraComida)
console.log(quartaComida)
console.log(quintaComida)*/

//EXERCÍCIO 3

/*Faça um programa, seguindo os passos:
a) Crie um array vazio e guarde-o em uma variável, chamada listaDeTarefas
b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
c) Imprima o array no console*/


/*const listaDeTarefas = []
const tarefa1 = prompt("Diga uma tarefa que precisa fazer")
const tarefa2 = prompt ("Outra tarefa")
const tarefa3 = prompt ( "Mais uma")

listaDeTarefas.push (tarefa1, tarefa2, tarefa3)

console.log(listaDeTarefas)*/

//d) Peça ao usuário que digite o índice de uma tarefa que ele já realizou: 0, 1 ou 2
//e) Remova da lista o item de índice que o usuário escolheu.
//f) Imprima o array no consoleImprima no console 

/*const tarefaFeita = prompt ("Qual tarefa você já fez? insira na ordem da tarefa sendo a primeira 0")

listaDeTarefas.splice(0,1)

console.log(listaDeTarefas)*/





 