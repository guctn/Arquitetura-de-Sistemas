// // DECLARANDO CONSTANTES
// const nome = "José"
// const idade = 27

// //aspas simples tem o mesmo efeito
// const sexo = "M"
// const endereco = 'Rua K, 12'
// const outro_end = "I'm Gustavo"
// // para usar aspas simples dentro do texto é necessário usar aspas duplas
// // Não da para declarar os tipos das variáveis

// //declarando variaveis
// //let: variável local escopo de bloco (abre chave fecha chave) - só existe dentro do bloco 
// let a = 2
// let b = "abc"

// //var: seu escopo é a função em que foi declarada ou global
// var c = 2 + 3
// var d = "abcd"

// console.log(a)
// console.log(b)
// console.log(c, d)


//escopo não restrito a bloco
var idade = 18

console.log(`Oi, ${nome}`) //interpolação - são crases invés de aspas

if (idade >= 18){
    var nome = "João"
    console.log(`Parabéns, ${nome}. Você pode dirigir`)
}

console.log(`Até mais, ${nome}.`)
// variavel nome não existia até a linha 32, mas como ela é global ai não da erro mesmo que esteja depois do console.log()
// se fosse let, ai sim causaria um problema

